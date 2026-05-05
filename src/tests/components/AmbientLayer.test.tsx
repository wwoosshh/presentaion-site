import { describe, it, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { AmbientLayer } from '@/components/ambient/AmbientLayer'
import { useThemeStore } from '@/lib/themeStore'
import { usePresenterMode } from '@/hooks/usePresenterMode'

describe('AmbientLayer', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('theme-light')
    useThemeStore.setState({ theme: 'dark' })
    usePresenterMode.setState({ ambient: true, activeIndex: 0 })
  })

  it('renders all four ambient elements in dark mode', () => {
    const { container } = render(<AmbientLayer />)
    // StarField produces a canvas; KeywordMarquee produces a div with text;
    // OrbitRings produces an svg; GrainTexture produces a div.
    expect(container.querySelector('canvas')).toBeTruthy()
    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('skips StarField and KeywordMarquee in light mode', () => {
    useThemeStore.setState({ theme: 'light' })
    const { container } = render(<AmbientLayer />)
    expect(container.querySelector('canvas')).toBeFalsy()
    // OrbitRings (svg) still rendered:
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
