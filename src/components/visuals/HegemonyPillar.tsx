import { motion } from 'framer-motion'

export function HegemonyPillar() {
  const platformDots = Array.from({ length: 12 })
  return (
    <div className="group relative my-4">
      <svg aria-hidden viewBox="0 0 300 360" className="w-full max-w-[300px]">
        <motion.g
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 1.2 } } }}
        >
          {platformDots.map((_, i) => (
            <motion.circle
              key={i}
              cx={40 + i * 20}
              cy={70}
              r={3}
              fill="var(--color-text)"
              variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
              className="group-hover:opacity-30 transition-opacity duration-700"
            />
          ))}
        </motion.g>
        <motion.line
          x1={30} y1={80} x2={270} y2={80}
          stroke="var(--color-line-strong)" strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        />

        <motion.rect
          x={140} y={80} width={20} height={220}
          fill="var(--color-accent)"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: '150px 300px' }}
          className="group-hover:opacity-20 transition-opacity duration-700"
        />

        <motion.line
          x1={60} y1={310} x2={240} y2={310}
          stroke="var(--color-line-strong)" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        />

        <text x={150} y={50} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="3" fill="var(--color-text-dim)">PUBLIC GOODS</text>
        <text x={150} y={335} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="3" fill="var(--color-text-dim)">HEGEMON</text>
      </svg>
      <p className="text-xs text-text-faint italic mt-2 max-w-[300px] text-center">기둥에 마우스 호버 &rarr; 패권 부재 시 시뮬레이션</p>
    </div>
  )
}
