export const colors = {
  bg: '#0a0a0f',
  bg2: '#13131c',
  bg3: '#1c1c28',
  text: '#efe9d9',
  textDim: '#9d978a',
  textFaint: '#5e5a52',
  accent: '#e85d3c',
  accentGlow: 'rgba(232,93,60,.18)',
  amber: '#f0c674',
  line: '#2a2a35',
  lineStrong: '#3a3a48',
} as const

export const easings = {
  cinematic: [0.22, 1, 0.36, 1] as const,
} as const

export const durations = {
  reveal: 0.8,
  transition: 0.4,
  hover: 0.2,
  countUp: 1.2,
} as const

export const stagger = {
  default: 0.08,
  fast: 0.04,
  slow: 0.12,
} as const
