import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useThemeStore } from '@/lib/themeStore'
import { useMouseIdle } from '@/hooks/useMouseIdle'
import { cn } from '@/lib/cn'

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme)
  const toggle = useThemeStore((s) => s.toggle)
  const idle = useMouseIdle()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isLight}
      aria-label={isLight ? '다크 테마로 전환' : '라이트 테마로 전환'}
      className={cn(
        'fixed top-4 right-4 z-30 w-9 h-9 rounded-full',
        'bg-bg-2 border border-line-strong text-text-dim',
        'flex items-center justify-center',
        'transition-all duration-200 ease-out',
        'hover:scale-105 hover:text-accent hover:border-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        idle && 'opacity-0 pointer-events-none'
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {isLight ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
