import { motion } from 'framer-motion'

export function KoreaHedging() {
  return (
    <svg aria-hidden viewBox="0 0 760 280" className="w-full max-w-[760px] my-6">
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}>
        <rect x={40} y={100} width={140} height={50} fill="var(--color-bg-2)" stroke="var(--color-line-strong)" rx="2"/>
        <text x={110} y={130} textAnchor="middle" fontFamily="Gowun Batang" fontSize="14" fontWeight="700" fill="var(--color-text)">USA</text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <rect x={580} y={100} width={140} height={50} fill="var(--color-bg-2)" stroke="var(--color-line-strong)" rx="2"/>
        <text x={650} y={130} textAnchor="middle" fontFamily="Gowun Batang" fontSize="14" fontWeight="700" fill="var(--color-text)">CHINA</text>
      </motion.g>
      <motion.g initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 0.5, duration: 0.5 }}>
        <rect x={310} y={90} width={140} height={70} fill="rgba(232,93,60,0.08)" stroke="var(--color-accent)" strokeWidth="1.4" rx="2"/>
        <text x={380} y={120} textAnchor="middle" fontFamily="Gowun Batang" fontSize="16" fontWeight="700" fill="var(--color-accent)">한국</text>
        <text x={380} y={140} textAnchor="middle" fontFamily="Pretendard" fontSize="10" fill="var(--color-amber)">헤징 · HEDGING</text>
      </motion.g>

      <defs>
        <marker id="arrowL" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M5,0 L0,3 L5,6" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" />
        </marker>
        <marker id="arrowR" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
          <path d="M0,0 L5,3 L0,6" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" />
        </marker>
      </defs>
      <motion.path d="M 310 125 L 180 125" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" markerEnd="url(#arrowL)"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 0.9, duration: 0.7 }} />
      <motion.path d="M 450 125 L 580 125" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" markerEnd="url(#arrowR)"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 0.9, duration: 0.7 }} />

      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: 1.4, duration: 0.6 }}>
        <line x1={250} y1={210} x2={510} y2={210} stroke="var(--color-line-strong)" strokeWidth="0.5"/>
        {[
          { x: 270, y: '2021', l: '아르테미스 가입' },
          { x: 350, y: '누리호', l: '발사체' },
          { x: 430, y: '다누리', l: '달 궤도선' },
          { x: 510, y: '2024', l: '우주항공청' },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={210} r={3} fill="var(--color-accent)"/>
            <text x={p.x} y={228} textAnchor="middle" fontFamily="Fraunces" fontSize="11" fill="var(--color-text)">{p.y}</text>
            <text x={p.x} y={244} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="var(--color-text-dim)">{p.l}</text>
          </g>
        ))}
      </motion.g>
    </svg>
  )
}
