import { motion } from 'framer-motion'

export function TreatyFracture() {
  return (
    <svg aria-hidden viewBox="0 0 800 120" className="w-full max-w-[800px] my-6 text-text-faint">
      <text x="0" y="20" fontFamily="Fraunces, serif" fontSize="14" fill="currentColor" letterSpacing="2">1967</text>
      <text x="760" y="20" fontFamily="Fraunces, serif" fontSize="14" fill="currentColor" letterSpacing="2" textAnchor="end">2026</text>

      <motion.path
        d="M 20 60 L 380 60"
        stroke="var(--color-text)" strokeWidth="1.2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M 380 60 L 395 50 L 405 70 L 420 55 L 430 65"
        stroke="var(--color-accent)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 1.3, duration: 0.9, ease: 'easeOut' }}
      />
      <motion.path
        d="M 430 65 L 780 60"
        stroke="var(--color-text)" strokeWidth="1.2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 2.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {[
        { cx: 400, cy: 35, r: 1.5 },
        { cx: 388, cy: 78, r: 1.2 },
        { cx: 410, cy: 90, r: 1.0 },
        { cx: 422, cy: 30, r: 0.8 },
      ].map((p, i) => (
        <motion.circle
          key={i} cx={p.cx} cy={p.cy} r={p.r} fill="var(--color-accent)"
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 2.8 + i * 0.08, duration: 0.4 }}
        />
      ))}
    </svg>
  )
}
