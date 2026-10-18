/**
 * Profanity, slang, and violent expression filter for Korean & English.
 * Blocks inappropriate inputs and triggers a FAILED warning toast.
 */

const KOREAN_BANNED_WORDS = [
  '시발', '씨발', '시팔', '씨팔', 'ㅅㅂ', 'ㅆㅂ',
  '병신', '븅신', 'ㅂㅅ',
  '지랄', 'ㅈㄹ',
  '개새끼', '개세끼', '새끼', '씹새', 'ㄱㅅㄲ',
  '미친', '미친놈', '미친년', 'ㅁㅊ',
  '꺼져', '닥쳐', '뒤져', '디져', '죽어', '죽여', '살인', '자살', '폭력', '학살', '테러', '강간', '성폭행',
  '엿먹어', '엿같네', '좆', '존나', '졸라', 'ㅈㄴ', '썅', '쌍놈', '쌍년', '창녀', '걸레',
  '바보', '멍청이', '등신', '호구', '쓰레기', '찐따', '한남', '김치녀', '틀딱', '급식충'
];

const ENGLISH_BANNED_WORDS = [
  'fuck', 'fucking', 'fucker', 'shit', 'bullshit', 'bitch', 'bastard',
  'asshole', 'dick', 'pussy', 'cunt', 'whore', 'slut',
  'kill', 'murder', 'suicide', 'die', 'rape', 'terror', 'violence',
  'stupid', 'idiot', 'moron', 'retard', 'loser', 'hell', 'damn', 'crap'
];

/**
 * Checks if the submitted text contains any restricted, profane, or violent words.
 */
export function isRestrictedInput(input: string): boolean {
  const normalized = input.trim().toLowerCase().replace(/\s+/g, '');
  if (!normalized) return false;

  for (const badKo of KOREAN_BANNED_WORDS) {
    if (normalized === badKo || normalized.includes(badKo)) {
      return true;
    }
  }

  for (const badEn of ENGLISH_BANNED_WORDS) {
    if (normalized === badEn || normalized.includes(badEn)) {
      return true;
    }
  }

  return false;
}
