import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { Quote } from '@/components/primitives/Quote'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { HegemonyPillar } from '@/components/visuals/HegemonyPillar'

export function Slide06Hegemony() {
  const c = CONTENT.hegemony
  if (c.id !== 'hegemony') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px_1fr] gap-12 mt-8 items-start">
        <div>
          <h4 className="font-serif text-xl mb-3">{c.left.headings[0]}</h4>
          <p className="text-text-dim leading-relaxed">{c.left.bodies[0]}</p>
          <hr className="my-6 w-16 border-line-strong" />
          <h4 className="font-serif text-xl mb-3">{c.left.headings[1]}</h4>
          <p className="text-text-dim leading-relaxed">{c.left.bodies[1]}</p>
        </div>
        <HegemonyPillar />
        <div>
          <h4 className="font-serif text-xl mb-3">{c.right.headings[0]}</h4>
          <p className="text-text-dim leading-relaxed mb-3"><strong className="text-text">{c.right.bodies[0]}</strong></p>
          <p className="text-text-dim leading-relaxed mb-6"><strong className="text-text">{c.right.bodies[1]}</strong></p>
          <Quote noBar className="text-lg my-0 max-w-none">{c.right.quote}</Quote>
        </div>
      </div>
    </RevealOnView>
  )
}
