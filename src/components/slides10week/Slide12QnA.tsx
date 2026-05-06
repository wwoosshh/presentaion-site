import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

export function Slide12QnA() {
  const c = CONTENT_10W.qna
  if (c.id !== 'qna') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]" staggerChildren={0.08}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-8">
        {c.title}
      </motion.h2>

      <ul className="flex flex-col gap-3">
        {c.questions.map((q, i) => (
          <motion.li
            key={i}
            variants={reveal}
            className="relative bg-bg-2 border border-line p-5 hover:border-accent/40 transition-colors flex items-start gap-5"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
            <span className="font-mono text-[0.78rem] font-bold text-accent flex-shrink-0 pt-1"
              style={{ letterSpacing: '0.1em' }}>
              Q{i + 1}
            </span>
            <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-text leading-relaxed">{q}</p>
          </motion.li>
        ))}
      </ul>

      <motion.p
        variants={reveal}
        className="mt-10 text-center font-serif italic text-[clamp(1rem,1.3vw,1.2rem)] text-text-dim"
      >
        {c.thanks}
      </motion.p>
    </RevealOnView>
  )
}
