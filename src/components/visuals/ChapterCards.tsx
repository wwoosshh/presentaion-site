import { motion } from 'framer-motion'
import { hoverSpring } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface CardData { num?: string; title: string; body: string }

export function ChapterCards({ cards }: { cards: readonly CardData[] }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-[980px]"
      style={{ perspective: '1000px' }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn('relative bg-bg-2 border border-line p-6 cursor-default will-change-transform')}
          whileHover={{ rotateX: -2, rotateY: 3, y: -4, boxShadow: '0 20px 40px -20px rgba(232,93,60,0.15)' }}
          style={{ transformStyle: 'preserve-3d' }}
          transition={hoverSpring}
        >
          {card.num && (
            <span className="absolute top-4 right-4 font-mono text-xs text-accent" style={{ letterSpacing: '0.05em' }}>{card.num}</span>
          )}
          <h4 className="font-serif text-[1.15rem] font-bold text-text mb-2">{card.title}</h4>
          <p className="text-[0.92rem] text-text-dim leading-relaxed">{card.body}</p>
        </motion.div>
      ))}
    </div>
  )
}
