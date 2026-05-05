import { describe, it, expect } from 'vitest'
import { SLIDES } from '@/data/slides'

describe('slides metadata', () => {
  it('has 19 panels (cover + 18 main)', () => {
    expect(SLIDES.length).toBe(19)
  })

  it('cover has no display marker', () => {
    expect(SLIDES[0].id).toBe('cover')
    expect(SLIDES[0].displayNumber).toBeNull()
  })

  it('main slides display numbered 1..18', () => {
    const main = SLIDES.slice(1)
    main.forEach((s, i) => {
      expect(s.displayNumber).toBe(i + 1)
    })
  })

  it('time budget total under 1000s (including buffer)', () => {
    const total = SLIDES.reduce((acc, s) => acc + (s.timeSeconds ?? 0), 0)
    expect(total).toBeLessThan(1000)
  })

  it('all slides have unique ids', () => {
    const ids = SLIDES.map(s => s.id)
    expect(new Set(ids).size).toBe(SLIDES.length)
  })
})
