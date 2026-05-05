import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  breathe?: boolean
}

export function CountUp({
  to, prefix = '', suffix = '', duration = 1.2, className, breathe = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { amount: 0.5, once: false })
  const value = useMotionValue(0)
  const display = useTransform(value, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`)

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] })
      return controls.stop
    } else {
      value.set(0)
    }
  }, [inView, to, duration, value])

  return (
    <motion.span
      ref={ref}
      className={cn('inline-block', className)}
      animate={breathe ? { scale: [1, 1.015, 1] } : undefined}
      transition={breathe ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      <motion.span>{display}</motion.span>
    </motion.span>
  )
}
