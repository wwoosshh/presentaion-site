import { useEffect } from 'react'
import { PresentationShell } from '@/components/shell/PresentationShell'
import { AmbientLayer } from '@/components/ambient/AmbientLayer'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'
import { useMouseIdle } from '@/hooks/useMouseIdle'
import { cn } from '@/lib/cn'
import { PresenterHUD } from '@/components/presenter/PresenterHUD'
import { SLIDES_10W, TOTAL_DISPLAY_PANELS_10W } from '@/data/slides10week'
import { Slide00Cover }      from '@/components/slides10week/Slide00Cover'
import { Slide01Contents }   from '@/components/slides10week/Slide01Contents'
import { Slide02Problem }    from '@/components/slides10week/Slide02Problem'
import { Slide03Premise }    from '@/components/slides10week/Slide03Premise'
import { Slide04Roadmap }    from '@/components/slides10week/Slide04Roadmap'
import { Slide05Phase1 }     from '@/components/slides10week/Slide05Phase1'
import { Slide06Phase2 }     from '@/components/slides10week/Slide06Phase2'
import { Slide07Phase3 }     from '@/components/slides10week/Slide07Phase3'
import { Slide08Phase4 }     from '@/components/slides10week/Slide08Phase4'
import { Slide09Phase5 }     from '@/components/slides10week/Slide09Phase5'
import { Slide10Risks }      from '@/components/slides10week/Slide10Risks'
import { Slide11Conclusion } from '@/components/slides10week/Slide11Conclusion'
import { Slide12QnA }        from '@/components/slides10week/Slide12QnA'

export default function App10Week() {
  useKeyboardNav(SLIDES_10W)
  const idle = useMouseIdle()

  useEffect(() => {
    document.title = '달 생태계 보호 전략 | 10주차 발표'
  }, [])

  return (
    <div className={cn(idle && 'cursor-none')}>
      <AmbientLayer />
      <PresentationShell slides={SLIDES_10W} totalDisplay={TOTAL_DISPLAY_PANELS_10W}>
        <Slide00Cover />
        <Slide01Contents />
        <Slide02Problem />
        <Slide03Premise />
        <Slide04Roadmap />
        <Slide05Phase1 />
        <Slide06Phase2 />
        <Slide07Phase3 />
        <Slide08Phase4 />
        <Slide09Phase5 />
        <Slide10Risks />
        <Slide11Conclusion />
        <Slide12QnA />
      </PresentationShell>
      <PresenterHUD />
      <div className={cn(
        'fixed bottom-4 left-4 z-30 font-mono text-[0.65rem] text-text-faint pointer-events-none transition-opacity',
        idle ? 'opacity-0' : 'opacity-100'
      )}
      style={{ letterSpacing: '0.2em' }}>
        ? FOR HELP
      </div>
    </div>
  )
}
