import { cn } from '@/lib/cn'

interface Props {
  number: number | null
  label: string
}

export function SectionMarker({ number, label }: Props) {
  return (
    <div className={cn(
      'absolute top-5 left-5 md:top-[5vh] md:left-[8vw]',
      'flex items-center gap-3 md:gap-6',
      'font-mono text-[0.62rem] md:text-[0.72rem] uppercase',
      'text-text-faint pointer-events-none select-none'
    )}
    style={{ letterSpacing: '0.2em' }}
    >
      {number !== null && (
        <span className="text-accent">{String(number).padStart(2, '0')}</span>
      )}
      <span className="inline-block w-[30px] md:w-[60px] h-px bg-line-strong" />
      <span>{label}</span>
    </div>
  )
}
