import { usePresenterMode } from '@/hooks/usePresenterMode'
import { SLIDES } from '@/data/slides'
import { motion } from 'framer-motion'

export function ProgressBar() {
  const idx = usePresenterMode((s) => s.activeIndex)
  const pct = ((idx + 1) / SLIDES.length) * 100
  return (
    <motion.div
      className="fixed top-0 left-0 h-[2px] bg-accent z-50"
      animate={{ width: `${pct}%` }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  )
}
