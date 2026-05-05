import { CONTENT } from '@/data/content'
import { motion } from 'framer-motion'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { ReferencesGrid } from '@/components/visuals/ReferencesGrid'

export function Slide18References() {
  const c = CONTENT.references
  if (c.id !== 'references') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1000px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReferencesGrid heading="이론서" items={c.theory} />
        <ReferencesGrid heading="1차 자료 / 데이터" items={c.primarySources} />
      </div>
      <motion.p
        className="mt-4 text-center text-text-dim text-[0.95rem]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {c.thanks}
      </motion.p>
      <p className="mt-2 text-center text-text-faint font-mono text-xs" style={{ letterSpacing: '0.3em' }}>{c.mark}</p>
    </RevealOnView>
  )
}
