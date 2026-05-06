import { useEffect } from 'react'
import { usePresenterMode } from './usePresenterMode'
import { useFullscreen } from './useFullscreen'
import { SLIDES as DEFAULT_SLIDES, type SlideMetaBase } from '@/data/slides'

function scrollToSlide(idx: number) {
  const el = document.getElementById(`s${idx}`)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export function useKeyboardNav(slides?: readonly SlideMetaBase[]) {
  const SLIDES = slides ?? DEFAULT_SLIDES
  const fs = useFullscreen()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = usePresenterMode.getState()
      const max = SLIDES.length - 1

      if (s.overview) {
        if (e.key === 'Escape' || e.key.toLowerCase() === 'o') {
          e.preventDefault()
          s.toggleOverview()
          return
        }
        if (e.key === 'Enter') {
          e.preventDefault()
          s.toggleOverview()
          scrollToSlide(s.activeIndex)
          return
        }
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          scrollToSlide(Math.min(max, s.activeIndex + 1))
          break
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          scrollToSlide(Math.max(0, s.activeIndex - 1))
          break
        case 'Home':
          e.preventDefault()
          scrollToSlide(0)
          break
        case 'End':
          e.preventDefault()
          scrollToSlide(max)
          break
      }

      const lower = e.key.toLowerCase()
      switch (lower) {
        case 'f':
          e.preventDefault()
          fs.toggle()
          break
        case 'o':
          e.preventDefault()
          s.toggleOverview()
          break
        case 'p':
          e.preventDefault()
          s.toggleNotes()
          break
        case 't':
          e.preventDefault()
          s.toggleTimer()
          break
        case 'a':
          e.preventDefault()
          s.toggleAmbient()
          break
        case '?':
          e.preventDefault()
          s.toggleHelp()
          break
      }

      if (/^[0-9]$/.test(e.key)) {
        const chapter = parseInt(e.key, 10)
        const targetIdx = SLIDES.findIndex((sl) => sl.chapter === chapter)
        if (targetIdx >= 0) {
          e.preventDefault()
          scrollToSlide(targetIdx)
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [fs])
}
