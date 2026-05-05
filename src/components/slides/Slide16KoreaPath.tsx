import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { KoreaHedging } from '@/components/visuals/KoreaHedging'

export function Slide16KoreaPath() {
  const c = CONTENT.koreaPath
  if (c.id !== 'koreaPath') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>
      <KoreaHedging />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-2">
        <div>
          <h4 className="font-serif text-xl mb-4">현재 위치</h4>
          <ul>
            {c.current.map((b, i) => (
              <li key={i} className="relative pl-7 py-2.5 text-text-dim border-b border-line last:border-0">
                <span className="absolute left-0 top-5 w-2 h-px bg-accent" />
                <strong className="text-text font-semibold">{b.strong}</strong> · {b.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-4 text-accent">현실주의의 처방</h4>
          <p className="text-[1.1rem] text-text leading-relaxed mb-6"><strong>{c.prescription}</strong></p>
          <hr className="my-4 w-16 border-line-strong" />
          <p className="text-text-dim italic">{c.closing}</p>
        </div>
      </div>
    </RevealOnView>
  )
}
