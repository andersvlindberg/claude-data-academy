import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Mode, Streak, Study } from '../types'

const PANE = 'academy'
const ORANGE = '#E8752A'
const GREY = '#2B2B2B'

const MODES: Mode[] = ['LEARN', 'BUILD', 'QUIZ', 'REVIEW', 'INTERVIEW']
const MODE_HINT: Record<Mode, string> = {
  LEARN: 'one step at a time',
  BUILD: 'you write, Claude reviews',
  QUIZ: 'prove it, ~80% to pass',
  REVIEW: 'senior feedback on your work',
  INTERVIEW: 'practise the job interview',
}

const LAYERS = ['Sources', 'Ingest', 'Store', 'Transform', 'Serve', 'Analyse', 'Decide']
const LAYER_WORDS: string[][] = [
  ['shopify', 'ga4', 'gtm', 'tag manager', 'tracking', 'datalayer', 'cookie', 'crm', 'hubspot', 'pixel', 'event'],
  ['fivetran', 'dlt', 'airbyte', 'api', 'ingest', 'extract', 'connector', 'elt', 'etl'],
  ['snowflake', 'bigquery', 'warehouse', 'duckdb', 'schema', 'role', 'masking', 'storage'],
  ['dbt', 'sql', 'join', 'cte', 'window', 'incremental', 'staging', 'mart', 'model', 'macro', 'test', 'dimensional', 'star schema'],
  ['looker', 'tableau', 'dashboard', 'reverse etl', 'hightouch', 'census', 'semantic', 'metric', 'kpi'],
  ['statistic', 'a/b', 'regression', 'cohort', 'churn', 'machine learning', 'pandas', 'python', 'forecast', 'segment'],
  ['business', 'strategy', 'journey', 'stakeholder', 'presentation', 'roi', 'customer value', 'pitch'],
]
const ROLE_OF_LAYER = ['data engineer', 'data engineer', 'data engineer', 'analytics engineer', 'analytics engineer', 'data analyst', 'data analyst']

const TIPS = [
  'Ask for a hint before you ask for the answer.',
  'Say your level: "I am new to window functions".',
  'Explain it out loud. If you can teach it, you know it.',
  'Commit after every session. Your GitHub is your portfolio.',
  'Never paste passwords, keys or real customer data.',
  'ELT: load raw first, transform in the warehouse with dbt.',
  'Claude asks before anything you cannot undo.',
]

const EMPTY: Study = { mode: null, topic: '', layer: -1, startedAt: 0, turns: 0 }
const study = atom({ plugin: 'academy-hud', key: 'study' } as const, EMPTY, { shape: 'study-1' })
const streak = atom({ plugin: 'academy-hud', key: 'streak' } as const, { days: 0, sessions: 0 })
const isBandHidden = atom({ plugin: 'academy-hud', key: 'isBandHidden' } as const, false)

function detectLayer(text: string): number {
  const lower = text.toLowerCase()
  let best = -1
  let bestHits = 0
  LAYER_WORDS.forEach((words, i) => {
    const hits = words.filter(w => lower.includes(w)).length
    if (hits > bestHits) {
      best = i
      bestHits = hits
    }
  })
  return best
}

function minutesSince(startedAt: number, now: number): number {
  return startedAt ? Math.max(0, Math.round((now - startedAt) / 60000)) : 0
}

function today(now: number): string {
  return new Date(now).toISOString().slice(0, 10)
}

