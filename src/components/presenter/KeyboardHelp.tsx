import { usePresenterMode } from '@/hooks/usePresenterMode'
import { AnimatePresence, motion } from 'framer-motion'

const SHORTCUTS = [
  { key: '→ / ↓ / Space', desc: '다음' },
  { key: '← / ↑',          desc: '이전' },
  { key: 'Home / End',     desc: '처음 / 마지막' },
  { key: '0–6',            desc: '챕터 점프' },
  { key: 'F',              desc: '풀스크린' },
  { key: 'O / Esc',        desc: '오버뷰' },
  { key: 'P',              desc: '프리젠터 노트' },
  { key: 'T',              desc: '타이머' },
  { key: 'A',              desc: '앰비언트 토글' },
  { key: 'L',              desc: '라이트 / 다크 토글' },
  { key: '?',              desc: '이 도움말' },
]

export function KeyboardHelp() {
  const visible = usePresenterMode((s) => s.helpOpen)
  const close = usePresenterMode((s) => s.toggleHelp)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[110] bg-bg/90 backdrop-blur flex items-center justify-center p-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="bg-bg-2 border border-line p-10 max-w-md w-full"
            initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-mono text-xs uppercase text-accent mb-6" style={{ letterSpacing: '0.3em' }}>KEYBOARD SHORTCUTS</h3>
            <ul className="space-y-3">
              {SHORTCUTS.map((s, i) => (
                <li key={i} className="flex justify-between items-center gap-6 border-b border-line py-2">
                  <kbd className="font-mono text-xs text-amber">{s.key}</kbd>
                  <span className="text-text-dim text-sm">{s.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
