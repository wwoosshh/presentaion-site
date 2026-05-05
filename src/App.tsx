import { PresentationShell } from '@/components/shell/PresentationShell'
import { SLIDES } from '@/data/slides'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'

export default function App() {
  useKeyboardNav()
  return (
    <PresentationShell>
      {SLIDES.map((s) => (
        <div key={s.id} className="font-serif text-4xl text-text">
          {s.displayNumber !== null && (
            <span className="font-mono text-sm text-accent mr-4">
              S.{String(s.displayNumber).padStart(2, '0')}
            </span>
          )}
          {s.title}
        </div>
      ))}
    </PresentationShell>
  )
}
