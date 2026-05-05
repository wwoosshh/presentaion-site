import { motion } from 'framer-motion'

export function DotComparison() {
  const us = Array.from({ length: 66 })
  const ch = Array.from({ length: 17 })
  return (
    <svg aria-hidden viewBox="0 0 880 240" className="w-full max-w-[880px]">
      <text x={120} y={26} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3" fill="#e85d3c">ARTEMIS · 66</text>
      <text x={760} y={26} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3" fill="#9d978a">ILRS · 17</text>

      {us.map((_, i) => {
        const col = i % 11
        const row = Math.floor(i / 11)
        return (
          <motion.circle
            key={`u${i}`}
            cx={50 + col * 16}
            cy={60 + row * 22}
            r={4}
            fill="#e85d3c"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.02 * i, duration: 0.25 }}
          />
        )
      })}

      {ch.map((_, i) => {
        const col = i % 4
        const row = Math.floor(i / 4)
        return (
          <motion.circle
            key={`c${i}`}
            cx={700 + col * 16}
            cy={60 + row * 22}
            r={4}
            fill="#5e5a52"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.06 * i, duration: 0.3 }}
          />
        )
      })}
    </svg>
  )
}
