import { useSlideObserver } from '@/hooks/useSlideObserver'
import { SLIDES } from '@/data/slides'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode[]
}

export function PresentationShell({ children }: Props) {
  const { setRef } = useSlideObserver(SLIDES.length)

  return (
    <div className={cn(
      'snap-y snap-mandatory h-screen overflow-y-scroll relative',
      'bg-bg text-text'
    )}>
      {children.map((child, i) => (
        <section
          key={SLIDES[i].id}
          id={`s${i}`}
          ref={setRef(i)}
          className={cn(
            'snap-start snap-always relative',
            'min-h-screen w-full',
            'flex flex-col justify-center',
            'px-[8vw] py-[5vh]',
            'border-b border-line'
          )}
        >
          {child}
        </section>
      ))}
    </div>
  )
}
