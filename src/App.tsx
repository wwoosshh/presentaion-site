import { PresentationShell } from '@/components/shell/PresentationShell'
import { AmbientLayer } from '@/components/ambient/AmbientLayer'
import { SLIDES } from '@/data/slides'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'
import { Slide00Cover } from '@/components/slides/Slide00Cover'
import { Slide01Contents } from '@/components/slides/Slide01Contents'
import { Slide02Treaty } from '@/components/slides/Slide02Treaty'
import { Slide03TwoCamps } from '@/components/slides/Slide03TwoCamps'

export default function App() {
  useKeyboardNav()
  return (
    <>
      <AmbientLayer />
      <PresentationShell>
        <Slide00Cover />
        <Slide01Contents />
        <Slide02Treaty />
        <Slide03TwoCamps />
        {SLIDES.slice(4).map((s) => (
          <div key={s.id} className="relative z-10 font-serif text-4xl text-text">
            {s.displayNumber !== null && (
              <span className="font-mono text-sm text-accent mr-4">
                S.{String(s.displayNumber).padStart(2, '0')}
              </span>
            )}
            {s.title}
          </div>
        ))}
      </PresentationShell>
    </>
  )
}
