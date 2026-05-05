import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { Quote } from '@/components/primitives/Quote'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { MirrorContradiction } from '@/components/visuals/MirrorContradiction'

export function Slide11Arg3Mirror() {
  const c = CONTENT.arg3Mirror
  if (c.id !== 'arg3Mirror') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker variant="amber">{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <p className="text-[clamp(1rem,1.3vw,1.2rem)] mb-2 max-w-[80ch]">중국은 미국이 자원을 독점하려 한다고 비난한다. 그런데 <strong className="text-accent">ILRS는 정확히 같은 일을 한다.</strong></p>
      <MirrorContradiction />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        <div>
          <h4 className="font-serif text-xl mb-3">중국의 OST 자기 해석</h4>
          <p className="text-text-dim leading-relaxed">{c.chinaInterpretation}</p>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-3">"다자합의" 요구의 본질</h4>
          <p className="text-text font-semibold leading-relaxed">{c.bindingStrategy}</p>
        </div>
      </div>
      <Quote className="my-2">{c.quote.body}</Quote>
    </RevealOnView>
  )
}
