import { cn } from '@/lib/cn'

interface Props {
  left: string
  rightNumber?: number | null
  totalDisplay: number
}

export function SectionFooter({ left, rightNumber, totalDisplay }: Props) {
  return (
    <div className={cn(
      'absolute bottom-[5vh] left-[8vw] right-[8vw]',
      'flex justify-between items-center',
      'font-mono text-[0.7rem] uppercase',
      'text-text-faint pointer-events-none select-none'
    )}
    style={{ letterSpacing: '0.2em' }}
    >
      <span>{left}</span>
      {rightNumber !== null && rightNumber !== undefined && (
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>S.{String(rightNumber).padStart(2, '0')} / {totalDisplay}</span>
        </div>
      )}
    </div>
  )
}
