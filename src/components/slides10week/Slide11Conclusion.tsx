import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { SplitText } from '@/components/primitives/SplitText'
import { motion } from 'framer-motion'
import { reveal, revealStagger } from '@/lib/motion'

export function Slide11Conclusion() {
  const c = CONTENT_10W.conclusion
  if (c.id !== 'conclusion') return null

  return (
    <motion.div
      className="relative z-10 max-w-[1100px]"
      variants={revealStagger(0.18)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.div variants={reveal}>
        <Kicker>{c.kicker}</Kicker>
      </motion.div>

      <h2 className="font-serif text-[clamp(2.2rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight">
        <motion.div variants={reveal}>
          <SplitText text={c.bigLine1} />
        </motion.div>
        <motion.div variants={reveal} className="text-accent">
          <SplitText text={c.bigLine2} delay={0.3} />
        </motion.div>
      </h2>

      <motion.div
        variants={reveal}
        className="mt-10 flex items-start gap-5 max-w-[68ch]"
      >
        <span className="flex-shrink-0 w-10 h-px bg-accent mt-4" />
        <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-text-dim leading-relaxed">
          {c.body}
        </p>
      </motion.div>

      <motion.p
        variants={reveal}
        className="mt-12 font-mono text-[0.78rem] uppercase text-amber"
        style={{ letterSpacing: '0.3em' }}
      >
        {c.tagline}
      </motion.p>
    </motion.div>
  )
}
