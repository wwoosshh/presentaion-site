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
      <div className={cn('snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden relative bg-bg text-text')}>
        {children.map((child, i) => {
          const meta = SLIDES[i]
          return (
            <section
              key={meta.id}
              id={`s${i}`}
              ref={setRef(i)}
              className={cn(
                'snap-start snap-always relative',
                'min-h-screen md:h-screen w-full',
                'overflow-y-auto md:overflow-hidden',
                'flex flex-col justify-center',
                'px-5 pt-20 pb-20 md:px-[8vw] md:pt-[10vh] md:pb-[10vh]',
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
