import { CONTENT_10W } from '@/data/content10week'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'
import { hoverSpring } from '@/lib/motion'

export function Slide03Premise() {
  const c = CONTENT_10W.premise
  if (c.id !== 'premise') return null

  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]" staggerChildren={0.1}>
      <Kicker>{c.kicker}</Kicker>
      <motion.h2 variants={reveal} className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold mb-3">
        {c.title}
      </motion.h2>
      <motion.p variants={reveal} className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-dim max-w-[64ch] leading-relaxed mb-8">
        {c.lead}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {c.cards.map((card, i) => (
          <motion.div
            key={i}
            variants={reveal}
            whileHover={{ y: -6, borderColor: 'rgba(232,93,60,0.4)' }}
            transition={hoverSpring}
            className="relative bg-gradient-to-br from-bg-2 to-bg-3 border border-line p-6 min-h-[220px] flex flex-col"
          >
            <span className="font-latin text-[2rem] font-bold text-accent leading-none mb-4">
              {card.num}
            </span>
            <span className="block w-8 h-px bg-accent mb-3" />
            <h4 className="font-serif text-[1.15rem] font-bold text-text mb-2">{card.title}</h4>
            <p className="text-[0.88rem] text-text-dim leading-relaxed flex-1">{card.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p variants={reveal} className="mt-8 text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-dim max-w-[64ch]">
        <span className="text-accent">↳</span>  {c.conclusion}
      </motion.p>
    </RevealOnView>
  )
}
