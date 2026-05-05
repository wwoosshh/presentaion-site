import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { PrisonerDilemma } from '@/components/visuals/PrisonerDilemma'

export function Slide09Arg1Anarchy() {
  const c = CONTENT.arg1Anarchy
  if (c.id !== 'arg1Anarchy') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start">
        <div>
          {c.left.map((p, i) => (
            <p key={i} className="text-[0.95rem] text-text-dim mb-3 max-w-[62ch]"><strong className="text-text">{p}</strong></p>
          ))}
          <hr className="my-6 w-16 border-line-strong" />
          {c.right.map((p, i) => (
            <p key={i} className="text-[1.1rem] text-text leading-relaxed mb-3">{i === 0 ? p : <em className="italic text-text-dim">{p}</em>}</p>
          ))}
        </div>
        <PrisonerDilemma />
      </div>
    </RevealOnView>
  )
}
