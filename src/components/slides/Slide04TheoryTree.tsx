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
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-text-dim leading-relaxed mb-3">
        {c.lead}
      </p>
      <TheoryTree levels={c.levels} />
    </RevealOnView>
  )
}
