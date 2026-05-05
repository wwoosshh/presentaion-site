import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '@/components/shell/ThemeToggle'
import { useThemeStore } from '@/lib/themeStore'

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('theme-light')
    useThemeStore.setState({ theme: 'dark' })
  })

  it('renders with aria-label for switching to light when in dark mode', () => {
    render(<ThemeToggle />)
    const btn = screen.getByRole('button', { name: /라이트.*전환/ })
    expect(btn).toHaveAttribute('aria-pressed', 'false')
  })

  it('toggles theme on click', () => {
    render(<ThemeToggle />)
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(useThemeStore.getState().theme).toBe('light')
    expect(btn).toHaveAttribute('aria-pressed', 'true')
  })

  it('aria-label updates when in light mode', () => {
    useThemeStore.setState({ theme: 'light' })
    document.documentElement.classList.add('theme-light')
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /다크.*전환/ })).toBeInTheDocument()
  })
})
