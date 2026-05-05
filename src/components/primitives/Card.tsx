import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { hoverSpring } from '@/lib/motion'

interface Props {
  num?: string
  title: string
  body: string
  className?: string
  tilt?: boolean
  children?: ReactNode
}

export function Card({ num, title, body, className, tilt = false, children }: Props) {
  return (
    <motion.div
      className={cn(
        'relative bg-bg-2 border border-line p-6',
        'transition-colors duration-200 hover:border-accent/40',
        className
      )}
      whileHover={tilt ? { y: -4, scale: 1.01 } : { y: -2 }}
      transition={hoverSpring}
    >
      {num && (
        <span className="absolute top-4 right-4 font-mono text-xs text-accent" style={{ letterSpacing: '0.05em' }}>{num}</span>
      )}
      <h4 className="font-serif text-[1.15rem] font-bold text-text mb-2">{title}</h4>
      <p className="text-[0.92rem] text-text-dim leading-relaxed">{body}</p>
      {children}
    </motion.div>
  )
}
