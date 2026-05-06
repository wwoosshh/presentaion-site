import type { SlideMetaBase } from './slides'

export type Slide10Id =
  | 'cover' | 'contents' | 'problem' | 'premise' | 'roadmap'
  | 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'phase5'
  | 'risks' | 'conclusion' | 'qna'

export interface SlideMeta10 extends SlideMetaBase {
  id: Slide10Id
}

export const SLIDES_10W: readonly SlideMeta10[] = [
  { id: 'cover',      displayNumber: null, marker: 'Cover',                       title: '달 생태계의 비가역적 파괴 방지', footerLeft: '10주차 발표 · 자유주의 전략', timeSeconds: 40,  chapter: 0 },
  { id: 'contents',   displayNumber: 1,    marker: 'Contents',                    title: '발표 흐름',                       footerLeft: 'Table of Contents',           timeSeconds: 20,  chapter: 0 },
  { id: 'problem',    displayNumber: 2,    marker: 'Problem · Lunar Tipping Point', title: '왜 지금, 달인가',              footerLeft: 'Irreversibility Threshold',   timeSeconds: 60,  chapter: 1 },
  { id: 'premise',    displayNumber: 3,    marker: 'Liberal Premise',             title: '자유주의의 4가지 핵심 전제',         footerLeft: 'Liberal Institutionalism',    timeSeconds: 50,  chapter: 2 },
  { id: 'roadmap',    displayNumber: 4,    marker: 'Strategic Roadmap',           title: '5단계 전략 로드맵',                footerLeft: '5-Phase Strategy',            timeSeconds: 45,  chapter: 2 },
  { id: 'phase1',     displayNumber: 5,    marker: 'Phase 01 · Agenda Setting',   title: '의제 선점과 프레이밍',             footerLeft: 'Norm Entrepreneurship',       timeSeconds: 60,  chapter: 3 },
  { id: 'phase2',     displayNumber: 6,    marker: 'Phase 02 · Coalition',        title: '연합 구축 — Friends of the Moon',  footerLeft: 'Coalition Building',          timeSeconds: 60,  chapter: 3 },
  { id: 'phase3',     displayNumber: 7,    marker: 'Phase 03 · Mandatory Ladder', title: '단계적 의무화',                   footerLeft: 'Progressive Legalization',    timeSeconds: 70,  chapter: 3 },
  { id: 'phase4',     displayNumber: 8,    marker: 'Phase 04 · Enforcement',      title: '검증과 인센티브 메커니즘',          footerLeft: 'Carrot and Stick',            timeSeconds: 60,  chapter: 3 },
  { id: 'phase5',     displayNumber: 9,    marker: 'Phase 05 · Credibility',      title: '자국의 모범 행동 — Lead by Example', footerLeft: 'Credibility Capital',         timeSeconds: 50,  chapter: 3 },
  { id: 'risks',      displayNumber: 10,   marker: 'Risks · Countermeasures',     title: '약점과 대비책',                   footerLeft: 'Strategic Vulnerabilities',   timeSeconds: 50,  chapter: 4 },
  { id: 'conclusion', displayNumber: 11,   marker: 'Conclusion',                  title: '결론',                          footerLeft: 'Liberal Strategy · Closing',  timeSeconds: 35,  chapter: 5 },
  { id: 'qna',        displayNumber: 12,   marker: 'Q & A',                       title: '토론 포인트',                    footerLeft: 'Discussion Points',           timeSeconds: null, chapter: 5 },
]

export const TOTAL_DISPLAY_PANELS_10W = 12
