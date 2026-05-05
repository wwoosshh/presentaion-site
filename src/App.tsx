import { PresentationShell } from '@/components/shell/PresentationShell'
import { AmbientLayer } from '@/components/ambient/AmbientLayer'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'
import { Slide00Cover } from '@/components/slides/Slide00Cover'
import { Slide01Contents } from '@/components/slides/Slide01Contents'
import { Slide02Treaty } from '@/components/slides/Slide02Treaty'
import { Slide03TwoCamps } from '@/components/slides/Slide03TwoCamps'
import { Slide04TheoryTree } from '@/components/slides/Slide04TheoryTree'
import { Slide05Realism } from '@/components/slides/Slide05Realism'
import { Slide06Hegemony } from '@/components/slides/Slide06Hegemony'
import { Slide07Astropolitik } from '@/components/slides/Slide07Astropolitik'
import { Slide08CoreClaim } from '@/components/slides/Slide08CoreClaim'
import { Slide09Arg1Anarchy } from '@/components/slides/Slide09Arg1Anarchy'
import { Slide10Arg2PublicGoods } from '@/components/slides/Slide10Arg2PublicGoods'
import { Slide11Arg3Mirror } from '@/components/slides/Slide11Arg3Mirror'
import { Slide12Arg4Legitimacy } from '@/components/slides/Slide12Arg4Legitimacy'
import { Slide13NNA1ChokePoints } from '@/components/slides/Slide13NNA1ChokePoints'
import { Slide14NNA2LegalHistory } from '@/components/slides/Slide14NNA2LegalHistory'
import { Slide15Rebuttals } from '@/components/slides/Slide15Rebuttals'
import { Slide16KoreaPath } from '@/components/slides/Slide16KoreaPath'
import { Slide17Conclusion } from '@/components/slides/Slide17Conclusion'
import { Slide18References } from '@/components/slides/Slide18References'

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
        <Slide04TheoryTree />
        <Slide05Realism />
        <Slide06Hegemony />
        <Slide07Astropolitik />
        <Slide08CoreClaim />
        <Slide09Arg1Anarchy />
        <Slide10Arg2PublicGoods />
        <Slide11Arg3Mirror />
        <Slide12Arg4Legitimacy />
        <Slide13NNA1ChokePoints />
        <Slide14NNA2LegalHistory />
        <Slide15Rebuttals />
        <Slide16KoreaPath />
        <Slide17Conclusion />
        <Slide18References />
      </PresentationShell>
    </>
  )
}
