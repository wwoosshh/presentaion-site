import { motion } from 'framer-motion'

export function AstropolitikOrbit() {
  return (
    <svg aria-hidden viewBox="-240 -240 480 480" className="w-full max-w-[480px]">
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <circle r="65" fill="none" stroke="#e85d3c" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.7" />
        <circle cx="65" cy="0" r="2.5" fill="#e85d3c" />
      </motion.g>

      <circle r="130" fill="none" stroke="#f0c674" strokeWidth="0.6" strokeDasharray="1 5" opacity="0.4" />

      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <circle r="200" fill="none" stroke="#3a3a48" strokeWidth="0.6" />
        <g transform="translate(200, 0)">
          <circle r="18" fill="#efe9d9" opacity="0.85" />
          <circle r="18" fill="none" stroke="#9d978a" strokeWidth="0.5" />
        </g>
        <circle cx="170" cy="0" r="2" fill="#f0c674" />
        <text x="170" y="-10" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#f0c674">L1</text>
        <circle cx="230" cy="0" r="2" fill="#f0c674" />
        <text x="230" y="-10" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#f0c674">L2</text>
      </motion.g>

      <circle r="28" fill="#13131c" stroke="#5e5a52" strokeWidth="1" />
      <circle r="28" fill="#1c1c28" />
      <text x="0" y="3" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#9d978a">TERRA</text>

      <text x="0" y="-72" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#e85d3c" letterSpacing="2">LEO</text>
      <text x="0" y="-138" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#f0c674" letterSpacing="2">CISLUNAR</text>
    </svg>
  )
}
