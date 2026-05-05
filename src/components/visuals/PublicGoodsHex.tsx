import { motion } from 'framer-motion'

interface Principle { title: string; body: string }

interface Props { principles: readonly Principle[]; className?: string }

function hexPath(cx: number, cy: number, r: number) {
  const points: string[] = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    points.push(`${cx + r * Math.cos(angle)} ${cy + r * Math.sin(angle)}`)
  }
  return `M ${points.join(' L ')} Z`
}

export function PublicGoodsHex({ principles, className }: Props) {
  const cx = 320, cy = 200, R = 70
  const positions = [
    { x: cx, y: cy },
    { x: cx, y: cy - R * 1.5 },
    { x: cx + R * 1.3, y: cy - R * 0.75 },
    { x: cx + R * 1.3, y: cy + R * 0.75 },
    { x: cx, y: cy + R * 1.5 },
    { x: cx - R * 1.3, y: cy + R * 0.75 },
    { x: cx - R * 1.3, y: cy - R * 0.75 },
  ]

  return (
    <svg aria-hidden viewBox="0 0 640 400" className={`w-full max-w-[640px] my-8 ${className ?? ''}`}>
      {positions.slice(0, 7).map((p, i) => {
        const isCenter = i === 0
        const pr = principles[i]
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <path
              d={hexPath(p.x, p.y, R * 0.85)}
              fill={isCenter ? 'rgba(232,93,60,0.08)' : 'rgba(19,19,28,0.6)'}
              stroke={isCenter ? '#e85d3c' : '#3a3a48'}
              strokeWidth="1"
            />
            <text x={p.x} y={p.y - 4} textAnchor="middle" fontFamily="Gowun Batang" fontSize="13" fontWeight="700" fill={isCenter ? '#e85d3c' : '#efe9d9'}>
              {pr?.title ?? '아르테미스'}
            </text>
            <text x={p.x} y={p.y + 14} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="#9d978a">
              {pr?.body.slice(0, 14) ?? '7대 원칙 중심'}
            </text>
          </motion.g>
        )
      })}
    </svg>
  )
}
