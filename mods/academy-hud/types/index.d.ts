export type Mode = 'LAB' | 'LEARN' | 'BUILD' | 'QUIZ' | 'REVIEW' | 'INTERVIEW'
export type Study = {
  mode: Mode | null
  labId: string
  topic: string
  layer: number
  startedAt: number
  turns: number
  commits: number
  pushed: boolean
  prOpened: boolean
}
export type Streak = { days: number; sessions: number }

declare module 'claude-code' {
  interface PluginState {
    'academy-hud': { study: Shaped<Study>; streak: Streak; isBandHidden: boolean }
  }
}
