import { useSlideObserver } from '@/hooks/useSlideObserver'
import { SLIDES, TOTAL_DISPLAY_PANELS } from '@/data/slides'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import { SectionMarker } from './SectionMarker'
import { SectionFooter } from './SectionFooter'
import { ProgressBar } from './ProgressBar'
import { SideNav } from './SideNav'

interface Props {
  children: ReactNode[]
}

export function PresentationShell({ children }: Props) {
  const { setRef } = useSlideObserver(SLIDES.length)

  return (
    <>
      <ProgressBar />
      <SideNav />
      <div className={cn('snap-y snap-mandatory h-screen overflow-y-scroll relative bg-bg text-text')}>
        {children.map((child, i) => {
          const meta = SLIDES[i]
          return (
            <section
              key={meta.id}
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
              <SectionMarker number={meta.displayNumber} label={meta.marker} />
              {child}
              <SectionFooter
                left={meta.footerLeft}
                rightNumber={meta.displayNumber}
                totalDisplay={TOTAL_DISPLAY_PANELS}
              />
            </section>
          )
        })}
      </div>
    </>
  )
}
