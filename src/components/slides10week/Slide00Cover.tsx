import { CONTENT_10W } from '@/data/content10week'
import { SplitText } from '@/components/primitives/SplitText'
import { Pill } from '@/components/primitives/Pill'
import { motion } from 'framer-motion'
import { reveal, revealStagger } from '@/lib/motion'
import { lazy, Suspense } from 'react'

const HeroMoon = lazy(() => import('@/components/visuals/HeroMoon').then(m => ({ default: m.HeroMoon })))

export function Slide00Cover() {
  const c = CONTENT_10W.cover
  if (c.id !== 'cover') return null

  return (
    <>
      <Suspense fallback={null}>
        <HeroMoon />
      </Suspense>
      <motion.div
        className="relative z-10 w-full max-w-[1200px]"
        variants={revealStagger(0.12)}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={reveal}
          className="font-mono text-[0.72rem] uppercase text-amber block mb-6"
          style={{ letterSpacing: '0.3em' }}
        >
          {c.kicker}
        </motion.span>
        <h1 className="font-serif text-[clamp(2.2rem,6vw,6rem)] leading-[1.05] font-bold tracking-tight">
          <motion.div variants={reveal}>
            <SplitText text={c.titleLine1} />
          </motion.div>
          <motion.div variants={reveal} className="text-accent">
            <SplitText text={c.titleLine2} delay={0.4} />
          </motion.div>
        </h1>
        <motion.p
          variants={reveal}
          className="text-[clamp(1.05rem,1.5vw,1.3rem)] text-text leading-relaxed max-w-[58ch] mt-8"
        >
          {c.lead}
        </motion.p>
        <motion.div variants={reveal} className="flex flex-wrap gap-3 mt-8">
          {c.pills.map((p, i) => (
            <Pill key={i} variant={i === 0 ? 'accent' : 'default'}>{p}</Pill>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}
