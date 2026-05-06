import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

export function Slide05Phase1() {
  const c = CONTENT_10W.phase1
  if (c.id !== 'phase1') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]" staggerChildren={0.1}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-3">
        {c.title}
      </motion.h2>
      <motion.p variants={reveal} className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-dim max-w-[64ch] mb-8">
        {c.lead}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-7 items-start">
        <ul className="flex flex-col gap-3">
          {c.actions.map((a, i) => (
            <motion.li
              key={i}
              variants={reveal}
              className="relative bg-bg-2 border border-line p-5 hover:border-accent/40 transition-colors group"
            >
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.7rem] uppercase text-amber" style={{ letterSpacing: '0.2em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-[1.1rem] font-bold text-text">{a.strong}</span>
              </div>
              <p className="text-[0.92rem] text-text-dim mt-1.5 leading-relaxed pl-8">{a.text}</p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={reveal}
          className="bg-gradient-to-br from-bg-2 to-bg-3 border border-accent/30 p-7 rounded-sm"
        >
          <div className="font-mono text-[0.7rem] uppercase text-accent mb-4" style={{ letterSpacing: '0.3em' }}>
            Expected Outcome
          </div>
          <h3 className="font-serif text-[1.4rem] font-bold text-text mb-6">
            {c.outcome.title}
          </h3>
          <div className="flex flex-col gap-5">
            {c.outcome.metrics.map((m, i) => (
              <div key={i} className="flex items-baseline gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                <span className="font-latin text-[2.4rem] font-bold text-accent leading-none flex-shrink-0">
                  {m.value}
                </span>
                <span className="text-[0.9rem] text-text-dim leading-snug">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </RevealOnView>
  )
}
