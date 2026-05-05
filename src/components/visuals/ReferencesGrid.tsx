import { motion } from 'framer-motion'
import { hoverSpring } from '@/lib/motion'

interface Props { items: readonly string[]; heading: string }

export function ReferencesGrid({ items, heading }: Props) {
  return (
    <div>
      <h4 className="font-serif text-xl mb-4">{heading}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={i}
            className="relative pl-7 py-2 text-text-dim border-b border-line text-sm"
            whileHover={{ x: 4, color: 'var(--color-text)' }}
            transition={hoverSpring}
          >
            <span className="absolute left-0 top-4 w-2 h-px bg-accent" />
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
