import { motion, type Variants } from 'framer-motion'
import { reveal, revealStagger } from '@/lib/motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  staggerChildren?: number
  variants?: Variants
  once?: boolean
  amount?: number
}

export function RevealOnView({
  children, className, staggerChildren, variants, once = false, amount = 0.4,
}: Props) {
  const v = variants ?? (staggerChildren ? revealStagger(staggerChildren) : reveal)
  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

export const RevealItem = motion.div
