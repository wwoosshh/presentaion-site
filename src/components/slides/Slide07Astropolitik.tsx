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
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="text-[0.95rem] text-text-dim max-w-[62ch] mb-3"><strong className="text-text">{c.intro}</strong></p>
          <Quote lang="en" cite={c.quoteEn.cite} className="my-2">{c.quoteEn.body}</Quote>
        </div>
        <AstropolitikOrbit />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
