export type SlideId =
  | 'cover' | 'contents' | 'treaty' | 'twoCamps' | 'theoryTree'
  | 'realism' | 'hegemony' | 'astropolitik' | 'coreClaim' | 'arg1Anarchy'
  | 'arg2PublicGoods' | 'arg3Mirror' | 'arg4Legitimacy' | 'nna1ChokePoints'
  | 'nna2LegalHistory' | 'rebuttals' | 'koreaPath' | 'conclusion' | 'references'

export interface SlideMetaBase {
  id: string
  displayNumber: number | null
  marker: string
  title: string
  footerLeft: string
  timeSeconds: number | null
  chapter: number
}

export interface SlideMeta extends SlideMetaBase {
  id: SlideId
}

export const SLIDES: readonly SlideMeta[] = [
  { id: 'cover',           displayNumber: null, marker: 'Cover',                     title: '무정부 우주에서 권력은 누구의 것인가', footerLeft: '1-1 삼위일체팀 · 신우주경쟁 발표', timeSeconds: 40,  chapter: 0 },
  { id: 'contents',        displayNumber: 1,    marker: 'Contents',                  title: '발표 흐름',                          footerLeft: 'Table of Contents',           timeSeconds: 20,  chapter: 0 },
  { id: 'treaty',          displayNumber: 2,    marker: 'Problem · Treaty Fracture', title: '60년 된 이상주의는 왜 무력해졌는가',     footerLeft: 'Outer Space Treaty 1967',     timeSeconds: 60,  chapter: 1 },
  { id: 'twoCamps',        displayNumber: 3,    marker: 'Two Camps',                 title: '균열 위에 그어진 전선',                 footerLeft: 'Artemis Accords vs ILRS',     timeSeconds: 60,  chapter: 1 },
  { id: 'theoryTree',      displayNumber: 4,    marker: 'Theory Tree',               title: '3단계 이론 나무',                     footerLeft: '3-Level Theory Framework',    timeSeconds: 30,  chapter: 2 },
  { id: 'realism',         displayNumber: 5,    marker: 'Grand Theory · Realism',    title: '현실주의의 4가지 가정',                footerLeft: 'Morgenthau · Waltz · Mearsheimer', timeSeconds: 60, chapter: 2 },
  { id: 'hegemony',        displayNumber: 6,    marker: 'Mid-range · Hegemonic Stability', title: '패권안정이론',                  footerLeft: 'Kindleberger · Gilpin',       timeSeconds: 45,  chapter: 2 },
  { id: 'astropolitik',    displayNumber: 7,    marker: 'Astropolitik',              title: '돌먼의 우주지정학',                   footerLeft: 'Dolman · Astropolitik (2002)', timeSeconds: 45, chapter: 2 },
  { id: 'coreClaim',       displayNumber: 8,    marker: 'Core Claim',                title: '핵심 주장',                          footerLeft: 'Core Thesis',                 timeSeconds: 30,  chapter: 3 },
  { id: 'arg1Anarchy',     displayNumber: 9,    marker: 'Argument 1 / 4',            title: '무정부와 선점원리',                   footerLeft: 'Anarchy + First-mover Advantage', timeSeconds: 50, chapter: 3 },
  { id: 'arg2PublicGoods', displayNumber: 10,   marker: 'Argument 2 / 4',            title: '패권안정과 공공재',                   footerLeft: 'Hegemonic Stability · Public Goods', timeSeconds: 60, chapter: 3 },
  { id: 'arg3Mirror',      displayNumber: 11,   marker: 'Argument 3 / 4 · KEY',      title: '중국 행동의 자기모순',                 footerLeft: "China's Strategic Inconsistency", timeSeconds: 70, chapter: 3 },
  { id: 'arg4Legitimacy',  displayNumber: 12,   marker: 'Argument 4 / 4',            title: '정당성의 척도',                      footerLeft: 'Coalition Legitimacy · 66:17', timeSeconds: 50, chapter: 3 },
  { id: 'nna1ChokePoints', displayNumber: 13,   marker: 'NNA 1 / 2',                 title: '우주지정학 ↔ 군사전략학',              footerLeft: 'Astropolitics × Military Strategy', timeSeconds: 75, chapter: 4 },
  { id: 'nna2LegalHistory',displayNumber: 14,   marker: 'NNA 2 / 2',                 title: '자원경제학 ↔ 국제법사',                footerLeft: 'Resource Economics × Legal History', timeSeconds: 75, chapter: 4 },
  { id: 'rebuttals',       displayNumber: 15,   marker: 'Anticipated Objections',    title: '예상반론과 재반박',                   footerLeft: 'Q&A Anticipation',            timeSeconds: 60,  chapter: 5 },
  { id: 'koreaPath',       displayNumber: 16,   marker: "Korea's Path",              title: '한국에게 주는 시사점',                 footerLeft: "Korea's Realist Choice",      timeSeconds: 40,  chapter: 6 },
  { id: 'conclusion',      displayNumber: 17,   marker: 'Conclusion',                title: '결론',                              footerLeft: '1-1 삼위일체팀 · 현실주의 관점',   timeSeconds: 45,  chapter: 6 },
  { id: 'references',      displayNumber: 18,   marker: 'References',                title: '참고문헌 & Q&A',                      footerLeft: 'References & Q&A',            timeSeconds: null, chapter: 6 },
]

export const TOTAL_DISPLAY_PANELS = 18
export const TOTAL_PANELS = SLIDES.length
