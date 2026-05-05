import { motion } from 'framer-motion'

export function PrisonerDilemma() {
  return (
    <svg aria-hidden viewBox="0 0 320 320" className="w-full max-w-[320px]">
      <defs>
        <pattern id="cellHl" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 0 6 L 6 0" stroke="#e85d3c" strokeWidth="0.4" opacity="0.3"/>
        </pattern>
      </defs>
      <text x="160" y="20" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#9d978a" letterSpacing="2">미국</text>
      <text x="80" y="38" textAnchor="middle" fontFamily="Pretendard" fontSize="11" fill="#efe9d9">협력</text>
      <text x="240" y="38" textAnchor="middle" fontFamily="Pretendard" fontSize="11" fill="#efe9d9">배신</text>
      <text x="20" y="160" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#9d978a" letterSpacing="2" transform="rotate(-90, 20, 160)">중국</text>
      <text x="46" y="120" textAnchor="middle" fontFamily="Pretendard" fontSize="11" fill="#efe9d9">협력</text>
      <text x="46" y="220" textAnchor="middle" fontFamily="Pretendard" fontSize="11" fill="#efe9d9">배신</text>

      {[
        { x: 60, y: 50, label: '+ / +', sub: '이상적' },
        { x: 180, y: 50, label: '+++ / −−', sub: '미국 우위' },
        { x: 60, y: 150, label: '−− / +++', sub: '중국 우위' },
        { x: 180, y: 150, label: '0 / 0', sub: '내쉬 균형', highlight: true },
      ].map((cell, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1 * i, duration: 0.5 }}
        >
          <rect x={cell.x} y={cell.y} width="100" height="80" fill={cell.highlight ? 'url(#cellHl)' : 'transparent'} stroke={cell.highlight ? '#e85d3c' : '#3a3a48'} strokeWidth={cell.highlight ? 1.4 : 0.8} />
          <text x={cell.x + 50} y={cell.y + 38} textAnchor="middle" fontFamily="Fraunces" fontSize="14" fill={cell.highlight ? '#e85d3c' : '#efe9d9'}>{cell.label}</text>
          <text x={cell.x + 50} y={cell.y + 56} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="#9d978a">{cell.sub}</text>
        </motion.g>
      ))}

      <text x="160" y="280" textAnchor="middle" fontFamily="Pretendard" fontSize="10" fill="#9d978a">자제 약속은 강제 불가능 → 모두 배신을 합리적 선택</text>
    </svg>
  )
}
