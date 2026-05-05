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
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-bold mb-3">{c.title}</h2>
      <BigStat value={c.bigStat.value} label={c.bigStat.label} className="my-2" />
      <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-text-dim leading-relaxed max-w-[60ch]">{c.lead}</p>
      <PublicGoodsHex principles={c.principles} className="!my-2" />
      <p className="text-[0.95rem] text-text-dim max-w-[80ch] mt-2">{c.closing}</p>
    </RevealOnView>
  )
}
