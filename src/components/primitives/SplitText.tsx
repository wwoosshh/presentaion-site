import { motion } from 'framer-motion'
import { splitChar } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface Props {
  text: string
  className?: string
  charClassName?: string
  staggerChildren?: number
  delay?: number
  once?: boolean
}

export function SplitText({
  text, className, charClassName, staggerChildren = 0.03, delay = 0, once = false,
}: Props) {
  const chars = Array.from(text)
  return (
    <motion.span
      className={cn('inline-block', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      transition={{ staggerChildren, delayChildren: delay }}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={splitChar}
          className={cn('inline-block', charClassName)}
        >
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </motion.span>
  )
}
