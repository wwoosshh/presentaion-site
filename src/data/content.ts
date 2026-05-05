import type { SlideId } from './slides'

export interface CoverContent {
  kicker: string
  titleLine1: string
  titleLine2: string
  lead: string
  pills: readonly string[]
  footerRight: string
}

export interface BulletItem { strong: string; text: string }
export interface CardItem { num?: string; title: string; body: string }
export interface QuoteContent { body: string; cite?: string; lang?: 'ko' | 'en' }
export interface BigStatItem { value: string; label: string }
export interface VersusSide { num: string; label: string; subtext: string; accent: 'orange' | 'dim' }

export type SlideContent =
  | ({ id: 'cover' } & CoverContent)
  | ({ id: 'contents'; kicker: string; title: string; cards: readonly CardItem[] })
  | ({ id: 'treaty'; kicker: string; titleLine1: string; titleLine2: string; intro: string; bullets: readonly BulletItem[]; quote: QuoteContent })
  | ({ id: 'twoCamps'; kicker: string; title: string; usCamp: { kicker: string; subtitle: string; stat: BigStatItem; members: string; principle: string }; chinaCamp: { kicker: string; subtitle: string; stat: BigStatItem; members: string; principle: string }; conclusion: string })
  | ({ id: 'theoryTree'; kicker: string; title: string; lead: string; levels: readonly { label: string; name: string; detail: string }[] })
  | ({ id: 'realism'; kicker: string; title: string; cards: readonly CardItem[]; conclusion: string })
  | ({ id: 'hegemony'; kicker: string; title: string; left: { headings: readonly string[]; bodies: readonly string[] }; right: { headings: readonly string[]; bodies: readonly string[]; quote: string } })
  | ({ id: 'astropolitik'; kicker: string; title: string; intro: string; quoteEn: QuoteContent; right: { headings: readonly string[]; bodies: readonly string[] } })
  | ({ id: 'coreClaim'; kicker: string; lines: readonly string[]; epilogue: string })
  | ({ id: 'arg1Anarchy'; kicker: string; title: string; left: readonly string[]; right: readonly string[] })
  | ({ id: 'arg2PublicGoods'; kicker: string; title: string; bigStat: BigStatItem; lead: string; principles: readonly { title: string; body: string }[]; closing: string })
  | ({ id: 'arg3Mirror'; kicker: string; title: string; lead: string; chinaRoadmap: readonly BulletItem[]; chinaInterpretation: string; bindingStrategy: string; quote: QuoteContent })
  | ({ id: 'arg4Legitimacy'; kicker: string; title: string; us: VersusSide; china: VersusSide; lead: string })
  | ({ id: 'nna1ChokePoints'; kicker: string; title: string; chokePoints: readonly BulletItem[]; usStrategy: readonly BulletItem[]; quote: QuoteContent; closing: string })
  | ({ id: 'nna2LegalHistory'; kicker: string; title: string; unclos: { kicker: string; title: string; body: string; tag: string }; moonAgreement: { kicker: string; title: string; body: string; tag: string }; bigStat: BigStatItem; closing: string })
  | ({ id: 'rebuttals'; kicker: string; title: string; items: readonly { question: string; answer: string }[] })
  | ({ id: 'koreaPath'; kicker: string; title: string; current: readonly BulletItem[]; prescription: string; closing: string })
  | ({ id: 'conclusion'; kicker: string; lead: string; closingQuote: string; tagline: string })
  | ({ id: 'references'; kicker: string; title: string; theory: readonly string[]; primarySources: readonly string[]; thanks: string; mark: string })

