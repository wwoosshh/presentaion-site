import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { RebuttalDialogue } from '@/components/visuals/RebuttalDialogue'

export function Slide15Rebuttals() {
  const c = CONTENT.rebuttals
  if (c.id !== 'rebuttals') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>
      <RebuttalDialogue items={c.items} />
    </RevealOnView>
  )
}
