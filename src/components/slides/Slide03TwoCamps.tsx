import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { BigStat } from '@/components/primitives/BigStat'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { TwoCampsArc } from '@/components/visuals/TwoCampsArc'

export function Slide03TwoCamps() {
  const c = CONTENT.twoCamps
  if (c.id !== 'twoCamps') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>

      <TwoCampsArc />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        <div className="bg-bg-2 border border-line p-8 border-t-[3px] border-t-accent">
          <span className="block font-mono text-[0.72rem] uppercase text-accent mb-2" style={{ letterSpacing: '0.3em' }}>{c.usCamp.kicker}</span>
          <h3 className="font-serif text-2xl font-bold mb-4">{c.usCamp.subtitle}</h3>
          <BigStat numericValue={66} value={c.usCamp.stat.value} label={c.usCamp.stat.label} />
          <p className="text-[0.95rem] text-text-dim mt-2">{c.usCamp.members}</p>
          <hr className="my-4 w-16 border-line-strong" />
          <p className="text-[0.92rem] text-text-dim"><strong className="text-text">핵심 입장</strong> · {c.usCamp.principle}</p>
        </div>
        <div className="bg-bg-2 border border-line p-8" style={{ borderTop: '3px solid var(--color-text-faint)' }}>
          <span className="block font-mono text-[0.72rem] uppercase text-text-faint mb-2" style={{ letterSpacing: '0.3em' }}>{c.chinaCamp.kicker}</span>
          <h3 className="font-serif text-2xl font-bold mb-4">{c.chinaCamp.subtitle}</h3>
          <BigStat numericValue={17} value={c.chinaCamp.stat.value} label={c.chinaCamp.stat.label} variant="dim" />
          <p className="text-[0.95rem] text-text-dim mt-2">{c.chinaCamp.members}</p>
          <hr className="my-4 w-16 border-line-strong" />
          <p className="text-[0.92rem] text-text-dim"><strong className="text-text">핵심 입장</strong> · {c.chinaCamp.principle}</p>
        </div>
      </div>

      <p className="text-[1.05rem] text-text-dim mt-8 max-w-[80ch]">
        그러나 양 진영 모두 <span className="text-accent">달의 남극</span>에서 자원 채굴을 노린다. <strong className="text-text">수사는 다르지만 행동은 같다.</strong>
      </p>
    </RevealOnView>
  )
}
