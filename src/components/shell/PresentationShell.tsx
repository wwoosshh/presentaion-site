import { useSlideObserver } from '@/hooks/useSlideObserver'
import { SLIDES as DEFAULT_SLIDES, TOTAL_DISPLAY_PANELS as DEFAULT_TOTAL, type SlideMetaBase } from '@/data/slides'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import { SectionMarker } from './SectionMarker'
import { SectionFooter } from './SectionFooter'
import { ProgressBar } from './ProgressBar'
import { SideNav } from './SideNav'

interface Props {
  children: ReactNode[]
  slides?: readonly SlideMetaBase[]
  totalDisplay?: number
}

export function PresentationShell({ children, slides, totalDisplay }: Props) {
  const SLIDES = slides ?? DEFAULT_SLIDES
  const TOTAL = totalDisplay ?? DEFAULT_TOTAL
  const { setRef } = useSlideObserver(SLIDES.length)

  return (
    <>
      <ProgressBar slides={SLIDES} />
      <SideNav slides={SLIDES} />
      <div className={cn('snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden relative bg-bg text-text')}>
        {children.map((child, i) => {
          const meta = SLIDES[i]
          return (
            <section
              key={meta.id}
              id={`s${i}`}
              ref={setRef(i)}
              className={cn(
                'snap-start snap-always relative overflow-hidden',
                'h-screen w-full',
                'flex flex-col justify-center',
                'px-[8vw] pt-[10vh] pb-[10vh]',
                'border-b border-line'
              )}
            >
              <SectionMarker number={meta.displayNumber} label={meta.marker} />
              {child}
              <SectionFooter
                left={meta.footerLeft}
                rightNumber={meta.displayNumber}
                totalDisplay={TOTAL}
              />
            </section>
          )
        })}
      </div>
    </>
  )
}
