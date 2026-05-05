import { usePresenterMode } from '@/hooks/usePresenterMode'
import { SLIDES } from '@/data/slides'
import { SCRIPT_NOTES } from '@/data/scriptNotes'
import { AnimatePresence, motion } from 'framer-motion'

export function PresenterNotes() {
  const visible = usePresenterMode((s) => s.notes)
  const idx = usePresenterMode((s) => s.activeIndex)
  const close = usePresenterMode((s) => s.toggleNotes)

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className="fixed top-12 right-6 bottom-24 w-[360px] z-40 bg-bg-2/95 border border-line p-6 overflow-y-auto"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="flex items-center justify-between mb-4">
            <span className="font-mono text-[0.7rem] uppercase text-accent" style={{ letterSpacing: '0.3em' }}>PRESENTER NOTES</span>
            <button onClick={close} className="text-text-faint hover:text-accent text-xs">[ESC]</button>
          </header>
          <h3 className="font-serif text-lg font-bold mb-3">{SLIDES[idx].title}</h3>
          <p className="text-text-dim text-sm leading-relaxed whitespace-pre-line">{SCRIPT_NOTES[SLIDES[idx].id]}</p>
          <div className="mt-6 pt-4 border-t border-line text-[0.7rem] font-mono text-text-faint" style={{ letterSpacing: '0.2em' }}>
            S.{String(SLIDES[idx].displayNumber ?? 0).padStart(2, '0')} · 권장 {SLIDES[idx].timeSeconds ?? '–'}s
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
