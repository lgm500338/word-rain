/**
 * 짧은 문장 (10~29레벨용): 두 조각, 각 조각은 두 글자 이하
 * 한 줄에 문장 하나, 조각은 띄어쓰기로 구분합니다.
 */
import { getChosung } from '../utils/hangul';
import type { KoreanSentenceTemplate } from './koreanData';

const RAW = `
봄이 왔다
비가 와
눈이 와
꽃이 핀다
별이 떴다
해가 졌다
달이 밝다
바람 분다
새가 운다
하늘 파래
배가 고파
밥 먹자
잘 자
또 봐
어서 와
얼른 자
같이 놀자
손을 잡자
문을 열어
책을 읽자
노래 불러
우유 마셔
사과 먹자
다시 하자
내일 보자
엄마 최고
아빠 힘내
친구 안녕
잘 했어
참 예뻐
아주 멋져
정말 좋아
너무 좋아
푹 쉬어
꼭 안아
많이 웃자
힘을 내
꿈을 꿔
물 줘
손 씻자
집에 가
불을 꺼
창문 닫아
신발 신어
이를 닦자
옷을 입자
물을 줘
공을 차
줄을 서
길을 걸어
`;

export const SHORT_SENTENCE_TEMPLATES: KoreanSentenceTemplate[] = RAW.trim()
  .split('\n')
  .map((line) => line.trim().split(/\s+/))
  .filter((parts) => parts.length >= 2)
  .map((parts, i) => ({
    id: `short_${i}`,
    tier: 10,
    category: 'daily' as const,
    slots: parts.map((piece, idx) => ({
      role: (idx === parts.length - 1 ? 'predicate' : 'subject') as 'predicate' | 'subject',
      label: idx === parts.length - 1 ? '서술어' : '앞말',
      options: [{ chosung: getChosung(piece), canonical: piece, accepted: [piece] }],
    })),
  }));
