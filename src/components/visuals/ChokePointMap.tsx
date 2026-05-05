import { motion } from 'framer-motion'

export function ChokePointMap() {
  return (
    <svg aria-hidden viewBox="0 0 760 320" className="w-full max-w-[760px] my-6">
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <circle cx={120} cy={160} r={48} fill="var(--color-bg-3)" stroke="var(--color-text-faint)" strokeWidth="1" />
        <text x={120} y={164} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--color-text-dim)">TERRA</text>
        <circle cx={120} cy={160} r={68} fill="none" stroke="var(--color-accent)" strokeWidth="0.8" strokeDasharray="2 4" />
        <text x={120} y={88} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--color-accent)" letterSpacing="2">LEO</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <rect x={200} y={130} width={340} height={60} fill="rgba(240,198,116,0.04)" stroke="var(--color-line-strong)" strokeWidth="0.5" strokeDasharray="1 3" />
        <text x={370} y={120} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-amber)" letterSpacing="2">CISLUNAR · L1 · L2</text>
        <circle cx={300} cy={160} r={2} fill="var(--color-amber)" />
        <text x={300} y={150} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="var(--color-amber)">L1</text>
        <circle cx={420} cy={160} r={2} fill="var(--color-amber)" />
        <text x={420} y={150} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="var(--color-amber)">L2</text>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <circle cx={620} cy={160} r={50} fill="var(--color-bg-2)" stroke="var(--color-text-dim)" strokeWidth="1" />
        <text x={620} y={164} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="var(--color-text)">LUNA</text>
        <motion.g animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx={620} cy={205} r={6} fill="var(--color-amber)" />
          <line x1={620} y1={205} x2={680} y2={245} stroke="var(--color-amber)" strokeWidth="0.8"/>
          <text x={685} y={250} fontFamily="Gowun Batang" fontSize="12" fontWeight="700" fill="var(--color-amber)">PSR · 달 남극</text>
        </motion.g>
      </motion.g>

      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 1.4, duration: 0.6 }}>
        <line x1={100} y1={250} x2={620} y2={250} stroke="var(--color-line-strong)" strokeWidth="0.5"/>
        <circle cx={200} cy={250} r={3} fill="var(--color-accent)"/>
        <text x={200} y={272} textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="var(--color-accent)">2019</text>
        <text x={200} y={286} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="var(--color-text-dim)">Space Force</text>
        <circle cx={420} cy={250} r={3} fill="var(--color-accent)"/>
        <text x={420} y={272} textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="var(--color-accent)">2020</text>
        <text x={420} y={286} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="var(--color-text-dim)">Artemis Accords</text>
      </motion.g>
    </svg>
  )
}
