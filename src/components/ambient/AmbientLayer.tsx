import { GrainTexture } from './GrainTexture'
import { StarField } from './StarField'
import { OrbitRings } from './OrbitRings'
import { KeywordMarquee } from './KeywordMarquee'
import { useThemeStore } from '@/lib/themeStore'

export function AmbientLayer() {
  const isLight = useThemeStore((s) => s.theme === 'light')
  return (
    <>
      {!isLight && <StarField />}
      <OrbitRings />
      {!isLight && <KeywordMarquee />}
      <GrainTexture />
    </>
  )
}
