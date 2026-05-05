import { useEffect, useState } from 'react'

export function useMouseIdle(timeoutMs = 3000) {
  const [idle, setIdle] = useState(false)

  useEffect(() => {
    let timer: number
    const reset = () => {
      setIdle(false)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setIdle(true), timeoutMs)
    }
    reset()
    window.addEventListener('mousemove', reset)
    window.addEventListener('keydown', reset)
    return () => {
      window.removeEventListener('mousemove', reset)
      window.removeEventListener('keydown', reset)
      window.clearTimeout(timer)
    }
  }, [timeoutMs])

  return idle
}
