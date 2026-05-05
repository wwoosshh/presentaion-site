import { motion } from 'framer-motion'

interface Props { lines: readonly string[] }

export function CoreClaimCinema({ lines }: Props) {
  return (
    <div className="relative w-full">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 60%)' }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="text-center max-w-[28ch] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.4, delayChildren: 0.2 } },
        }}
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="font-serif text-[clamp(1.6rem,3.5vw,2.6rem)] leading-[1.4]"
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {i === 1 && <span className="text-accent">{line}</span>}
            {i === 3 && <span className="text-text font-bold">{line}</span>}
            {i === 5 && (
              <span>약자의 <em className="italic">결박전략</em>으로 해석된다.</span>
            )}
            {![1, 3, 5].includes(i) && line}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
