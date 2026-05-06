import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal, hoverSpring } from '@/lib/motion'

export function Slide09Phase5() {
  const c = CONTENT_10W.phase5
  if (c.id !== 'phase5') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]" staggerChildren={0.1}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-3">
        {c.title}
      </motion.h2>
      <motion.p variants={reveal} className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-dim max-w-[64ch] mb-8 italic">
        {c.lead}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {c.quadrants.map((q, i) => (
          <motion.div
            key={i}
            variants={reveal}
            whileHover={{ y: -4, borderColor: 'rgba(232,93,60,0.5)' }}
            transition={hoverSpring}
            className="relative bg-bg-2 border border-line p-7 flex gap-5 items-start hover:bg-bg-3 transition-colors"
          >
            <div className="flex-shrink-0">
              <span className="flex w-12 h-12 rounded-full bg-accent items-center justify-center font-mono text-[0.8rem] font-bold text-bg"
                style={{ letterSpacing: '0.05em' }}>
                {q.num}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-serif text-[1.2rem] font-bold text-text mb-2">{q.title}</h4>
              <p className="text-[0.92rem] text-text-dim leading-relaxed">{q.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </RevealOnView>
  )
}
