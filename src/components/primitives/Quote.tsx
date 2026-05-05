import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  cite?: string
  lang?: 'ko' | 'en'
  centered?: boolean
  noBar?: boolean
  className?: string
}

export function Quote({ children, cite, lang = 'ko', centered = false, noBar = false, className }: Props) {
  return (
    <blockquote className={cn(
      lang === 'en' ? 'font-latin italic' : 'font-serif italic',
      'text-[clamp(1.4rem,3vw,2.2rem)] leading-tight',
      'max-w-[50ch] my-8',
      noBar ? '' : 'border-l-[3px] border-accent pl-8',
      centered && 'text-center mx-auto',
      className
    )}>
      <span className="block text-text" style={{ whiteSpace: 'pre-line' }}>{children}</span>
      {cite && (
        <cite className="block not-italic font-sans text-sm text-text-faint mt-4" style={{ letterSpacing: '0.05em' }}>
          {cite}
        </cite>
      )}
    </blockquote>
  )
}
