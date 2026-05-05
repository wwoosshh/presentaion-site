import { motion } from 'framer-motion'

export function AstropolitikOrbit() {
  return (
    <svg aria-hidden viewBox="-240 -240 480 480" className="w-full max-w-[480px]">
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <circle r="65" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.7" />
        <circle cx="65" cy="0" r="2.5" fill="var(--color-accent)" />
      </motion.g>

      <circle r="130" fill="none" stroke="var(--color-amber)" strokeWidth="0.6" strokeDasharray="1 5" opacity="0.4" />

      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <circle r="200" fill="none" stroke="var(--color-line-strong)" strokeWidth="0.6" />
        <g transform="translate(200, 0)">
          <circle r="18" fill="var(--color-text)" opacity="0.85" />
          <circle r="18" fill="none" stroke="var(--color-text-dim)" strokeWidth="0.5" />
        </g>
        <circle cx="170" cy="0" r="2" fill="var(--color-amber)" />
        <text x="170" y="-10" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--color-amber)">L1</text>
        <circle cx="230" cy="0" r="2" fill="var(--color-amber)" />
        <text x="230" y="-10" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="var(--color-amber)">L2</text>
      </motion.g>

      <circle r="28" fill="var(--color-bg-2)" stroke="var(--color-text-faint)" strokeWidth="1" />
      <circle r="28" fill="var(--color-bg-3)" />
      <text x="0" y="3" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-text-dim)">TERRA</text>

      <text x="0" y="-72" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-accent)" letterSpacing="2">LEO</text>
      <text x="0" y="-138" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-amber)" letterSpacing="2">CISLUNAR</text>
    </svg>
  )
}
