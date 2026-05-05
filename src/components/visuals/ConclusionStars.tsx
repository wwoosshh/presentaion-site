import { motion } from 'framer-motion'

export function ConclusionStars() {
  return (
    <div className="relative w-full">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,93,60,0.08), transparent 60%)' }}
      />

      <svg aria-hidden viewBox="-300 -160 600 320" className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => {
          const angle = (i / 50) * Math.PI * 2
          const r = 200 + Math.random() * 80
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r * 0.5
          return (
            <motion.circle
              key={i}
              r={1.2}
              fill="#efe9d9"
              initial={{ cx: x, cy: y, opacity: 0.6 }}
              whileInView={{ cx: 0, cy: 0, opacity: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 4 + Math.random() * 2, ease: [0.22, 1, 0.36, 1], delay: 1 + Math.random() }}
            />
          )
        })}
      </svg>

      <motion.div
        className="font-serif text-center max-w-[18ch] mx-auto"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.3, fontWeight: 700, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        이상은 <em className="italic text-accent font-normal">현실의 토대 위에서만</em> 가능하다.
      </motion.div>
    </div>
  )
}
