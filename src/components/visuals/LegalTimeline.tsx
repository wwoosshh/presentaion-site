import { motion } from 'framer-motion'

export function LegalTimeline() {
  return (
    <svg aria-hidden viewBox="0 0 760 220" className="w-full max-w-[760px] my-6">
      <text x={60} y={26} fontFamily="JetBrains Mono" fontSize="9" fill="#5e5a52" letterSpacing="2">1979 MOON AGREEMENT</text>
      <motion.line x1={60} y1={50} x2={400} y2={50}
        stroke="#5e5a52" strokeWidth="1" strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 1.0 }} />
      <motion.text x={420} y={54} fontFamily="Pretendard" fontSize="11" fill="#5e5a52"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.4 }} transition={{ delay: 1.0, duration: 0.5 }}>
        강대국 비준 거부 &rarr; 사문화
      </motion.text>

      <text x={60} y={130} fontFamily="JetBrains Mono" fontSize="9" fill="#e85d3c" letterSpacing="2">1970s EEZ 일방선언 &rarr; 1982 UNCLOS</text>
      <motion.line x1={60} y1={150} x2={500} y2={150}
        stroke="#e85d3c" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 1.4 }} />
      <motion.circle cx={120} cy={150} r={5} fill="#e85d3c"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 0.4 }} transition={{ delay: 0.5 }} />
      <motion.circle cx={440} cy={150} r={5} fill="#e85d3c"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false, amount: 0.4 }} transition={{ delay: 1.2 }} />
      <text x={120} y={170} textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="#e85d3c">1970s</text>
      <text x={120} y={184} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="#9d978a">행위</text>
      <text x={440} y={170} textAnchor="middle" fontFamily="Fraunces" fontSize="13" fill="#e85d3c">1982</text>
      <text x={440} y={184} textAnchor="middle" fontFamily="Pretendard" fontSize="9" fill="#9d978a">법 추인</text>

      <motion.text x={520} y={154} fontFamily="Gowun Batang" fontSize="13" fontWeight="700" fill="#e85d3c"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.4 }} transition={{ delay: 1.6, duration: 0.5 }}>
        행위 &rarr; 법
      </motion.text>
    </svg>
  )
}
