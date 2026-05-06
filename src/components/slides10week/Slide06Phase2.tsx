import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal, hoverSpring } from '@/lib/motion'

export function Slide06Phase2() {
  const c = CONTENT_10W.phase2
  if (c.id !== 'phase2') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1280px]" staggerChildren={0.12}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-8">
        {c.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
        {c.groups.map((g, gi) => (
          <motion.div
            key={gi}
            variants={reveal}
            whileHover={{ y: -4 }}
            transition={hoverSpring}
            className="bg-bg-2 border border-line p-6 hover:border-accent/40 transition-colors flex flex-col min-h-[300px]"
          >
            <span className="font-mono text-[0.7rem] uppercase text-amber mb-2" style={{ letterSpacing: '0.3em' }}>
              {g.kicker}
            </span>
            <h4 className="font-serif text-[1.2rem] font-bold text-text mb-3">{g.title}</h4>
            <span className="block w-10 h-px bg-accent mb-4" />
            <div className="flex flex-wrap gap-2 mb-5 flex-1">
              {g.members.map((m, mi) => (
                <span
                  key={mi}
                  className="inline-block px-3 py-1 border border-line-strong rounded-full text-[0.75rem] text-text-dim font-mono"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {m}
                </span>
              ))}
            </div>
            <p className="text-[0.88rem] text-accent font-serif italic">→  {g.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={reveal}
        className="bg-bg-3 border border-line p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
      >
        <div className="flex-shrink-0">
          <span className="font-mono text-[0.7rem] uppercase text-amber" style={{ letterSpacing: '0.3em' }}>
            Private Coalition
          </span>
          <h4 className="font-serif text-[1.2rem] font-bold text-text mt-1">{c.private.title}</h4>
        </div>
        <div className="hidden md:block w-px h-12 bg-line-strong" />
        <p className="text-[0.95rem] text-text-dim leading-relaxed">{c.private.body}</p>
      </motion.div>
    </RevealOnView>
  )
}
