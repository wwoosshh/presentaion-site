import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

export function Slide10Risks() {
  const c = CONTENT_10W.risks
  if (c.id !== 'risks') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]" staggerChildren={0.08}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-8">
        {c.title}
      </motion.h2>

      <div className="border border-line">
        <div className="grid grid-cols-[minmax(180px,1fr)_2fr] bg-bg-3 border-b border-line">
          <div className="px-6 py-3 font-mono text-[0.7rem] uppercase text-amber border-r border-line"
            style={{ letterSpacing: '0.3em' }}>
            약점
          </div>
          <div className="px-6 py-3 font-mono text-[0.7rem] uppercase text-amber"
            style={{ letterSpacing: '0.3em' }}>
            대비책
          </div>
        </div>
        {c.rows.map((r, i) => (
          <motion.div
            key={i}
            variants={reveal}
            className="grid grid-cols-[minmax(180px,1fr)_2fr] border-b border-line last:border-0 hover:bg-bg-2 transition-colors group"
          >
            <div className="px-6 py-5 border-r border-line flex items-center gap-3 relative">
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-serif text-[1.05rem] font-bold text-text">{r.weak}</span>
            </div>
            <div className="px-6 py-5 text-[0.95rem] text-text-dim leading-relaxed">
              <span className="text-accent mr-2">→</span>{r.counter}
            </div>
          </motion.div>
        ))}
      </div>
    </RevealOnView>
  )
}
