import { motion } from 'framer-motion'

interface Item { question: string; answer: string }

export function RebuttalDialogue({ items }: { items: readonly Item[] }) {
  return (
    <div className="flex flex-col gap-6 mt-8 max-w-[1000px]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.div
            className="bg-bg-2 border-l-[3px] border-line-strong p-5 mb-3"
            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
          >
            <span className="block font-mono text-[0.7rem] uppercase text-text-faint mb-1" style={{ letterSpacing: '0.2em' }}>반론 {i + 1}</span>
            <p className="italic text-text-dim">{item.question}</p>
          </motion.div>
          <motion.div
            className="bg-bg-2 border-l-[3px] border-accent p-5"
            variants={{
              hidden: { opacity: 0, scale: 1.04 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <span className="block font-mono text-[0.7rem] uppercase text-accent mb-1" style={{ letterSpacing: '0.2em' }}>재반박</span>
            <p className="text-text leading-relaxed">{item.answer}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
