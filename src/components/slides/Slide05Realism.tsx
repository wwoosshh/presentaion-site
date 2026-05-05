import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { RealismGrid } from '@/components/visuals/RealismGrid'

export function Slide05Realism() {
  const c = CONTENT.realism
  if (c.id !== 'realism') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <RealismGrid cards={c.cards} />
      <p className="text-[clamp(1rem,1.3vw,1.2rem)] mt-4 leading-relaxed max-w-[60ch]">
        이 네 가지를 우주에 적용하면 — 우주는 지구보다 <strong className="text-accent">훨씬 더 무정부적</strong>이다. 어떤 강제 메커니즘도, 어떤 위반자 처벌도 작동하지 않는다.
      </p>
    </RevealOnView>
  )
}
