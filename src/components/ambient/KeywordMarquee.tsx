import { usePresenterMode } from '@/hooks/usePresenterMode'

const KEYWORDS = [
  'ARTEMIS', 'ASTROPOLITIK', '신우주경쟁', 'ILRS', 'DOLMAN', 'MAHAN',
  'PSR', '시스루나', 'OST 1967', '달협정', 'UNCLOS', 'HEGEMONIC STABILITY',
  'FIRST MOVER', '결박전략',
]

export function KeywordMarquee() {
  const ambient = usePresenterMode((s) => s.ambient)
  if (!ambient) return null

  const items = [...KEYWORDS, ...KEYWORDS]

  return (
    <div className="fixed top-0 left-0 right-0 h-8 overflow-hidden pointer-events-none z-[2] flex items-center">
      <div
        className="animate-marquee flex gap-12 whitespace-nowrap font-mono text-[0.65rem] text-text-faint/50"
        style={{ letterSpacing: '0.2em' }}
      >
        {items.map((k, i) => (
          <span key={i}>· {k}</span>
        ))}
      </div>
    </div>
  )
}
