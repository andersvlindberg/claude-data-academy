import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Mode, Streak, Study } from '../types'
import { LABS } from './labs'

const PANE = 'academy'
const EMBER = '#FF7A2F'
const GOOD = '#5BD18B'
const HUB = 'Your study hub (the Data Academy artifact)'

const MODES: Mode[] = ['LAB', 'LEARN', 'BUILD', 'QUIZ', 'REVIEW', 'INTERVIEW']
const LAYERS = ['Sources', 'Ingest', 'Store', 'Transform', 'Serve', 'Analyse', 'Decide']
const TOOLS = ['GA4 · Shop · CRM', 'Fivetran · dlt', 'Snowflake · DuckDB', 'dbt', 'Looker Studio', 'Analysis', 'Strategy']
const LAYER_WORDS: string[][] = [
  ['shopify', 'ga4', 'gtm', 'tag manager', 'tracking', 'datalayer', 'cookie', 'crm', 'hubspot', 'event'],
  ['fivetran', 'dlt', 'airbyte', 'api', 'ingest', 'extract', 'connector', 'elt', 'dagster', 'pipeline'],
  ['snowflake', 'bigquery', 'warehouse', 'duckdb', 'schema', 'role', 'masking', 'terraform'],
  ['dbt', 'sql', 'join', 'cte', 'window', 'incremental', 'staging', 'mart', 'model', 'macro', 'test'],
  ['looker', 'tableau', 'dashboard', 'reverse etl', 'semantic', 'metric', 'kpi'],
  ['statistic', 'a/b', 'regression', 'cohort', 'churn', 'pandas', 'forecast', 'segment', 'rfm'],
  ['business', 'strategy', 'journey', 'stakeholder', 'presentation', 'roi', 'campaign'],
]
const TIPS = [
  'Commit after every milestone. Small commits tell a story.',
  'Ask for a hint before the answer.',
  'Never commit secrets or generated data.',
  'Read your own diff in the pull request like a reviewer.',
  'Finished? Tick the step off in your hub and open the next one there.',
  'Explain it out loud. If you can teach it, you know it.',
]

const EMPTY: Study = { mode: null, labId: '', topic: '', layer: -1, startedAt: 0, turns: 0, commits: 0, pushed: false, prOpened: false }
const study = atom({ plugin: 'academy-hud', key: 'study' } as const, EMPTY, { shape: 'study-2' })
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

const minutesSince = (startedAt: number, now: number) => (startedAt ? Math.max(0, Math.round((now - startedAt) / 60000)) : 0)
const today = (now: number) => new Date(now).toISOString().slice(0, 10)

async function bumpStreak($: EngineInterface, now: number): Promise<void> {
  const day = today(now)
  const last = (await $.store.get('lastDay')) as string | undefined
  const saved = ((await $.store.get('streak')) as Streak | undefined) ?? { days: 0, sessions: 0 }
  if (last === day) {
    await update($, streak, () => saved)
    return
  }
  const next: Streak = { days: last === today(now - 86400000) ? saved.days + 1 : 1, sessions: saved.sessions + 1 }
  await $.store.set('lastDay', day)
  await $.store.set('streak', next)
  await update($, streak, () => next)
}

function check(done: boolean, label: string, Text: any) {
  return (
    <Text>
      <Text color={done ? GOOD : undefined} dimColor={!done}>{done ? '✓' : '○'}</Text> <Text dimColor={!done}>{label}</Text>
    </Text>
  )
}

const HUB_RE = /^https:\/\/claude\.ai\/(code\/)?artifact\/[A-Za-z0-9-]+\/?$/

