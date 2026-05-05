# 신우주경쟁 발표 슬라이드 웹앱

1-1 삼위일체팀 · 현실주의 관점 · 2026.05

19-패널 발표 슬라이드 웹앱. 항시 작동 앰비언트 레이어 + 패널별 커스텀 비주얼 + 발표자 도구.

## Run locally

```bash
npm install
npm run dev
```

http://localhost:5173 에서 확인.

## Build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm run test:run
```

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| ←/→/↑/↓/Space | 이전/다음 슬라이드 |
| 0–6 | 챕터 점프 |
| Home/End | 처음/마지막 |
| F | 풀스크린 |
| O / Esc | 오버뷰 모드 |
| P | 프리젠터 노트 |
| T | 타이머 |
| A | 앰비언트 모션 토글 |
| ? | 단축키 도움말 |

## Tech stack

Vite 8 · React 19 · TypeScript 6 · Tailwind CSS v4 · framer-motion 12 · zustand 5 · @react-three/fiber + drei

## Deployment

Vercel:
```bash
vercel --prod
```

또는 GitHub repo를 Vercel 대시보드에서 import.

## Spec & Plan

- Spec: `../docs/superpowers/specs/2026-05-05-presentation-site-design.md`
- Plan: `../docs/superpowers/plans/2026-05-05-presentation-site.md`
