import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { CountUp } from '@/components/primitives/CountUp'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { TwoCampsArc } from '@/components/visuals/TwoCampsArc'

export function Slide03TwoCamps() {
  const c = CONTENT.twoCamps
  if (c.id !== 'twoCamps') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1200px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-bold mb-3">{c.title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,560px)_1fr] gap-8 items-center">
        <TwoCampsArc />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
          <div className="bg-bg-2 border border-line p-4 border-t-[3px] border-t-accent">
            <span className="block font-mono text-[0.7rem] uppercase text-accent mb-1" style={{ letterSpacing: '0.3em' }}>{c.usCamp.kicker}</span>
            <h3 className="font-serif text-lg font-bold mb-2">{c.usCamp.subtitle}</h3>
            <div className="font-latin font-semibold leading-none text-[2.2rem] text-accent">
              <CountUp to={66} />
            </div>
            <p className="text-[0.78rem] text-text-dim mt-1">{c.usCamp.stat.label}</p>
            <p className="text-[0.78rem] text-text-dim mt-2">{c.usCamp.members}</p>
            <hr className="my-2 w-12 border-line-strong" />
            <p className="text-[0.78rem] text-text-dim"><strong className="text-text">핵심</strong> · {c.usCamp.principle}</p>
          </div>
          <div className="bg-bg-2 border border-line p-4" style={{ borderTop: '3px solid var(--color-text-faint)' }}>
            <span className="block font-mono text-[0.7rem] uppercase text-text-faint mb-1" style={{ letterSpacing: '0.3em' }}>{c.chinaCamp.kicker}</span>
            <h3 className="font-serif text-lg font-bold mb-2">{c.chinaCamp.subtitle}</h3>
            <div className="font-latin font-semibold leading-none text-[2.2rem] text-text-dim">
              <CountUp to={17} />
            </div>
            <p className="text-[0.78rem] text-text-dim mt-1">{c.chinaCamp.stat.label}</p>
            <p className="text-[0.78rem] text-text-dim mt-2">{c.chinaCamp.members}</p>
            <hr className="my-2 w-12 border-line-strong" />
            <p className="text-[0.78rem] text-text-dim"><strong className="text-text">핵심</strong> · {c.chinaCamp.principle}</p>
          </div>
        </div>
      </div>

      <p className="text-[0.95rem] text-text-dim mt-4 max-w-[80ch]">
        그러나 양 진영 모두 <span className="text-accent">달의 남극</span>에서 자원 채굴을 노린다. <strong className="text-text">수사는 다르지만 행동은 같다.</strong>
      </p>
    </RevealOnView>
  )
}
