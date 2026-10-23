import { expect, test } from 'claude-code/testing'

const PANE = {
  plugin: 'academy-hud',
  component: 'Pane',
  requestId: 'academy',
  props: { title: 'Data Academy', isFocused: false, bodyColumns: 48, placement: 'dock', scroll: { offset: 0, bodyRows: 40 }, view: {} },
} as const

test('LAB 08 shows the lab, its stack layer and the git checklist on every surface', async ($, on) => {
  on('command.register', (_, e) => ({ value: { command: e.name } }))
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('prompt.submit', (_, e) => ({ text: e.text }))
  on('clock.now', () => ({ value: 1_800_000_000_000 }))
  on('store.get', () => ({ value: undefined }))
  on('store.set', () => ({ value: undefined }))

  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })
  await $.prompt.submit({ text: 'LAB 08' })

  for (const surface of ['terminal', 'desktop', 'vscode', 'mobile'] as const) {
    const ui = await $.ui.mount({ ...PANE, surface })
    expect((await ui.find({ type: 'Text', text: /^LAB 08$/ }))?.text).toBe('LAB 08')
    expect((await ui.find({ type: 'Text', text: /first dbt project/ }))?.text).toContain('Your first dbt project')
    expect((await ui.find({ type: 'Text', text: /Committed/ }))?.text).toContain('Committed (0)')
    await ui.unmount()
  }
})

test('before any session the pane invites you to start', async ($, on) => {
  on('clock.now', () => ({ value: 1_800_000_000_000 }))
  on('store.get', () => ({ value: undefined }))
  const ui = await $.ui.mount({ ...PANE, surface: 'desktop' })
  expect((await ui.find({ type: 'Text', text: /Nothing running/ }))?.text).toBe('Nothing running')
  await ui.unmount()
})

test('/academy @<hub link> saves the hub, with or without the @', async ($, on) => {
  const saved: Record<string, unknown> = {}
  on('command.register', (_, e) => ({ value: { command: e.name } }))
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('store.get', (_, e) => ({ value: saved[e.key] }))
  on('store.set', (_, e) => { saved[e.key] = e.value; return { value: undefined } })
  on('process.run', () => ({ value: { exitCode: 0, stdout: '', stderr: '' } }))
  on('clock.now', () => ({ value: 1_800_000_000_000 }))
  await $.session.start({ cwd: '/', surface: 'terminal', isInteractive: true })
  const r = await $.command.run({ command: 'academy', args: '@https://claude.ai/artifact/abc123' })
  expect(saved['hubUrl']).toBe('https://claude.ai/artifact/abc123')
  expect(String((r as { text?: string }).text)).toContain('Hub saved')
})
