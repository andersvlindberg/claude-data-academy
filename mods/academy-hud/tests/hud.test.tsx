import { expect, test } from 'claude-code/testing'

const PANE = {
  plugin: 'academy-hud',
  component: 'Pane',
  requestId: 'academy',
  props: { title: 'Data Academy', isFocused: false, bodyColumns: 48, placement: 'dock', scroll: { offset: 0, bodyRows: 40 }, view: {} },
} as const

test('a LEARN prompt sets mode, topic and stack layer on every surface', async ($, on) => {
  on('command.register', (_, e) => ({ value: { command: e.name } }))
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('prompt.submit', (_, e) => ({ text: e.text }))
  on('clock.now', () => ({ value: 1_800_000_000_000 }))
  on('store.get', () => ({ value: undefined }))
  on('store.set', () => ({ value: undefined }))

  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })
  await $.prompt.submit({ text: 'LEARN: incremental models in dbt' })

  for (const surface of ['terminal', 'desktop', 'vscode', 'mobile'] as const) {
    const ui = await $.ui.mount({ ...PANE, surface })
    expect((await ui.find({ type: 'Text', text: /^LEARN$/ }))?.text).toBe('LEARN')
    expect((await ui.find({ type: 'Text', text: /Topic:/ }))?.text).toBe('Topic: incremental models in dbt')
    expect((await ui.find({ type: 'Text', text: /4 Transform/ }))?.text).toContain('Transform')
    await ui.unmount()
  }
})

test('before any session the pane invites you to start', async ($, on) => {
  on('clock.now', () => ({ value: 1_800_000_000_000 }))
  const ui = await $.ui.mount({ ...PANE, surface: 'desktop' })
  expect((await ui.find({ type: 'Text', text: /not started/ }))?.text).toBe('not started')
  await ui.unmount()
})