export const CONTENT: Record<SlideId, SlideContent> = {
  cover: {
    id: 'cover',
    kicker: '신우주경쟁 · 2026 · 1-1 삼위일체팀',
    titleLine1: '무정부 우주에서',
    titleLine2: '권력은 누구의 것인가',
    lead: '1967년 우주조약의 균열 위에 미국과 중국이 만든 두 진영. 현실주의 이론으로 본 아르테미스 협정과 다자주의 요구의 합리성 비교.',
    pills: ['현실주의 관점', '패권안정이론', '우주지정학(Astropolitik)', '선점원리'],
    footerRight: '15분 발표 · 2026.05',
  },
  contents: {
    id: 'contents',
    kicker: '목차',
    title: '발표 흐름',
    cards: [
      { num: 'I',   title: '문제제기',           body: '우주조약의 균열과 두 진영의 형성' },
      { num: 'II',  title: '3단계 이론 나무',     body: '현실주의 → 패권안정이론 → 우주지정학' },
      { num: 'III', title: '핵심 주장 + 4가지 근거', body: '왜 미국의 입장이 더 합리적인가' },
      { num: 'IV',  title: 'NNA 핵심연결망분석', body: '우주지정학×군사전략 / 자원경제학×국제법사' },
      { num: 'V',   title: '예상반론·재반박',     body: '이론적 일관성 검증' },
      { num: 'VI',  title: '한국의 시사점·결론',   body: '현실주의가 한국에게 주는 처방' },
    ],
  },
  treaty: {
    id: 'treaty',
    kicker: '문제제기 ① 우주조약의 균열',
    titleLine1: '60년 된 이상주의는',
    titleLine2: '왜 무력해졌는가',
    intro: '1967년 우주조약(OST)은 천체 영유권을 금지한 평화적 합의였다. 하지만 60년이 흐른 지금, 두 가지 결정적 한계가 드러났다.',
    bullets: [
      { strong: '민간 기업의 부재', text: 'SpaceX, Blue Origin은 1967년에 상상조차 할 수 없었다. 조약은 국가 간 행위만 규율한다.' },
      { strong: '자원 채굴 모호성', text: '"천체를 소유할 수 없다"(제2조)고 못박지만, 채굴한 얼음·광물 소유에 대해서는 침묵한다.' },
    ],
    quote: { body: '우주조약은 실질적 억제력이 아니라, 규범 전쟁의 명분으로 소비되고 있다.', cite: '— 에버렛 돌먼, 우주지정학(Astropolitik), 2002' },
  },
  twoCamps: {
    id: 'twoCamps',
    kicker: '문제제기 ② 두 진영의 형성',
    title: '균열 위에 그어진 전선',
    usCamp: {
      kicker: '미국 진영',
      subtitle: '아르테미스 협정',
      stat: { value: '66', label: '개국 서명 (2026.5.4 기준)' },
      members: '한국·일본·인도·UAE·EU 23개국·호주·캐나다·영국·브라질 ··· 자발적 다국적 코얼리션',
      principle: '"자원 채굴은 영유권 주장이 아니며 OST와 양립한다"',
    },
    chinaCamp: {
      kicker: '중·러 진영',
      subtitle: '국제달연구기지 (ILRS)',
      stat: { value: '17', label: '개국 + 50여 연구기관' },
      members: '파키스탄·베네수엘라·남아공·이집트·니카라과·벨라루스 ··· 비서구권 중심',
      principle: '"미국 해석은 사실상의 점유 — 다자간 새로운 합의 필요"',
    },
    conclusion: '그러나 양 진영 모두 달의 남극에서 자원 채굴을 노린다. 수사는 다르지만 행동은 같다.',
  },
  theoryTree: {
    id: 'theoryTree',
    kicker: '분석 틀',
    title: '3단계 이론 나무',
    lead: '세 층위가 일관되게 가리키는 결론은 하나 — "미국의 행동이 합리적이다."',
    levels: [
      { label: '거대이론 / Grand Theory',     name: '현실주의 (Realism)',          detail: '무정부 국제체제 · 자국이익 추구 · 권력 = 안보 · Morgenthau, Waltz, Mearsheimer' },
      { label: '중범위이론 / Mid-range Theory', name: '패권안정이론 + 공격적 현실주의',  detail: '압도적 패권국이 공공재 제공 → 질서 안정 · Kindleberger, Gilpin' },
      { label: '분석도구 / Analytical Tool',   name: '우주지정학 + 선점원리',        detail: 'Mahan의 해양력 + Mackinder의 심장지대 → 우주 적용 · Dolman' },
    ],
  },
  realism: {
    id: 'realism',
    kicker: '거대이론',
    title: '현실주의의 4가지 가정',
    cards: [
      { num: 'i',   title: '무정부 (Anarchy)',   body: '강제력을 가진 세계정부는 없다. 우주에서는 더더욱.' },
      { num: 'ii',  title: '합리적 자기이익',     body: '국가는 도덕이 아닌 생존을 일차 목표로 한다.' },
      { num: 'iii', title: '권력 = 안보',        body: '약한 국가는 결코 안전할 수 없다. 권력 격차가 곧 운명.' },
      { num: 'iv',  title: '실질 권력 우선',      body: '규범과 도덕은 권력 게임의 외피일 뿐.' },
    ],
    conclusion: '이 네 가지를 우주에 적용하면 — 우주는 지구보다 훨씬 더 무정부적이다. 어떤 강제 메커니즘도, 어떤 위반자 처벌도 작동하지 않는다.',
  },
  hegemony: {
    id: 'hegemony',
    kicker: '중범위이론',
    title: '패권안정이론',
    left: {
      headings: ['핵심 명제', '왜? — 공공재(Public Goods)'],
      bodies: [
        '찰스 킨들버거 · 로버트 길핀이 발전시킨 이론. "압도적 패권국이 존재할 때 국제 질서가 안정된다."',
        '패권국이 무역질서·통화안정·항행자유·분쟁조정을 제공한다. 비용을 부담하고, 다른 국가는 무임승차하더라도 시스템이 작동한다.',
      ],
    },
    right: {
      headings: ['역사적 검증'],
      bodies: [
        '패권 부재 = 혼란 — 1930년대 다극체제는 대공황과 군비경쟁으로 귀결.',
        "패권 시기 = 안정 — 19c Pax Britannica · 20c Pax Americana 모두 '명확한 1위'가 있었다.",
      ],
      quote: '다극화는 결코 평화를 보장하지 않는다.',
    },
  },
  astropolitik: {
    id: 'astropolitik',
    kicker: '분석도구',
    title: '돌먼의 우주지정학',
    intro: '에버렛 돌먼(미 공군대학 교수)은 2002년 저서 Astropolitik에서 마한의 해양력과 매킨더의 심장지대 이론을 우주에 적용했다.',
    quoteEn: {
      body: 'Who controls Low-Earth Orbit controls near-Earth space.\nWho controls near-Earth space dominates Terra.\nWho dominates Terra determines the destiny of humankind.',
      cite: '— Everett C. Dolman, 2002',
      lang: 'en',
    },
    right: {
      headings: ['달의 남극 = 21세기의 수에즈 운하', '돌먼의 처방'],
      bodies: [
        '영구음영지역(PSR)의 물 얼음 → 식수·산소·로켓 연료. 이걸 가진 자는 화성과 그 너머로 가는 보급기지를 가진 셈.',
        '"미국이 먼저 차지하고 평화를 유지하는 것이, 무정부적 경쟁보다 안전하다."',
      ],
    },
  },
  coreClaim: {
    id: 'coreClaim',
    kicker: '저희 팀의 핵심 주장',
    lines: [
      '무정부적 우주환경에서',
      '미국 주도의 아르테미스 협정은',
      '현실주의가 예측하는',
      '가장 합리적 행위이며,',
      '중국의 다자합의 요구는',
      '약자의 결박전략으로 해석된다.',
    ],
    epilogue: '지금부터 이 주장을 4가지 근거로 뒷받침한다.',
  },
  arg1Anarchy: {
    id: 'arg1Anarchy',
    kicker: '근거 ① / IV',
    title: '무정부와 선점원리',
    left: [
      '우주조약은 위반 시 강제할 수단이 없다. 국제사법재판소도, 안보리 제재도 우주에서는 실효성이 없다. 모든 국가가 사실상 동등한 선점권을 가진다.',
      '미국이 자제한다고 해서 중국·러시아가 자제할 보장이 있는가? — 없다. 이건 고전적 죄수의 딜레마다.',
    ],
    right: [
      '선제적으로 질서를 형성하는 것. 미국이 아르테미스로 7대 원칙을 만든 것은 무정부 상태에 첫 번째 규범을 박아넣는 행위다.',
      '늦은 자가 따라오게 만든다 — 이것이 현실주의의 표준 처방이다.',
    ],
  },
  arg2PublicGoods: {
    id: 'arg2PublicGoods',
    kicker: '근거 ② / IV',
    title: '패권안정과 공공재',
    bigStat: { value: '$447B', label: '2020년 글로벌 우주산업 · 그중 80%가 민간' },
    lead: '명확한 규칙 없이는 이 규모의 투자가 일어날 수 없다. 아르테미스 협정의 7대 원칙은 명백한 공공재다.',
    principles: [
      { title: '평화적 이용',   body: '군사적 목적 배제, 신뢰 기반 형성' },
      { title: '투명성',       body: '국가 우주정책 공개' },
      { title: '상호운용성',   body: '기술 표준 공유' },
      { title: '등록·구조',     body: '우주물체 등록, 비상구조 의무' },
      { title: '잔해 관리',     body: '케슬러 신드롬 방지' },
      { title: '유산 보존',     body: '역사적 착륙지점 보호' },
      { title: '자원 활용',     body: '책임 있는 이용 원칙 명시' },
    ],
    closing: '미국이 비용을 부담하고 65개국이 혜택을 본다. 약탈이 아니라 합리적 분업이다 — 19c 영국이 항행의 자유를 위해 해군을 유지한 것과 같은 구조.',
  },
  arg3Mirror: {
    id: 'arg3Mirror',
    kicker: '근거 ③ / IV · 핵심',
    title: '중국 행동의 자기모순',
    lead: '중국은 미국이 자원을 독점하려 한다고 비난한다. 그런데 ILRS는 정확히 같은 일을 한다.',
    chinaRoadmap: [
      { strong: '창어-7호 (2026)', text: '달 남극 물 얼음 탐사' },
      { strong: '창어-8호 (2028)', text: '자원 활용 실증' },
      { strong: '2035년',         text: 'ILRS 기본 모델 완공 — 달 남극에' },
    ],
    chinaInterpretation: '중국은 자국 천궁 우주정거장을 운영하면서 OST를 자국에 유리하게 해석한다. 즉, OST 재해석에 있어 미·중은 본질적으로 동일하다.',
    bindingStrategy: '미국 우위가 굳어지기 전에 협상력을 확보하려는 결박전략(binding strategy).',
    quote: { body: '만약 중국이 우위에 있었다면 같은 행동을 했을 것이다.\n도덕은 외피, 본질은 권력의 위치.' },
  },
  arg4Legitimacy: {
    id: 'arg4Legitimacy',
    kicker: '근거 ④ / IV',
    title: '정당성의 척도',
    us:    { num: '66', label: 'Artemis Accords', subtext: '韓·日·印·UAE·EU 23·豪·加·英·伯', accent: 'orange' },
    china: { num: '17', label: 'ILRS',            subtext: '巴·委·南·埃·尼·白',            accent: 'dim' },
    lead: '거의 4배 차이. 이들은 강요가 아닌 자발적 가입이며, 자발성은 곧 호혜적 이익을 인정한다는 뜻이다. 다수국 동의로 형성되는 행위는 시간이 지나면 사실상의 관습국제법이 된다.',
  },
  nna1ChokePoints: {
    id: 'nna1ChokePoints',
    kicker: '핵심연결망분석 ① / II',
    title: '우주지정학 ↔ 군사전략학',
    chokePoints: [
      { strong: '달 남극 PSR',     text: '영구음영지역, 물 얼음 매장지. 21세기의 수에즈 운하.' },
      { strong: '시스루나 공간',   text: '지구-달 사이 공간. 중력적 안정점인 라그랑주 점.' },
      { strong: '저궤도(LEO)',    text: '모든 우주 진입의 관문.' },
    ],
    usStrategy: [
      { strong: '2019', text: '미 우주군(Space Force) 창설' },
      { strong: '2020', text: '아르테미스 협정 발표' },
    ],
    quote: { body: '통제점을 먼저 차지한 국가가 패권을 잡는다.', cite: '— A.T. Mahan, The Influence of Sea Power upon History (1890)' },
    closing: '미국은 지금 마한의 처방을 우주에서 실행하고 있다. 침략이 아니라 합리적 전략이다.',
  },
  nna2LegalHistory: {
    id: 'nna2LegalHistory',
    kicker: '핵심연결망분석 ② / II',
    title: '자원경제학 ↔ 국제법사',
    unclos: {
      kicker: '선례 ①',
      title: 'UNCLOS (1982)',
      body: '국가들이 먼저 200해리 EEZ를 일방 선언했고, 20년 뒤 법이 그것을 추인했다.',
      tag: '행위가 먼저, 법이 나중.',
    },
    moonAgreement: {
      kicker: '선례 ②',
      title: '1979 달협정',
      body: '"달은 인류 공동유산"이라며 자원 공동관리 주장. 결과: 미·중·러·일 모두 비준 거부 → 사문화.',
      tag: '이상주의는 강대국 동의 없이 작동하지 않는다.',
    },
    bigStat: { value: '70%', label: '지구 희토류 중국 의존도 → 우주자원 다변화 = 공급망 안보' },
    closing: '아르테미스 협정은 1979 달협정의 빈자리를 메우는 새로운 관습국제법의 시작이다.',
  },
  rebuttals: {
    id: 'rebuttals',
    kicker: '이론적 일관성 검증',
    title: '예상반론과 재반박',
    items: [
      { question: '"미국의 행동이 군비경쟁을 촉발한다."',
        answer: '군비경쟁은 오히려 패권 부재 상황에서 더 격렬하다. 1930년대 다극체제 vs 냉전 후반 단극체제 비교 — 명확한 1위가 있을 때가 더 안정적이었다.' },
      { question: '"다자주의가 더 도덕적이다."',
        answer: '현실주의는 도덕적 평가가 아닌 전략적 합리성을 분석한다. 다자주의는 종종 약자가 강자를 결박하기 위한 도구 — 도덕의 외피를 두른 권력 게임이다.' },
      { question: '"1979 달협정 위반이다."',
        answer: '미·중·러 모두 비준하지 않았다. 구속력이 없는 조약은 위반의 대상이 아니다.' },
    ],
  },
  koreaPath: {
    id: 'koreaPath',
    kicker: '한국의 선택',
    title: '한국에게 주는 시사점',
    current: [
      { strong: '2021', text: '아르테미스 협정 10번째 가입국' },
      { strong: '누리호', text: '자체 발사체 보유' },
      { strong: '다누리', text: '한국 첫 달 궤도선' },
      { strong: '2024', text: '우주항공청 출범' },
    ],
    prescription: '동맹 활용 + 자체 역량. 미국 주도 질서에 참여하되, 동시에 독자적 기술과 협상력을 키워야 한다.',
    closing: '중간에 끼는 것이 아니라, 양쪽 모두에게 필요한 국가가 되는 것 — 이것이 한국의 헤징(hedging) 전략.',
  },
  conclusion: {
    id: 'conclusion',
    kicker: '결론',
    lead: '1967년 우주조약은 이상주의의 산물이지만, 60년의 현실은 현실주의적 경쟁이 지배했다. 현실주의-패권안정이론-우주지정학의 3단계 분석은 일관되게 가리킨다 — 미국 주도 아르테미스 협정이 가장 합리적이다.',
    closingQuote: '이상은 현실의 토대 위에서만 가능하다.',
    tagline: '— END OF PRESENTATION —',
  },
  references: {
    id: 'references',
    kicker: 'References',
    title: '참고문헌 & Q&A',
    theory: [
      'Dolman, E. C. (2002). Astropolitik: Classical Geopolitics in the Space Age. Frank Cass.',
      'Mearsheimer, J. (2001). The Tragedy of Great Power Politics. Norton.',
      'Gilpin, R. (1981). War and Change in World Politics. Cambridge UP.',
      'Mahan, A. T. (1890). The Influence of Sea Power upon History.',
      'Waltz, K. (1979). Theory of International Politics.',
    ],
    primarySources: [
      'NASA · Artemis Accords 공식 문서 (2026.5)',
      'CNSA · ILRS 로드맵 (Wu Weiren, 2025)',
      'UN · Outer Space Treaty (1967)',
      'UN · Moon Agreement (1979)',
      'Secure World Foundation · Lunar Cooperation Tracking',
    ],
    thanks: '감사합니다. 질문 환영합니다.',
    mark: '1-1 SAMWIYILCHE · 2026.05',
  },
}
