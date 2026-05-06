import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

export function Slide04Roadmap() {
  const c = CONTENT_10W.roadmap
  if (c.id !== 'roadmap') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1280px]" staggerChildren={0.1}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-3">
        {c.title}
      </motion.h2>
      <motion.p variants={reveal} className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-dim max-w-[68ch] mb-12">
        {c.lead}
      </motion.p>

      <div className="relative">
        <motion.div
          variants={reveal}
          className="absolute left-0 right-0 top-[120px] h-px bg-line-strong"
        />
        <motion.div
          className="absolute left-0 top-[120px] h-px bg-accent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ width: '100%' }}
        />

        <div className="grid grid-cols-5 gap-3 relative">
          {c.phases.map((p, i) => (
            <motion.div
              key={i}
              variants={reveal}
              className="flex flex-col items-center gap-3"
            >
              <div className="bg-bg-2 border border-line p-4 w-full min-h-[110px] flex flex-col gap-1.5 hover:border-accent/40 transition-colors">
                <span className="font-mono text-[0.65rem] uppercase text-amber" style={{ letterSpacing: '0.25em' }}>
                  {p.time}
                </span>
                <span className="font-serif text-[1.1rem] font-bold text-text leading-tight">
                  {p.title}
                </span>
                <span className="text-[0.78rem] text-text-dim leading-snug">
                  {p.sub}
                </span>
              </div>
              <span className="relative z-10 w-10 h-10 rounded-full bg-accent text-bg font-mono text-[0.78rem] font-bold flex items-center justify-center"
                style={{ letterSpacing: '0.05em' }}>
                {p.num}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={reveal}
        className="mt-10 text-center font-mono text-[clamp(0.85rem,1.1vw,1rem)] text-amber"
        style={{ letterSpacing: '0.18em' }}
      >
        {c.chain}
      </motion.div>
    </RevealOnView>
  )
}