async function openUrl($: EngineInterface, url: string): Promise<boolean> {
  const tries: string[][] = [['cmd', '/c', 'start', '', url], ['open', url], ['xdg-open', url]]
  for (const argv of tries) {
    try {
      const r = await $.process.run(argv, { timeoutMs: 5000 })
      if (r.exitCode === 0) return true
    } catch {}
  }
  return false
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'academy', description: 'Open your Data Academy hub and the practice pane. First time: /academy <your hub link>' })
    await $.command.register({ name: 'academy-band', description: 'Show or hide the Data Academy band above the prompt' })
    const saved = (await $.store.get('streak')) as Streak | undefined
    if (saved) await update($, streak, () => saved)
    return next(e)
  })

  on('command.run', { command: 'academy' }, async ($, e) => {
    const arg = (typeof e.args === 'string' ? e.args : '').trim().replace(/^[@<"']+|[>"']+$/g, '')
    if (HUB_RE.test(arg)) {
      await $.store.set('hubUrl', arg)
      await openUrl($, arg)
      return { text: `Hub saved. /academy now opens it: ${arg}` }
    }
    const hub = (await $.store.get('hubUrl')) as string | undefined
    const opened = hub ? await openUrl($, hub) : false
    const { isPlaced } = await $.ui.open({ id: PANE, title: 'Data Academy' })
    const s = await read($, study)
    const lab = s.labId ? LABS[s.labId] : undefined
    const lines = [
      hub ? (opened ? `Opening your hub: ${hub}` : `Your hub: ${hub}`) : 'No hub linked yet. Copy your hub link (the Data Academy artifact) and run: /academy <link>',
      lab ? `Now: LAB ${s.labId} · ${lab[0]} · git ${s.commits} commit(s), ${s.pushed ? 'pushed' : 'not pushed'}, ${s.prOpened ? 'PR open' : 'no PR yet'}` : 'No lab running. Pick the next step in your hub, then type LAB <number> here.',
    ]
    if (!isPlaced) lines.push('Loop: hub → lecture → build here → commit, push, pull request → tick it off in the hub')
    return { text: lines.join('\n') }
  })

  on('command.run', { command: 'academy-band' }, async $ => {
    await update($, isBandHidden, hidden => !hidden)
    return { text: (await read($, isBandHidden)) ? 'Academy band hidden.' : 'Academy band shown.' }
  })

  on('prompt.submit', async ($, e, next) => {
    const text = typeof e.text === 'string' ? e.text : ''
    const now = await $.clock.now()
    const labMatch = /^\s*LAB\s*(\d{1,2})\b/i.exec(text)
    const custom = /^\s*LAB\s*\(custom\):\s*([^.\n]+)/i.exec(text)
    const modeMatch = /^\s*(LEARN|BUILD|QUIZ|REVIEW|INTERVIEW)\b[:\s-]*(.*)$/is.exec(text)
    const layer = detectLayer(text)

    await update($, study, (s): Study => {
      const startedAt = s.startedAt || now
      if (labMatch) {
        const id = (labMatch[1] ?? '').padStart(2, '0')
        const lab = LABS[id]
        return { ...EMPTY, mode: 'LAB', labId: id, topic: lab ? lab[0] : `Lab ${id}`, layer: lab ? lab[1] : layer, startedAt: now }
      }
      if (custom) return { ...EMPTY, mode: 'LAB', labId: '', topic: (custom[1] ?? '').trim().slice(0, 60), layer, startedAt: now }
      if (modeMatch) {
        const topic = (modeMatch[2] ?? '').split('\n')[0]?.trim().slice(0, 60) ?? ''
        return { ...s, mode: (modeMatch[1] ?? 'LEARN').toUpperCase() as Mode, topic: topic || s.topic, layer: layer >= 0 ? layer : s.layer, startedAt }
      }
      return { ...s, layer: s.layer >= 0 ? s.layer : layer, startedAt }
    })
    if (labMatch || custom || modeMatch) await bumpStreak($, now)
    return next(e)
  })

  on('tool.call', { tool: 'Bash' }, async ($, e, next) => {
    const ran = await next(e)
    const cmd = typeof e.command === 'string' ? e.command : ''
    const ok = ran.deny === undefined && ran.isError !== true && (await read($, study)).mode === 'LAB'
    if (ok && /\bgit\s+commit\b/.test(cmd)) await update($, study, s => ({ ...s, commits: s.commits + 1 }))
    if (ok && /\bgit\s+push\b/.test(cmd)) await update($, study, s => ({ ...s, pushed: true }))
    if (ok && /\bgh\s+pr\s+create\b/.test(cmd)) await update($, study, s => ({ ...s, prOpened: true }))
    return ran
  })

  on('turn.complete', async ($, e, next) => {
    await update($, study, s => (s.mode ? { ...s, turns: s.turns + 1 } : s))
    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const s = await read($, study)
    if (e.props.hasSurvey || !s.mode || (await read($, isBandHidden))) return next(e)
    const { Box, Text } = $.ui.resolve(e)
    const mins = minutesSince(s.startedAt, await $.clock.now())
    return (
      <Box flexDirection="row" gap={1}>
        <Text color={EMBER} weight="bold">◆ DA</Text>
        <Text weight="bold">{s.mode === 'LAB' && s.labId ? `LAB ${s.labId}` : s.mode}</Text>
        {s.topic !== '' && <Text dimColor>{s.topic}</Text>}
        <Text dimColor>·</Text>
        <Text>{LAYERS.map((_, i) => (i === s.layer ? '●' : '·')).join(' ')}</Text>
        {s.mode === 'LAB' && (
          <Text dimColor>
            · git {s.commits > 0 ? '✓' : '○'}commit {s.pushed ? '✓' : '○'}push {s.prOpened ? '✓' : '○'}PR
          </Text>
        )}
        <Text dimColor>· {mins}m</Text>
      </Box>
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text, Button, Link } = $.ui.resolve(e)
    const hub = (await $.store.get('hubUrl')) as string | undefined
    const s = await read($, study)
    const st = await read($, streak)
    const now = await $.clock.now()
    const mins = minutesSince(s.startedAt, now)
    const tip = TIPS[Math.floor(now / 3600000) % TIPS.length]
    const fill = (text: string) => () => void $.prompt.fill({ text, mode: 'replace' })
    const isLab = s.mode === 'LAB'

    return (
      <Box flexDirection="column" gap={1} padding={1}>
        <Box flexDirection="row" gap={1}>
          <Text color={EMBER} weight="bold">◆</Text>
          <Text weight="bold">Data Academy</Text>
          <Text dimColor>· practice</Text>
        </Box>
        {hub ? <Link href={hub} label="Open your hub ↗" /> : <Text dimColor>Link your hub: /academy &lt;hub link&gt;</Text>}

        <Box flexDirection="column">
          <Text dimColor size="caption">NOW</Text>
          {s.mode ? (
            <Text weight="semibold" size="heading">{isLab && s.labId ? `LAB ${s.labId}` : s.mode}</Text>
          ) : (
            <Text weight="semibold">Nothing running</Text>
          )}
          <Text dimColor>{s.topic || 'Pick the next step in ' + HUB + ', then type LAB <number> here.'}</Text>
          {s.mode && <Text dimColor tabular>{mins} min · {s.turns} turns · streak {st.days}d</Text>}
        </Box>

        {isLab && (
          <Box flexDirection="column">
            <Text dimColor size="caption">THIS STEP</Text>
            {check(true, 'Lecture in the hub (or skipped)', Text)}
            {check(s.turns > 0, 'Practice project set up', Text)}
            {check(s.commits > 0, `Committed (${s.commits})`, Text)}
            {check(s.pushed, 'Pushed to your fork', Text)}
            {check(s.prOpened, 'Pull request opened', Text)}
            <Text dimColor>Then merge it and tick the step off in your hub.</Text>
          </Box>
        )}

        <Box flexDirection="column">
          <Text dimColor size="caption">STACK</Text>
          {LAYERS.map((name, i) => (
            <Box key={name} flexDirection="row" gap={1}>
              <Text color={i === s.layer ? EMBER : undefined} dimColor={i !== s.layer}>{i === s.layer ? '●' : '·'} {name}</Text>
              <Text dimColor>{TOOLS[i]}</Text>
            </Box>
          ))}
        </Box>

        <Box flexDirection="row" gap={1} flexWrap="wrap">
          {MODES.map((mode, i) => (
            <Button key={mode} label={mode} hotkey={String(i + 1)} onPress={fill(mode === 'LAB' ? 'LAB ' : `${mode}: `)} />
          ))}
        </Box>

        <Box flexDirection="row" gap={1} flexWrap="wrap">
          <Button key="hint" label="Hint" hotkey="h" onPress={() => void $.prompt.submit({ text: 'Give me a hint, not the answer.' })} />
          <Button key="git" label="Git next step" hotkey="g" onPress={() => void $.prompt.submit({ text: 'What is my next Git step for this lab? Explain it in one or two lines and let me type the command.' })} />
          <Button
            key="close"
            label="Close + log"
            hotkey="c"
            onPress={async () => {
              void $.prompt.submit({ text: 'Close the session: give me my learning-log entry and remind me to tick the step off in my hub.' })
              await update($, study, () => EMPTY)
            }}
          />
        </Box>

        <Text italic dimColor>{tip}</Text>
      </Box>
    )
  })
}
