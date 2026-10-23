export type Mode = 'LEARN' | 'LECTURE' | 'LAB' | 'BUILD' | 'QUIZ' | 'REVIEW' | 'INTERVIEW'
export type Study = {
  mode: Mode | null
  topic: string
  layer: number
  startedAt: number
  turns: number
}
export type Streak = { days: number; sessions: number }

declare module 'claude-code' {
  interface PluginState {
    'academy-hud': { study: Shaped<Study>; streak: Streak; isBandHidden: boolean }
  }
}
