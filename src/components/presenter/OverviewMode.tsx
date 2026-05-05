import { usePresenterMode } from '@/hooks/usePresenterMode'
import { SLIDES } from '@/data/slides'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/cn'

function jumpTo(idx: number) {
  const el = document.getElementById(`s${idx}`)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export function OverviewMode() {
  const visible = usePresenterMode((s) => s.overview)
  const close = usePresenterMode((s) => s.toggleOverview)
  const active = usePresenterMode((s) => s.activeIndex)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <header className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs uppercase text-accent" style={{ letterSpacing: '0.3em' }}>OVERVIEW · 19 PANELS</span>
            <button onClick={close} className="font-mono text-xs text-text-dim hover:text-accent">[ESC] CLOSE</button>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-[1400px] mx-auto">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { close(); setTimeout(() => jumpTo(i), 100) }}
                className={cn(
                  'aspect-video bg-bg-2 border p-4 text-left flex flex-col justify-between',
                  'hover:border-accent transition-colors',
                  i === active ? 'border-accent ring-2 ring-accent/30' : 'border-line'
                )}
              >
                <span className="font-mono text-[0.65rem] uppercase text-accent" style={{ letterSpacing: '0.2em' }}>
                  {s.displayNumber !== null ? `S.${String(s.displayNumber).padStart(2, '0')}` : 'COVER'}
                </span>
                <div>
                  <div className="font-serif text-sm font-bold text-text leading-tight mb-1">{s.title}</div>
                  <div className="font-mono text-[0.6rem] text-text-faint" style={{ letterSpacing: '0.2em' }}>{s.marker}</div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
