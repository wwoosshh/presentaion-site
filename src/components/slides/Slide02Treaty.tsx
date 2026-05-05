import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { Quote } from '@/components/primitives/Quote'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { TreatyFracture } from '@/components/visuals/TreatyFracture'

export function Slide02Treaty() {
  const c = CONTENT.treaty
  if (c.id !== 'treaty') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]" staggerChildren={0.12}>
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.15]">
        {c.titleLine1}<br />{c.titleLine2}
      </h2>
      <TreatyFracture />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-[1.05rem] text-text-dim max-w-[62ch]"><strong className="text-text font-semibold">{c.intro}</strong></p>
          <ul className="mt-6">
            {c.bullets.map((b, i) => (
              <li key={i} className="relative pl-7 py-2.5 text-text-dim border-b border-line last:border-0">
                <span className="absolute left-0 top-5 w-2 h-px bg-accent" />
                <strong className="text-text font-semibold">{b.strong}</strong> — {b.text}
              </li>
            ))}
          </ul>
        </div>
        <Quote cite={c.quote.cite}>{c.quote.body}</Quote>
      </div>
    </RevealOnView>
  )
}
