/**
 * Profanity, slang, and violent expression filter for Korean & English.
 * Blocks inappropriate inputs and triggers a FAILED warning toast.
 */

// 어디에 들어 있어도 막는 심한 욕설·폭력 표현
const KOREAN_BANNED_WORDS = [
  '시발', '씨발', '시팔', '씨팔', 'ㅅㅂ', 'ㅆㅂ',
  '병신', '븅신',
  '지랄',
  '개새끼', '개세끼', '씹새', 'ㄱㅅㄲ',
  '미친놈', '미친년',
  '좆', '존나', 'ㅈㄴ', '썅', '쌍놈', '쌍년', '창녀',
  '강간', '성폭행', '김치녀', '틀딱', '급식충',
];

// 단어 전체가 이것일 때만 막는 표현 (물걸레, 한남동, 쓰레기통 같은 말은 통과)
const KOREAN_BANNED_EXACT = [
  'ㅂㅅ', 'ㅈㄹ', 'ㅁㅊ', '새끼', '미친', '꺼져', '닥쳐', '뒤져', '디져', '죽어', '죽여',
  '엿먹어', '엿같네', '졸라', '걸레', '등신', '호구', '쓰레기', '찐따', '한남',
];

// 영어는 단어 단위로만 검사 (hello, diet, skill 같은 단어가 막히지 않게)
const ENGLISH_BANNED_WORDS = [
  'fuck', 'fucking', 'fucker', 'shit', 'bullshit', 'bitch', 'bastard',
  'asshole', 'dick', 'pussy', 'cunt', 'whore', 'slut', 'rape', 'retard',
];

/**
 * Checks if the submitted text contains any restricted, profane, or violent words.
 */
export function isRestrictedInput(input: string): boolean {
  const lower = input.trim().toLowerCase();
  const normalized = lower.replace(/\s+/g, '');
  if (!normalized) return false;

  if (KOREAN_BANNED_WORDS.some((bad) => normalized.includes(bad))) return true;
  if (KOREAN_BANNED_EXACT.includes(normalized)) return true;

  const englishWords = lower.split(/[^a-z]+/).filter(Boolean);
  if (englishWords.some((w) => ENGLISH_BANNED_WORDS.includes(w))) return true;

  return false;
}
