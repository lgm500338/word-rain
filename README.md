# 워드레인 (Word Rain)

하늘에서 떨어지는 초성·빈칸 단어를 타이핑해 맞추는 액션 타자 게임. 1~1,000단계 세계 명소 테마.

- 프레임워크: React 19 + Vite 8 + Tailwind CSS 4 (TypeScript)
- 외부 API / API 키: 없음 (환경변수 불필요)
- 데이터: `src/data/` (단어·테마), `public/korean_dict.txt` (사전)
- 배경 사진: Unsplash 이미지 주소 사용, 실패 시 그라데이션 배경

## Vercel 설정
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: 20.19 이상 (권장 22.x)

© 2026 아이디어믹스랩. All rights reserved.
