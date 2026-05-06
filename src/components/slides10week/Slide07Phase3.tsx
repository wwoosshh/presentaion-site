import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'
import { cn } from '@/lib/cn'

const FORCE_STYLES: Record<'약함' | '중간' | '강함', { bar: string; text: string; border: string }> = {
  약함: { bar: 'bg-text-faint',  text: 'text-text-faint', border: 'border-text-faint/40' },
  중간: { bar: 'bg-amber',        text: 'text-amber',      border: 'border-amber/50' },
  강함: { bar: 'bg-accent',       text: 'text-accent',     border: 'border-accent/60' },
}

export function Slide07Phase3() {
  const c = CONTENT_10W.phase3
  if (c.id !== 'phase3') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1280px]" staggerChildren={0.1}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-8">
        {c.title}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
        <ul className="flex flex-col gap-3">
          {c.ladder.map((step, i) => {
            const fs = FORCE_STYLES[step.force]
            const widthPct = 60 + i * 12
            return (
              <motion.li
                key={i}
                variants={reveal}
                className="flex items-stretch gap-3"
              >
                <div
                  className={cn(
                    'flex-1 bg-bg-2 border border-line p-4 hover:border-accent/40 transition-colors',
                    'relative overflow-hidden'
                  )}
                  style={{ width: `${widthPct}%`, maxWidth: `${widthPct}%` }}
                >
                  <div className={cn('absolute left-0 top-0 bottom-0 w-1', fs.bar)} />
                  <div className="flex items-baseline gap-3 pl-3">
                    <span className="font-mono text-[0.68rem] uppercase text-amber" style={{ letterSpacing: '0.25em' }}>
                      {step.stage}
                    </span>
                    <span className="font-serif text-[1.15rem] font-bold text-text">{step.name}</span>
                  </div>
                  <p className="text-[0.88rem] text-text-dim mt-1.5 pl-3">{step.desc}</p>
                </div>
                <span className={cn(
                  'w-[80px] flex-shrink-0 flex items-center justify-center font-mono text-[0.78rem] font-bold border rounded-sm',
                  fs.text, fs.border
                )} style={{ letterSpacing: '0.1em' }}>
                  {step.force}
                </span>
              </motion.li>
            )
          })}
        </ul>

        <motion.div
          variants={reveal}
          className="bg-gradient-to-br from-bg-2 to-bg-3 border border-line p-6"
        >
          <div className="font-mono text-[0.7rem] uppercase text-accent mb-4" style={{ letterSpacing: '0.3em' }}>
            Key Obligations
          </div>
          <ul className="flex flex-col gap-3">
            {c.obligations.map((o, i) => (
              <li key={i} className="flex gap-3 items-start text-[0.92rem] text-text-dim">
                <span className="block flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-accent" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </RevealOnView>
  )
}
