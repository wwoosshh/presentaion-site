import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal, hoverSpring } from '@/lib/motion'
import { cn } from '@/lib/cn'

type Tone = 'neutral' | 'positive' | 'negative'

const TONE_STYLES: Record<Tone, { border: string; bar: string; kicker: string }> = {
  neutral:  { border: 'border-line',                   bar: 'bg-text-dim',  kicker: 'text-text-dim' },
  positive: { border: 'border-amber/50',                bar: 'bg-amber',     kicker: 'text-amber' },
  negative: { border: 'border-accent/50',               bar: 'bg-accent',    kicker: 'text-accent' },
}

export function Slide08Phase4() {
  const c = CONTENT_10W.phase4
  if (c.id !== 'phase4') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1280px]" staggerChildren={0.12}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-8">
        {c.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {c.columns.map((col, i) => {
          const ts = TONE_STYLES[col.tone]
          return (
            <motion.div
              key={i}
              variants={reveal}
              whileHover={{ y: -4 }}
              transition={hoverSpring}
              className={cn(
                'relative bg-bg-2 border p-6 hover:translate-y-[-4px] transition-transform min-h-[340px]',
                ts.border
              )}
            >
              <span className={cn('absolute left-0 top-0 bottom-0 w-[3px]', ts.bar)} />
              <div className={cn('font-mono text-[0.7rem] uppercase mb-2', ts.kicker)} style={{ letterSpacing: '0.3em' }}>
                {col.kicker}
              </div>
              <h4 className="font-serif text-[1.3rem] font-bold text-text mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.items.map((it, ii) => (
                  <li key={ii} className="flex gap-3 items-start text-[0.92rem] text-text-dim">
                    <span className={cn('block flex-shrink-0 w-3 h-px mt-2.5', ts.bar)} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        variants={reveal}
        className="mt-8 text-center font-serif italic text-[clamp(1rem,1.4vw,1.25rem)] text-text-dim"
      >
        {c.closing}
      </motion.p>
    </RevealOnView>
  )
}
