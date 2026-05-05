import { useEffect, useRef } from 'react'
import { usePresenterMode } from '@/hooks/usePresenterMode'

interface Star {
  x: number; y: number; r: number; o: number
  vx: number; vy: number; depth: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ambient = usePresenterMode((s) => s.ambient)

  useEffect(() => {
    if (!ambient) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf = 0
    let mx = 0, my = 0

    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.5 + Math.random() * 2,
      o: 0.2 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      depth: Math.random(),
    }))

    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX - window.innerWidth / 2) / window.innerWidth
      my = (e.clientY - window.innerHeight / 2) / window.innerHeight
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('resize', resize)

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      stars.forEach((s) => {
        s.x += s.vx
        s.y += s.vy
        if (s.x < 0) s.x = window.innerWidth
        if (s.x > window.innerWidth) s.x = 0
        if (s.y < 0) s.y = window.innerHeight
        if (s.y > window.innerHeight) s.y = 0

        const px = s.x + mx * 12 * (1 - s.depth)
        const py = s.y + my * 12 * (1 - s.depth)
        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(239, 233, 217, ${s.o})`
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', resize)
    }
  }, [ambient])

  if (!ambient) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  )
}
