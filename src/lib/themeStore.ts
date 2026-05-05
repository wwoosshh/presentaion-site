import { create } from 'zustand'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'presentation-theme'

interface ThemeState {
  theme: Theme
  toggle: () => void
  setTheme: (t: Theme) => void
  initFromDom: () => void
}

function readDomTheme(): Theme {
  try {
    if (typeof document !== 'undefined' &&
        document.documentElement.classList.contains('theme-light')) {
      return 'light'
    }
  } catch {}
  return 'dark'
}

function applyClass(theme: Theme) {
  const cl = document.documentElement.classList
  if (theme === 'light') cl.add('theme-light')
  else cl.remove('theme-light')
}

function persist(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {}
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: readDomTheme(),
  toggle: () => {
    const next: Theme = get().theme === 'dark' ? 'light' : 'dark'
    applyClass(next)
    persist(next)
    set({ theme: next })
  },
  setTheme: (t) => {
    applyClass(t)
    persist(t)
    set({ theme: t })
  },
  initFromDom: () => {
    set({ theme: readDomTheme() })
  },
}))
