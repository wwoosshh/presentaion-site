import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { motion } from 'framer-motion'
import { CoreClaimCinema } from '@/components/visuals/CoreClaimCinema'

export function Slide08CoreClaim() {
  const c = CONTENT.coreClaim
  if (c.id !== 'coreClaim') return null
  return (
    <div className="relative z-10 max-w-[1000px] mx-auto text-center">
      <Kicker className="block text-center">{c.kicker}</Kicker>
      <CoreClaimCinema lines={c.lines} />
      <motion.p
        className="text-[clamp(1.1rem,1.6vw,1.4rem)] text-text-dim mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 3.0, duration: 0.8 }}
      >
        지금부터 이 주장을 <strong className="text-accent">4가지 근거</strong>로 뒷받침한다.
      </motion.p>
    </div>
  )
}
