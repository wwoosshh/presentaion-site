import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { Quote } from '@/components/primitives/Quote'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { ChokePointMap } from '@/components/visuals/ChokePointMap'

export function Slide13NNA1ChokePoints() {
  const c = CONTENT.nna1ChokePoints
  if (c.id !== 'nna1ChokePoints') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>
      <ChokePointMap />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-2">
        <div>
          <h4 className="font-serif text-xl mb-4">전략적 통제점 (Choke Points)</h4>
          <ul>
            {c.chokePoints.map((b, i) => (
              <li key={i} className="relative pl-7 py-2.5 text-text-dim border-b border-line last:border-0">
                <span className="absolute left-0 top-5 w-2 h-px bg-accent" />
                <strong className="text-text font-semibold">{b.strong}</strong> — {b.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-4">미국의 이중 그랜드 전략</h4>
          <ul>
            {c.usStrategy.map((b, i) => (
              <li key={i} className="relative pl-7 py-2.5 text-text-dim border-b border-line last:border-0">
                <span className="absolute left-0 top-5 w-2 h-px bg-accent" />
                <strong className="text-text font-semibold">{b.strong}</strong> — {b.text}
              </li>
            ))}
          </ul>
          <p className="text-text-dim mt-4">우연이 아니다. <strong className="text-text">군사력 + 외교규범의 통합 전략.</strong></p>
        </div>
      </div>
      <Quote cite={c.quote.cite}>{c.quote.body}</Quote>
      <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] mt-2">미국은 지금 <strong className="text-accent">마한의 처방을 우주에서 실행</strong>하고 있다. 침략이 아니라 합리적 전략이다.</p>
    </RevealOnView>
  )
}
