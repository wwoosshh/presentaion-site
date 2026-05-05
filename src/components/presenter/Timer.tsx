import { usePresenterMode } from '@/hooks/usePresenterMode'
import { SLIDES } from '@/data/slides'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export function Timer() {
  const visible = usePresenterMode((s) => s.timer)
  const idx = usePresenterMode((s) => s.activeIndex)
  const [running, setRunning] = useState(false)
  const [totalSec, setTotalSec] = useState(0)
  const [slideSec, setSlideSec] = useState(0)
  const [lastIdx, setLastIdx] = useState(idx)

  useEffect(() => {
    if (lastIdx !== idx) {
      setSlideSec(0)
      setLastIdx(idx)
    }
  }, [idx, lastIdx])

  useEffect(() => {
    if (!running) return
    const t = window.setInterval(() => {
      setTotalSec((v) => v + 1)
      setSlideSec((v) => v + 1)
    }, 1000)
    return () => window.clearInterval(t)
  }, [running])

  if (!visible) return null

  const budget = SLIDES[idx]?.timeSeconds ?? 0
  const overBudget = budget > 0 && slideSec > budget

  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const ss = s % 60
    return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-bg-2/90 backdrop-blur-sm border border-line p-3 md:p-4 font-mono text-[0.65rem] md:text-xs select-none"
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => setRunning((r) => !r)} className="px-2 py-0.5 border border-line text-text-dim hover:border-accent hover:text-accent">
          {running ? 'PAUSE' : 'START'}
        </button>
        <button onClick={() => { setTotalSec(0); setSlideSec(0) }} className="px-2 py-0.5 border border-line text-text-dim hover:border-accent hover:text-accent">RESET</button>
      </div>
      <div className={cn('text-xl md:text-2xl', overBudget ? 'text-accent' : 'text-amber')}>
        {fmt(slideSec)} <span className="text-text-faint text-sm">/ {fmt(budget)}</span>
      </div>
      <div className="text-text-dim text-[0.7rem] mt-1" style={{ letterSpacing: '0.2em' }}>TOTAL {fmt(totalSec)} / 15:00</div>
    </motion.div>
  )
}
