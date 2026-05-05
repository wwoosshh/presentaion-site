import { describe, it, expect, beforeEach } from 'vitest'
import { useThemeStore } from '@/lib/themeStore'

describe('useThemeStore', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('theme-light')
    useThemeStore.setState({ theme: 'dark' })
  })

  it('default theme is dark', () => {
    expect(useThemeStore.getState().theme).toBe('dark')
  })

  it('toggle flips theme and updates html class', () => {
    useThemeStore.getState().toggle()
    expect(useThemeStore.getState().theme).toBe('light')
    expect(document.documentElement.classList.contains('theme-light')).toBe(true)

    useThemeStore.getState().toggle()
    expect(useThemeStore.getState().theme).toBe('dark')
    expect(document.documentElement.classList.contains('theme-light')).toBe(false)
  })

  it('toggle persists to localStorage', () => {
    useThemeStore.getState().toggle()
    expect(localStorage.getItem('presentation-theme')).toBe('light')

    useThemeStore.getState().toggle()
    expect(localStorage.getItem('presentation-theme')).toBe('dark')
  })

  it('setTheme is idempotent', () => {
    useThemeStore.getState().setTheme('light')
    useThemeStore.getState().setTheme('light')
    expect(useThemeStore.getState().theme).toBe('light')
    expect(document.documentElement.classList.contains('theme-light')).toBe(true)
  })

  it('initFromDom picks up pre-applied class', () => {
    document.documentElement.classList.add('theme-light')
    useThemeStore.getState().initFromDom()
    expect(useThemeStore.getState().theme).toBe('light')
  })
})
