import type { Slide10Id } from './slides10week'

export interface Bullet { strong: string; text: string }
export interface CardItem { num?: string; title: string; body: string }

export type Slide10Content =
  | { id: 'cover'; kicker: string; titleLine1: string; titleLine2: string; lead: string; pills: readonly string[] }
  | { id: 'contents'; kicker: string; title: string; cards: readonly CardItem[] }
  | { id: 'problem'; kicker: string; titleLine1: string; titleLine2: string; intro: string; bullets: readonly Bullet[]; question: string; answer: string }
  | { id: 'premise'; kicker: string; title: string; lead: string; cards: readonly CardItem[]; conclusion: string }
  | { id: 'roadmap'; kicker: string; title: string; lead: string; phases: readonly { num: string; title: string; time: string; sub: string }[]; chain: string }
  | { id: 'phase1'; kicker: string; title: string; lead: string; actions: readonly Bullet[]; outcome: { title: string; metrics: readonly { value: string; label: string }[] } }
  | { id: 'phase2'; kicker: string; title: string; groups: readonly { kicker: string; title: string; members: readonly string[]; role: string }[]; private: { title: string; body: string } }
  | { id: 'phase3'; kicker: string; title: string; ladder: readonly { stage: string; name: string; desc: string; force: '약함' | '중간' | '강함' }[]; obligations: readonly string[] }
  | { id: 'phase4'; kicker: string; title: string; columns: readonly { kicker: string; title: string; tone: 'neutral' | 'positive' | 'negative'; items: readonly string[] }[]; closing: string }
  | { id: 'phase5'; kicker: string; title: string; lead: string; quadrants: readonly { num: string; title: string; body: string }[] }
  | { id: 'risks'; kicker: string; title: string; rows: readonly { weak: string; counter: string }[] }
  | { id: 'conclusion'; kicker: string; bigLine1: string; bigLine2: string; body: string; tagline: string }
  | { id: 'qna'; kicker: string; title: string; questions: readonly string[]; thanks: string }

