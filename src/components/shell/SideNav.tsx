import { usePresenterMode } from '@/hooks/usePresenterMode'
import { useMouseIdle } from '@/hooks/useMouseIdle'
import { SLIDES } from '@/data/slides'
import { cn } from '@/lib/cn'

export function SideNav() {
  const activeIdx = usePresenterMode((s) => s.activeIndex)
  const idle = useMouseIdle()
  return (
    <nav className={cn(
      'fixed top-1/2 right-8 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 transition-opacity duration-500',
      idle && 'opacity-0 pointer-events-none'
    )}>
      {SLIDES.map((s, i) => (
        <a
          key={s.id}
          href={`#s${i}`}
          aria-label={`Go to ${s.marker}`}
          className={cn(
            'block h-[2px] transition-all duration-300',
            i === activeIdx ? 'w-10 bg-accent' : 'w-6 bg-line-strong hover:bg-text-dim'
          )}
        />
      ))}
    </nav>
  )
}
