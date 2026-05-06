import { usePresenterMode } from '@/hooks/usePresenterMode'
import { useMouseIdle } from '@/hooks/useMouseIdle'
import { SLIDES as DEFAULT_SLIDES, type SlideMetaBase } from '@/data/slides'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface Props {
  slides?: readonly SlideMetaBase[]
}

export function ProgressBar({ slides }: Props = {}) {
  const SLIDES = slides ?? DEFAULT_SLIDES
  const idx = usePresenterMode((s) => s.activeIndex)
  const idle = useMouseIdle()
  const pct = ((idx + 1) / SLIDES.length) * 100
  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 h-[2px] bg-accent z-50 transition-opacity duration-500',
        idle && 'opacity-0'
      )}
      animate={{ width: `${pct}%` }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  )
}
