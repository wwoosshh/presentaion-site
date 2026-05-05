import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

interface Level { label: string; name: string; detail: string }

export function TheoryTree({ levels }: { levels: readonly Level[] }) {
  return (
    <div className="flex flex-col gap-5 max-w-[920px] mt-8 relative">
      {levels.map((lv, i) => (
        <motion.div
          key={i}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: i * 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-bg-2 to-bg-3 border border-line p-6 hover:border-accent/40 transition-colors"
        >
          {i > 0 && (
            <motion.span
              className="absolute -top-5 left-1/2 w-px h-5 bg-accent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.4 - 0.1, duration: 0.3 }}
            />
          )}
          <motion.span
            className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            style={{ boxShadow: '0 0 12px rgba(232,93,60,0.4)' }}
          />
          <div className="font-mono text-[0.7rem] uppercase text-accent mb-2" style={{ letterSpacing: '0.3em' }}>{lv.label}</div>
          <div className="font-serif text-2xl font-bold text-text mb-1">{lv.name}</div>
          <div className="text-[0.95rem] text-text-dim">{lv.detail}</div>
        </motion.div>
      ))}
    </div>
  )
}
