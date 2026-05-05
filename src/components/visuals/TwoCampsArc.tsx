import { motion } from 'framer-motion'

const LEFT_DOTS = 12
const RIGHT_DOTS = 8

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (angleDeg - 90) * Math.PI / 180
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`
}

export function TwoCampsArc() {
  const cx = 440, cy = 320, r = 240

  return (
    <svg aria-hidden viewBox="0 0 880 360" className="w-full max-w-[560px] my-2">
      <defs>
        <radialGradient id="convergeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-amber)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy - r} r={50} fill="url(#convergeGlow)" />

      <motion.path
        d={arcPath(cx, cy, r, -100, -180)}
        stroke="var(--color-accent)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d={arcPath(cx, cy, r, 100, 180)}
        stroke="var(--color-text-faint)" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {Array.from({ length: LEFT_DOTS }).map((_, i) => {
        const t = -100 - (80 / (LEFT_DOTS - 1)) * i
        const p = polarToCartesian(cx, cy, r, t)
        return (
          <motion.circle key={`l${i}`} cx={p.x} cy={p.y} r={3.5} fill="var(--color-accent)"
            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 1.0 + i * 0.06, duration: 0.3 }}
          />
        )
      })}

      {Array.from({ length: RIGHT_DOTS }).map((_, i) => {
        const t = 100 + (80 / (RIGHT_DOTS - 1)) * i
        const p = polarToCartesian(cx, cy, r, t)
        return (
          <motion.circle key={`r${i}`} cx={p.x} cy={p.y} r={3} fill="var(--color-text-dim)"
            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 1.0 + i * 0.06, duration: 0.3 }}
          />
        )
      })}

      <motion.g
        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ delay: 2.0, duration: 0.6, ease: 'backOut' }}
      >
        <motion.circle cx={cx} cy={cy - r} r={6} fill="var(--color-amber)"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x={cx} y={cy - r - 14} textAnchor="middle"
          fontFamily="Gowun Batang" fontSize="14" fontWeight="700" fill="var(--color-amber)">달 남극</text>
      </motion.g>
    </svg>
  )
}
