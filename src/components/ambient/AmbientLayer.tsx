import { GrainTexture } from './GrainTexture'
import { StarField } from './StarField'
import { OrbitRings } from './OrbitRings'
import { KeywordMarquee } from './KeywordMarquee'

export function AmbientLayer() {
  return (
    <>
      <StarField />
      <OrbitRings />
      <KeywordMarquee />
      <GrainTexture />
    </>
  )
}
