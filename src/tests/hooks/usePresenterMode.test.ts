import { describe, it, expect, beforeEach } from 'vitest'
import { usePresenterMode } from '@/hooks/usePresenterMode'

describe('usePresenterMode store', () => {
  beforeEach(() => {
    usePresenterMode.setState({
      activeIndex: 0, overview: false, notes: false, timer: false, ambient: true, helpOpen: false,
    })
  })

  it('initial state', () => {
    const s = usePresenterMode.getState()
    expect(s.activeIndex).toBe(0)
    expect(s.overview).toBe(false)
    expect(s.ambient).toBe(true)
  })

  it('setActiveIndex updates', () => {
    usePresenterMode.getState().setActiveIndex(5)
    expect(usePresenterMode.getState().activeIndex).toBe(5)
  })

  it('toggleOverview flips boolean', () => {
    usePresenterMode.getState().toggleOverview()
    expect(usePresenterMode.getState().overview).toBe(true)
    usePresenterMode.getState().toggleOverview()
    expect(usePresenterMode.getState().overview).toBe(false)
  })
})
