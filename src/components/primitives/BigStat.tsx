import { cn } from '@/lib/cn'
import { CountUp } from './CountUp'

interface Props {
  value: string
  label: string
  className?: string
  numericValue?: number
  prefix?: string
  suffix?: string
  variant?: 'orange' | 'dim'
}

export function BigStat({
  value, label, className, numericValue, prefix, suffix, variant = 'orange',
}: Props) {
  return (
    <div className={cn('flex items-baseline gap-3 my-4', className)}>
      <span className={cn(
        'font-latin font-semibold leading-none text-[3rem]',
        variant === 'orange' ? 'text-accent' : 'text-text-dim'
      )}>
        {numericValue !== undefined ? (
          <CountUp to={numericValue} prefix={prefix} suffix={suffix} />
        ) : (
          value
        )}
      </span>
      <span className="text-[0.95rem] text-text-dim">{label}</span>
    </div>
  )
}
