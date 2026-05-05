import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { Quote } from '@/components/primitives/Quote'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { AstropolitikOrbit } from '@/components/visuals/AstropolitikOrbit'

export function Slide07Astropolitik() {
  const c = CONTENT.astropolitik
  if (c.id !== 'astropolitik') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <p className="text-[1.05rem] text-text-dim max-w-[62ch] mb-6"><strong className="text-text">{c.intro}</strong></p>
          <Quote lang="en" cite={c.quoteEn.cite}>{c.quoteEn.body}</Quote>
        </div>
        <AstropolitikOrbit />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <h4 className="font-serif text-xl mb-3">{c.right.headings[0]}</h4>
          <p className="text-text-dim leading-relaxed">{c.right.bodies[0]}</p>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-3">{c.right.headings[1]}</h4>
          <p className="text-text leading-relaxed font-semibold">{c.right.bodies[1]}</p>
        </div>
      </div>
    </RevealOnView>
  )
}
