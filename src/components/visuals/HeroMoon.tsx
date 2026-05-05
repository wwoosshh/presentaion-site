import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { useThemeStore } from '@/lib/themeStore'

function MoonMesh({ isLight }: { isLight: boolean }) {
  return (
    <mesh rotation={[0.3, 0, 0]}>
      <icosahedronGeometry args={[1.6, 2]} />
      <meshStandardMaterial
        color={isLight ? '#e6dcc4' : '#d4cfbf'}
        roughness={0.95}
        metalness={0.05}
        flatShading
      />
    </mesh>
  )
}

export function HeroMoon() {
  const isLight = useThemeStore((s) => s.theme === 'light')
  return (
    <motion.div
      aria-hidden
      className="absolute right-[-15vw] top-[15%] md:right-[-10vw] md:top-1/2 md:-translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none opacity-50 md:opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={isLight ? 0.55 : 0.18} />
        <directionalLight
          position={[5, 3, 5]}
          intensity={isLight ? 1.0 : 1.4}
          color={isLight ? '#fffaf0' : '#fff5e0'}
        />
        <directionalLight
          position={[-5, -2, -2]}
          intensity={isLight ? 0.10 : 0.15}
          color={isLight ? '#c14a26' : '#e85d3c'}
        />
        <Suspense fallback={null}>
          <group>
            <MoonMesh isLight={isLight} />
          </group>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} enableRotate={false} />
      </Canvas>
    </motion.div>
  )
}
