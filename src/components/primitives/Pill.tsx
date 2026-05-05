import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface Props {
  variant?: 'default' | 'accent'
  children: ReactNode
  className?: string
}

export function Pill({ variant = 'default', children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-block px-4 py-1.5 rounded-full',
        'font-mono text-[0.72rem] uppercase',
        variant === 'default'
          ? 'border border-line-strong text-text-dim'
          : 'border border-accent bg-accent-glow text-accent',
        className
      )}
      style={{ letterSpacing: '0.2em' }}
    >
      {children}
    </span>
  )
}
