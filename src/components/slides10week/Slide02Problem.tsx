import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

export function Slide02Problem() {
  const c = CONTENT_10W.problem
  if (c.id !== 'problem') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]" staggerChildren={0.1}>
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.1] mb-4">
        <motion.div variants={reveal}>{c.titleLine1}</motion.div>
        <motion.div variants={reveal} className="text-accent">{c.titleLine2}</motion.div>
      </h2>
      <motion.p variants={reveal} className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-dim max-w-[64ch] leading-relaxed mb-8">
        {c.intro}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
        <ul className="flex flex-col gap-4">
          {c.bullets.map((b, i) => (
            <motion.li
              key={i}
              variants={reveal}
              className="relative pl-5 border-l-2 border-line-strong hover:border-accent/60 transition-colors"
            >
              <span className="block font-serif text-[1.1rem] font-bold text-text mb-1">{b.strong}</span>
              <span className="block text-[0.95rem] text-text-dim leading-relaxed">{b.text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={reveal}
          className="relative bg-bg-2 border border-line p-7 rounded-sm"
        >
          <div className="font-mono text-[0.7rem] uppercase text-amber mb-3" style={{ letterSpacing: '0.3em' }}>
            전략적 질문
          </div>
          <p className="font-serif text-[1.15rem] text-text leading-snug mb-6">
            {c.question}
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            <span className="text-accent font-serif text-[1rem]">{c.answer}</span>
          </div>
        </motion.div>
      </div>
    </RevealOnView>
  )
}
