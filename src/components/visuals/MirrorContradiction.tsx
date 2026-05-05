import { motion } from 'framer-motion'

const ROWS = [
  { year: '2026', desc: '달 남극 물 얼음 탐사' },
  { year: '2028', desc: '자원 활용 실증' },
  { year: '2035', desc: '달 남극 기지 완공' },
]

export function MirrorContradiction() {
  return (
    <svg aria-hidden viewBox="0 0 640 280" className="w-full max-w-[640px] my-8">
      <motion.line
        x1={320} y1={20} x2={320} y2={260}
        stroke="var(--color-accent)" strokeWidth="0.8" strokeDasharray="3 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.0 }}
      />
      <text x={320} y={14} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-accent)" letterSpacing="2">MIRROR</text>

      <text x={140} y={36} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--color-text-dim)" letterSpacing="2">USA · ARTEMIS</text>
      <text x={500} y={36} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--color-text-dim)" letterSpacing="2">CHINA · ILRS</text>

      {ROWS.map((r, i) => {
        const y = 75 + i * 60
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.5 + i * 0.3, duration: 0.6 }}
          >
            <text x={140} y={y} textAnchor="middle" fontFamily="Fraunces" fontSize="20" fill="var(--color-text)">{r.year}</text>
            <text x={140} y={y + 20} textAnchor="middle" fontFamily="Pretendard" fontSize="11" fill="var(--color-text-dim)">{r.desc}</text>
            <line x1={50} y1={y + 32} x2={230} y2={y + 32} stroke="var(--color-line-strong)" strokeWidth="0.5"/>
            <text x={500} y={y} textAnchor="middle" fontFamily="Fraunces" fontSize="20" fill="var(--color-text)">{r.year}</text>
            <text x={500} y={y + 20} textAnchor="middle" fontFamily="Pretendard" fontSize="11" fill="var(--color-text-dim)">{r.desc}</text>
            <line x1={410} y1={y + 32} x2={590} y2={y + 32} stroke="var(--color-line-strong)" strokeWidth="0.5"/>
          </motion.g>
        )
      })}
    </svg>
  )
}
