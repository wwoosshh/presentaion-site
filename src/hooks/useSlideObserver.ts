import { useEffect, useRef } from 'react'
import { usePresenterMode } from './usePresenterMode'

export function useSlideObserver(panelCount: number) {
  const panelRefs = useRef<(HTMLElement | null)[]>([])
  const setActiveIndex = usePresenterMode((s) => s.setActiveIndex)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestIdx = -1
        let bestRatio = 0
        entries.forEach((entry) => {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            const idx = panelRefs.current.findIndex((el) => el === entry.target)
            if (idx >= 0) bestIdx = idx
          }
        })
        if (bestIdx >= 0 && bestRatio >= 0.4) {
          setActiveIndex(bestIdx)
        }
      },
      { threshold: [0, 0.25, 0.4, 0.6, 0.8, 1] }
    )

    panelRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [panelCount, setActiveIndex])

  return {
    setRef: (idx: number) => (el: HTMLElement | null) => {
      panelRefs.current[idx] = el
    },
  }
}
