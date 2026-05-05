import { cn } from '@/lib/cn'

interface Props {
  left: string
  rightNumber?: number | null
  totalDisplay: number
}

export function SectionFooter({ left, rightNumber, totalDisplay }: Props) {
  return (
    <div className={cn(
      'absolute bottom-5 left-5 right-5 md:bottom-[5vh] md:left-[8vw] md:right-[8vw]',
      'flex justify-between items-center',
      'font-mono text-[0.6rem] md:text-[0.7rem] uppercase',
      'text-text-faint pointer-events-none select-none'
    )}
    style={{ letterSpacing: '0.2em' }}
    >
      <span>{left}</span>
      {rightNumber !== null && rightNumber !== undefined && (
        <div className="hidden sm:flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>S.{String(rightNumber).padStart(2, '0')} / {totalDisplay}</span>
        </div>
      )}
    </div>
  )
}