async function bumpStreak($: EngineInterface, now: number): Promise<void> {
  const day = today(now)
  const last = (await $.store.get('lastDay')) as string | undefined
  const saved = ((await $.store.get('streak')) as Streak | undefined) ?? { days: 0, sessions: 0 }
  if (last === day) {
    await update($, streak, () => saved)
    return
  }
  const yesterday = today(now - 86400000)
  const next: Streak = { days: last === yesterday ? saved.days + 1 : 1, sessions: saved.sessions + 1 }
  await $.store.set('lastDay', day)
  await $.store.set('streak', next)
  await update($, streak, () => next)
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'academy', description: 'Open the Data Academy study pane' })
    await $.command.register({ name: 'academy-band', description: 'Show or hide the Data Academy band above the prompt' })
    const saved = (await $.store.get('streak')) as Streak | undefined
    if (saved) await update($, streak, () => saved)
    return next(e)
  })

  on('command.run', { command: 'academy' }, async $ => {
    const { isPlaced } = await $.ui.open({ id: PANE, title: 'Data Academy' })
    if (isPlaced) return { text: 'Data Academy pane opened.' }

    const s = await read($, study)
    const st = await read($, streak)
    const chain = LAYERS.map((name, i) => (i === s.layer ? `[${name}]` : name)).join(' → ')
    return {
      text: [
        'DATA ACADEMY (this app does not show side panes here, so here is the text view)',
        `Mode: ${s.mode ?? 'not started'}${s.topic ? ` · ${s.topic}` : ''}`,
        `Chain: ${chain}`,
        `Streak: ${st.days} days · ${st.sessions} sessions`,
        'Start with: LEARN: <topic>, BUILD: <task>, QUIZ, REVIEW or INTERVIEW',
      ].join('\n'),
    }
  })

  on('command.run', { command: 'academy-band' }, async $ => {
    await update($, isBandHidden, hidden => !hidden)
    const hidden = await read($, isBandHidden)
    return { text: hidden ? 'Academy band hidden.' : 'Academy band shown.' }
  })

  on('prompt.submit', async ($, e, next) => {
    const text = typeof e.text === 'string' ? e.text : ''
    const now = await $.clock.now()
    const match = /^\s*(LEARN|BUILD|QUIZ|REVIEW|INTERVIEW)\b[:\s-]*(.*)$/is.exec(text)
    const layer = detectLayer(text)

    await update($, study, s => {
      const startedAt = s.startedAt || now
      if (match) {
        const mode = (match[1] ?? 'LEARN').toUpperCase() as Mode
        const topic = (match[2] ?? '').split('\n')[0]?.trim().slice(0, 60) ?? ''
        return { ...s, mode, topic: topic || s.topic, layer: layer >= 0 ? layer : s.layer, startedAt }
      }
      return { ...s, layer: layer >= 0 ? layer : s.layer, startedAt }
    })

    if (match) await bumpStreak($, now)

    return next(e)
  })

  on('turn.complete', async ($, e, next) => {
    await update($, study, s => (s.mode ? { ...s, turns: s.turns + 1 } : s))
    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const s = await read($, study)
    if (e.props.hasSurvey || !s.mode || (await read($, isBandHidden))) return next(e)

    const { Box, Text } = $.ui.resolve(e)
    const st = await read($, streak)
    const mins = minutesSince(s.startedAt, await $.clock.now())

    return (
      <Box flexDirection="row" gap={1}>
        <Text backgroundColor={ORANGE} color="#FFFFFF" weight="bold"> DATA ACADEMY </Text>
        <Text color={ORANGE} weight="bold">{s.mode}</Text>
        {s.topic !== '' && <Text>{s.topic}</Text>}
        <Text dimColor>·</Text>
        <Text>
          {LAYERS.map((_, i) => (i === s.layer ? '●' : '○')).join('')}
        </Text>
        {s.layer >= 0 && <Text color={ORANGE}>{LAYERS[s.layer]}</Text>}
        <Text dimColor>· {mins}m · {s.turns} turns{st.days > 0 ? ` · streak ${st.days}d` : ''}</Text>
      </Box>
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text, Button } = $.ui.resolve(e)
    const s = await read($, study)
    const st = await read($, streak)
    const now = await $.clock.now()
    const mins = minutesSince(s.startedAt, now)
    const tip = TIPS[Math.floor(now / 3600000) % TIPS.length]

    const startMode = (mode: Mode) => () =>
      void $.prompt.fill({ text: `${mode}: `, mode: 'replace' })

    return (
      <Box flexDirection="column" gap={1} padding={1}>
        <Box flexDirection="row" gap={1}>
          <Text backgroundColor={ORANGE} color="#FFFFFF" weight="bold" size="heading"> DA </Text>
          <Text weight="bold" size="heading">Data Academy</Text>
        </Box>

        <Box flexDirection="column">
          <Text dimColor size="caption">MODE</Text>
          <Text color={ORANGE} weight="bold">{s.mode ?? 'not started'}</Text>
          <Text dimColor>{s.mode ? MODE_HINT[s.mode] : 'Pick a mode below to start a session'}</Text>
          {s.topic !== '' && <Text>Topic: {s.topic}</Text>}
        </Box>

        <Box flexDirection="column">
          <Text dimColor size="caption">START A SESSION</Text>
          <Box flexDirection="row" gap={1} flexWrap="wrap">
            {MODES.map((mode, i) => (
              <Button key={mode} label={mode} hotkey={String(i + 1)} onPress={startMode(mode)} />
            ))}
          </Box>
        </Box>

        <Box flexDirection="column">
          <Text dimColor size="caption">WHERE YOU ARE IN THE DATA CHAIN</Text>
          {LAYERS.map((name, i) => (
            <Box key={name} flexDirection="row" gap={1}>
              {i === s.layer ? (
                <Text backgroundColor={ORANGE} color="#FFFFFF" weight="bold"> {i + 1} {name} </Text>
              ) : (
                <Text dimColor> {i + 1} {name} </Text>
              )}
              {i === s.layer && <Text color={ORANGE}>← {ROLE_OF_LAYER[i]}</Text>}
            </Box>
          ))}
          <Text dimColor>orchestrated by Dagster · versioned in Git · governed by GDPR</Text>
        </Box>

        <Box flexDirection="column">
          <Text dimColor size="caption">THIS SESSION</Text>
          <Text tabular>{mins} min · {s.turns} turns</Text>
          <Text tabular>Streak {st.days} day{st.days === 1 ? '' : 's'} · {st.sessions} sessions total</Text>
        </Box>

        <Box flexDirection="row" gap={1} flexWrap="wrap">
          <Button
            key="close"
            label="Close session + log"
            hotkey="c"
            onPress={async () => {
              void $.prompt.submit({ text: 'Close the session and give me my learning-log entry.' })
              await update($, study, () => EMPTY)
            }}
          />
          <Button key="hint" label="Give me a hint" hotkey="h" onPress={() => void $.prompt.submit({ text: 'Give me a hint, not the answer.' })} />
        </Box>

        <Box borderStyle="round" borderColor={GREY} paddingX={1}>
          <Text italic dimColor>Tip: {tip}</Text>
        </Box>
      </Box>
    )
  })
}
