import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { ConclusionStars } from '@/components/visuals/ConclusionStars'

export function Slide17Conclusion() {
  const c = CONTENT.conclusion
  if (c.id !== 'conclusion') return null
  return (
    <div className="relative z-10 max-w-[1100px] mx-auto text-center">
      <Kicker className="block text-center">{c.kicker}</Kicker>
      <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] text-text-dim text-center max-w-[62ch] mx-auto mb-12 leading-relaxed">
        1967년 우주조약은 이상주의의 산물이지만, 60년의 현실은 <strong className="text-text">현실주의적 경쟁이 지배</strong>했다.
        현실주의-패권안정이론-우주지정학의 3단계 분석은 일관되게 가리킨다 — <strong className="text-accent">미국 주도 아르테미스 협정이 가장 합리적이다.</strong>
      </p>
      <ConclusionStars />
      <p className="mt-12 text-text-faint font-mono text-xs" style={{ letterSpacing: '0.3em' }}>{c.tagline}</p>
    </div>
  )
}