export const CONTENT_10W: Record<Slide10Id, Slide10Content> = {
  cover: {
    id: 'cover',
    kicker: 'POLICY STRATEGY · LIBERALISM PERSPECTIVE',
    titleLine1: '달 생태계의 비가역적 파괴 방지',
    titleLine2: '지속가능한 우주활동의 의무화',
    lead: '강대국이 주도하는 자원 경쟁 속에서, 한 중견국이 어떻게 달을 글로벌 공유재로 지키는 국제 규범을 만들 수 있는가. 자유주의 국제관계 이론으로 본 5단계 전략.',
    pills: ['자유주의', '제도주의', '중견국 외교', 'Norm Entrepreneurship'],
  },
  contents: {
    id: 'contents',
    kicker: '목차',
    title: '발표 흐름',
    cards: [
      { num: 'I',   title: '문제 제기',     body: '달 비가역성 임계점 · 강대국 자원 경쟁' },
      { num: 'II',  title: '자유주의 전제',  body: '글로벌 공유재 · 비제로섬 · 제도 · 다층 행위자' },
      { num: 'III', title: '5단계 전략',     body: '의제선점 → 연합 → 의무화 → 검증 → 모범' },
      { num: 'IV',  title: '약점과 대비',    body: '강대국 비준 거부 · 무임승차 · 집행력' },
      { num: 'V',   title: '결론',         body: '강제할 힘은 없지만, 의제를 만들 수 있다' },
    ],
  },
  problem: {
    id: 'problem',
    kicker: '문제 제기 · 비가역성 임계점',
    titleLine1: '왜 지금,',
    titleLine2: '달인가',
    intro: 'Artemis · CLPS · 중국 ILRS 등 2030년대 달 활동이 폭증한다. 그러나 달 활동을 환경적으로 규율할 국제 의무는 사실상 부재하다.',
    bullets: [
      { strong: '비가역적 손실', text: '영구음영지역(PSR)의 휘발성 물질은 한 번 휘발되면 복구가 불가능하다.' },
      { strong: '규제 사각지대',  text: '달 먼지·잔해 오염은 지구 환경법의 외부에 놓여 있다.' },
      { strong: '협정의 공백',    text: '1979 달 협정은 미·중·러·일 모두 비준 거부 — 사문화 상태.' },
      { strong: '민간 행위자',    text: 'SpaceX · ispace 등 사기업의 행동을 규율할 국제 의무가 없다.' },
    ],
    question: '강대국이 주도하는 경쟁 속에서, 한 중견국이 무엇을 할 수 있는가?',
    answer: '답은 "제도, 규범, 인센티브"다.',
  },
  premise: {
    id: 'premise',
    kicker: '분석 틀 · 자유주의',
    title: '자유주의의 4가지 핵심 전제',
    lead: '현실주의(힘)와 구성주의(정체성)와 달리, 자유주의는 "제도와 협력"을 통해 무정부 상태에서도 변화가 가능하다고 본다.',
    cards: [
      { num: 'i',   title: '글로벌 공유재',    body: '1967 우주조약 제2조 "전유 금지" 원칙을 환경 차원으로 확장한다. 달은 누구의 것도 아니다.' },
      { num: 'ii',  title: '비제로섬 게임',    body: '비가역적 파괴는 모두의 손해, 보존은 모두의 이익. 협력은 이론적으로 합리적 선택이다.' },
      { num: 'iii', title: '제도·규범·인센티브', body: '강제력보다 "순응이 더 유리한 구조"가 지속가능하다. 행위자의 계산을 바꾸는 것이 핵심.' },
      { num: 'iv',  title: '다층적 행위자',    body: '국가뿐 아니라 민간 우주기업 · 과학자 · NGO를 정책 네트워크에 함께 포함한다.' },
    ],
    conclusion: '이 네 전제 위에서, 우리는 "강제할 힘 없는 국가"의 행동을 합리화한다.',
  },
  roadmap: {
    id: 'roadmap',
    kicker: '전략 개요',
    title: '5단계 전략 로드맵',
    lead: '한 번의 강한 조약이 아니다. 누적된 규범이 의무가 되는 긴 호흡의 점진적 법제화 — 이것이 자유주의 전략의 본질이다.',
    phases: [
      { num: '01', title: '의제 선점',     time: '1–2년차', sub: '프레이밍 · 과학외교' },
      { num: '02', title: '연합 구축',     time: '2–4년차', sub: 'Friends of the Moon' },
      { num: '03', title: '단계적 의무화', time: '5–10년차', sub: '선언 → 가이드 → 조약' },
      { num: '04', title: '검증·인센티브', time: '병행',    sub: '모니터링 + 보상구조' },
      { num: '05', title: '자국의 모범',   time: '전 단계', sub: 'Lead by example' },
    ],
    chain: '규범  →  연합  →  제도  →  검증·집행  →  신뢰자본',
  },
  phase1: {
    id: 'phase1',
    kicker: 'Phase 01  ·  1–2 Years',
    title: '의제 선점과 프레이밍',
    lead: '"달 환경 보호"를 국제 의제로 등록한다. 노르웨이의 환경외교, 코스타리카의 비무장 외교 같은 틈새 리더십(niche diplomacy) 모델을 차용한다.',
    actions: [
      { strong: 'UN COPUOS 의제 상정', text: '외기권평화이용위원회에 단독·공동 제안서 제출' },
      { strong: 'Lunar EIA 개념 제안', text: '지구 환경법의 환경영향평가를 달 활동에 외삽' },
      { strong: '과학 외교',           text: '자국 우주청·대학이 "비가역성 임계점" 보고서 발간' },
      { strong: '틈새 리더십',          text: '강대국과 정면 충돌 회피 · 도덕적 권위로 우회' },
    ],
    outcome: {
      title: '예상 성과',
      metrics: [
        { value: '3+', label: '국제 회의 발제' },
        { value: '1',  label: '정책 보고서 발간' },
        { value: '5+', label: '공조국 확보' },
      ],
    },
  },
  phase2: {
    id: 'phase2',
    kicker: 'Phase 02  ·  2–4 Years',
    title: '연합 구축 — Friends of the Moon',
    groups: [
      { kicker: 'Group 01', title: '과학역량 중견국', members: ['캐나다', '호주', '한국', 'UAE', '룩셈부르크'], role: '공동 R&D · 데이터 공유' },
      { kicker: 'Group 02', title: '환경규범 중시국', members: ['EU', '북유럽', '뉴질랜드'],                role: '환경 프레임 강화' },
      { kicker: 'Group 03', title: '글로벌 사우스',   members: ['아프리카연합', 'ASEAN', '중남미'],         role: '공정한 접근 프레임' },
    ],
    private: {
      title: '민간 동맹',
      body: 'SpaceX · Blue Origin · ispace 등과 자발적 행동강령(Voluntary Code) 협상 → 후일 의무화의 디딤돌이 된다.',
    },
  },
  phase3: {
    id: 'phase3',
    kicker: 'Phase 03  ·  5–10 Years',
    title: '단계적 의무화',
    ladder: [
      { stage: 'Stage 1', name: 'UN 결의안',      desc: '정치적 선언',         force: '약함' },
      { stage: 'Stage 2', name: 'COPUOS 가이드라인', desc: '모범 관행',           force: '중간' },
      { stage: 'Stage 3', name: '복수국 협정',     desc: 'Artemis Accords형',  force: '중간' },
      { stage: 'Stage 4', name: '다자조약',        desc: '의무·검증·분쟁해결',     force: '강함' },
    ],
    obligations: [
      '발사 전 환경영향평가(Lunar EIA) 의무',
      'PSR · 문화유산 등 보호구역 지정',
      '오염자 부담 원칙(Polluter Pays)',
      '활동 보고 · 데이터 공개 의무',
    ],
  },
  phase4: {
    id: 'phase4',
    kicker: 'Phase 04  ·  Verification & Incentives',
    title: '검증과 인센티브 메커니즘',
    columns: [
      { kicker: 'Verification', title: '검증',    tone: 'neutral',
        items: ['국제 달 모니터링 컨소시엄', '공동 위성·궤도선 운영', '독립 과학기구의 정기 보고', '민간 사업자 의무 보고'] },
      { kicker: 'Carrot',       title: '긍정 인센티브', tone: 'positive',
        items: ['발사 협력 우선권', '과학 데이터 우선 접근', '보험·금융 우대', '국제 평판 자산'] },
      { kicker: 'Stick',        title: '부정 인센티브', tone: 'negative',
        items: ['발사장 사용 제한', '우주보험 거부', '국제 평판 비용', '분쟁해결기구 제재'] },
    ],
    closing: '강제하지 않는다. 다만, 순응이 더 유리한 구조를 설계할 뿐이다.',
  },
  phase5: {
    id: 'phase5',
    kicker: 'Phase 05  ·  Credibility',
    title: '자국의 모범 행동 — Lead by Example',
    lead: '신뢰자본 없이는 어떤 규범도 정당성을 얻지 못한다. 자국이 먼저 모범을 보이는 것이 자유주의 전략의 토대다.',
    quadrants: [
      { num: '01', title: '국내 의무화',  body: '자국 모든 달 미션에 자발적 환경영향평가를 적용한다.' },
      { num: '02', title: '민간 규제',    body: '국내법으로 자국 우주기업에 동일한 환경 의무를 부과한다.' },
      { num: '03', title: 'R&D 투자',    body: '저오염 추진체 · 잔해 회수 기술에 대한 공공투자를 확대한다.' },
      { num: '04', title: '투명성 선도',  body: '국제 모니터링 데이터를 자국이 가장 먼저 공개한다.' },
    ],
  },
  risks: {
    id: 'risks',
    kicker: '리스크 검증',
    title: '약점과 대비책',
    rows: [
      { weak: '강대국이 비준 거부',         counter: '복수국 협정으로 우회 · 시장·민간 압력 활용' },
      { weak: '무임승차 문제',              counter: '인센티브 비대칭 설계로 가입을 유리하게' },
      { weak: '집행력 부재',                counter: '분쟁해결기구 + 국제 평판 메커니즘' },
      { weak: '환경 프레임이 약소국엔 사치', counter: '"공정한 자원 접근" 프레임과 결합' },
      { weak: '규범 형성에 시간 소요',       counter: '자국 모범행동으로 신뢰 자본을 선축적' },
    ],
  },
  conclusion: {
    id: 'conclusion',
    kicker: 'Conclusion',
    bigLine1: '강제할 힘은 없지만,',
    bigLine2: '의제를 만들 수 있다.',
    body: '중견국의 자기인식에서 출발해, 규범 → 연합 → 제도 → 의무화의 긴 호흡으로 가되, 자국이 먼저 모범을 보여 신뢰자본을 쌓는다.',
    tagline: '— 이것이 자유주의 전략의 본질이다 —',
  },
  qna: {
    id: 'qna',
    kicker: 'Q & A',
    title: '토론 포인트',
    questions: [
      '강대국(미·중)이 끝내 거부하면, 부분 조약은 의미가 있는가?',
      '민간 우주기업 규제는 어느 국가의 관할권으로 해야 하는가?',
      '달 "보호구역"의 경계는 누가, 어떤 기준으로 정하는가?',
      '환경 vs. 자원개발의 충돌을 어떻게 조정할 것인가?',
      '자유주의 전략은 현실주의·구성주의보다 어떤 비교 우위가 있는가?',
    ],
    thanks: '달은 누구의 것도 아닌, 모두가 지킬 것 — 감사합니다.',
  },
}
