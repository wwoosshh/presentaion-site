import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { ChapterCards } from '@/components/visuals/ChapterCards'

export function Slide01Contents() {
  const c = CONTENT.contents
  if (c.id !== 'contents') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold tracking-tight mb-6">{c.title}</h2>
      <ChapterCards cards={c.cards} />
    </RevealOnView>
  )
}
