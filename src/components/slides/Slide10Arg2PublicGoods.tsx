import { CONTENT } from '@/data/content'
import { Kicker } from '@/components/primitives/Kicker'
import { BigStat } from '@/components/primitives/BigStat'
import { RevealOnView } from '@/components/primitives/RevealOnView'
import { PublicGoodsHex } from '@/components/visuals/PublicGoodsHex'

export function Slide10Arg2PublicGoods() {
  const c = CONTENT.arg2PublicGoods
  if (c.id !== 'arg2PublicGoods') return null
  return (
    <RevealOnView className="relative z-10 w-full max-w-[1100px]">
      <Kicker>{c.kicker}</Kicker>
      <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-bold mb-6">{c.title}</h2>
      <BigStat value={c.bigStat.value} label={c.bigStat.label} />
      <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] text-text-dim leading-relaxed max-w-[60ch]">{c.lead}</p>
      <PublicGoodsHex principles={c.principles} />
      <p className="text-[1.05rem] text-text-dim max-w-[80ch] mt-4">{c.closing}</p>
    </RevealOnView>
  )
}
