import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface Props {
  variant?: 'accent' | 'amber' | 'faint'
  children: ReactNode
  className?: string
}

export function Kicker({ variant = 'accent', children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[0.75rem] uppercase mb-6',
        variant === 'accent' && 'text-accent',
        variant === 'amber' && 'text-amber',
        variant === 'faint' && 'text-text-faint',
        className
      )}
      style={{ letterSpacing: '0.3em' }}
    >
      {children}
    </span>
  )
}
