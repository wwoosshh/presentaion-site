import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { BigStat } from '@/components/primitives/BigStat'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { LegalTimeline } from '@/components/visuals/LegalTimeline'

export function Slide14NNA2LegalHistory() {
  const c = CONTENT.nna2LegalHistory
  if (c.id !== 'nna2LegalHistory') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <LegalTimeline />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        <div className="bg-bg-2 p-5 border-l-[3px] border-accent">
          <span className="block font-mono text-[0.72rem] uppercase text-accent mb-2" style={{ letterSpacing: '0.3em' }}>{c.unclos.kicker}</span>
          <h4 className="font-serif text-xl mb-3">{c.unclos.title}</h4>
          <p className="text-text-dim mb-3">{c.unclos.body}</p>
          <p className="italic text-text">{c.unclos.tag}</p>
        </div>
        <div className="bg-bg-2 p-5 border-l-[3px] border-text-faint">
          <span className="block font-mono text-[0.72rem] uppercase text-text-faint mb-2" style={{ letterSpacing: '0.3em' }}>{c.moonAgreement.kicker}</span>
          <h4 className="font-serif text-xl mb-3">{c.moonAgreement.title}</h4>
          <p className="text-text-dim mb-3">{c.moonAgreement.body}</p>
          <p className="italic text-text-dim">{c.moonAgreement.tag}</p>
        </div>
      </div>
      <BigStat numericValue={70} suffix="%" value={c.bigStat.value} label={c.bigStat.label} className="my-2" />
      <p className="text-[clamp(1rem,1.3vw,1.2rem)] mt-2">{c.closing}</p>
    </RevealOnView>
  )
}
