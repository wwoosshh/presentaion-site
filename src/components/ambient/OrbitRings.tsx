import { usePresenterMode } from '@/hooks/usePresenterMode'
import { SLIDES } from '@/data/slides'
import { cn } from '@/lib/cn'

export function OrbitRings() {
  const ambient = usePresenterMode((s) => s.ambient)
  const idx = usePresenterMode((s) => s.activeIndex)
  if (!ambient) return null

  const slideId = SLIDES[idx]?.id
  const intense = slideId === 'cover' || slideId === 'conclusion'

  return (
    <svg
      aria-hidden
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMidYMid meet"
      className={cn(
        'fixed inset-0 m-auto pointer-events-none z-[1]',
        'w-screen h-screen transition-opacity duration-700',
        intense ? 'opacity-30' : 'opacity-[0.05]'
      )}
    >
      <g className="animate-orbit-slow origin-center" style={{ transformOrigin: 'center' }}>
        <circle r="420" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-line-strong" />
        <circle cx="420" cy="0" r="3" fill="#f0c674" />
      </g>
      <g className="animate-orbit-medium origin-center" style={{ transformOrigin: 'center' }}>
        <circle r="280" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-line-strong" strokeDasharray="2 6" />
        <circle cx="280" cy="0" r="2" fill="#e85d3c" />
      </g>
      <g className="animate-orbit-fast origin-center" style={{ transformOrigin: 'center' }}>
        <circle r="160" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-line-strong" />
      </g>
    </svg>
  )
}
