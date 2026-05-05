import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { CountUp } from '@/components/primitives/CountUp'
import { DotComparison } from '@/components/visuals/DotComparison'

export function Slide12Arg4Legitimacy() {
  const c = CONTENT.arg4Legitimacy
  if (c.id !== 'arg4Legitimacy') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-center mb-3">{c.title}</h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 my-3">
        <div className="text-center">
          <div className="font-latin font-bold leading-none text-accent text-[clamp(4rem,8vw,7rem)]">
            <CountUp to={66} />
          </div>
          <div className="font-mono uppercase text-text-dim mt-2 text-sm" style={{ letterSpacing: '0.2em' }}>{c.us.label}</div>
          <p className="text-xs text-text-dim mt-2">{c.us.subtext}</p>
        </div>
        <div className="font-latin italic text-text-faint text-[clamp(1.5rem,3vw,2.5rem)]">vs</div>
        <div className="text-center">
          <div className="font-latin font-bold leading-none text-text-faint text-[clamp(4rem,8vw,7rem)]">
            <CountUp to={17} />
          </div>
          <div className="font-mono uppercase text-text-dim mt-2 text-sm" style={{ letterSpacing: '0.2em' }}>{c.china.label}</div>
          <p className="text-xs text-text-dim mt-2">{c.china.subtext}</p>
        </div>
      </div>

      <DotComparison />

      <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-text-dim leading-relaxed text-center max-w-[62ch] mx-auto mt-3">
        거의 <strong className="text-accent">4배</strong> 차이. 이들은 강요가 아닌 <strong className="text-text">자발적 가입</strong>이며, 자발성은 곧 호혜적 이익을 인정한다는 뜻이다. 다수국 동의로 형성되는 행위는 시간이 지나면 <strong>사실상의 관습국제법</strong>이 된다.
      </p>
    </RevealOnView>
  )
}
