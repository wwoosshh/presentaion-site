import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardData { num?: string; title: string; body: string }

const SYMBOLS: Record<string, ReactNode> = {
  i: (
    <g stroke="currentColor" fill="none" strokeWidth="1.2">
      <path d="M 5 25 L 15 8 L 22 30 L 35 12 L 42 28 L 55 10" />
      <path d="M 8 38 L 18 22 L 28 40 L 40 24 L 50 38" opacity="0.5" />
    </g>
  ),
  ii: (
    <g stroke="currentColor" fill="currentColor" strokeWidth="1.2">
      <path d="M 5 25 L 50 25" fill="none" />
      <path d="M 50 25 L 42 19 L 42 31 Z" />
      <path d="M 5 38 L 38 38" fill="none" opacity="0.5" />
      <path d="M 38 38 L 31 33 L 31 43 Z" opacity="0.5" />
    </g>
  ),
  iii: (
    <g stroke="currentColor" fill="none" strokeWidth="1.2">
      <path d="M 30 8 L 8 42 L 52 42 Z" />
      <path d="M 30 8 L 30 42" opacity="0.4" />
      <path d="M 18 25 L 42 25" opacity="0.4" />
    </g>
  ),
  iv: (
    <g stroke="currentColor" fill="none" strokeWidth="1.2">
      <circle cx="30" cy="25" r="18" />
      <path d="M 18 18 L 24 28 L 28 20 L 36 32 L 42 22" stroke="#e85d3c" strokeWidth="1.4" />
    </g>
  ),
}

export function RealismGrid({ cards }: { cards: readonly CardData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
      {cards.map((card) => (
        <motion.div
          key={card.num}
          className="relative bg-bg-2 border border-line p-6 group"
          whileHover={{ borderColor: 'rgba(232,93,60,0.4)' }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <motion.svg
              viewBox="0 0 60 50" className="w-16 h-12 text-accent"
              whileHover={{ scale: 1.1, rotate: card.num === 'iii' ? 0 : 5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              {card.num && SYMBOLS[card.num]}
            </motion.svg>
            <span className="font-mono text-xs text-accent" style={{ letterSpacing: '0.05em' }}>{card.num}</span>
          </div>
          <h4 className="font-serif text-[1.15rem] font-bold mb-2">{card.title}</h4>
          <p className="text-[0.92rem] text-text-dim leading-relaxed">{card.body}</p>
        </motion.div>
      ))}
    </div>
  )
}
