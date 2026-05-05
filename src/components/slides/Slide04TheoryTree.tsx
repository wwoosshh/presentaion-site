import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { TheoryTree } from '@/components/visuals/TheoryTree'

export function Slide04TheoryTree() {
  const c = CONTENT.theoryTree
  if (c.id !== 'theoryTree') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-4">{c.title}</h2>
      <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] text-text-dim leading-relaxed mb-4">
        {c.lead}
      </p>
      <TheoryTree levels={c.levels} />
    </RevealOnView>
  )
}
