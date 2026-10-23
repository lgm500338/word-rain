/**
 * Hangul 초성 (Initial Consonant) processing and strict dictionary validator
 */
import { isValidKoreanWord } from './koreanDictionary';

export const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
] as const;

export const COMMON_PARTICLES = [
  '을', '를', '이', '가', '은', '는', '에', '에서', '에게', '으로', '로',
  '와', '과', '도', '만', '까지', '부터', '보다', '처럼', '마저', '조차'
];

/**
 * Extracts initial consonants (초성) from a given Korean string.
 * Non-Hangul characters (digits, spaces, punctuation) are preserved as-is.
 */
export function getChosung(text: string): string {
  if (!text) return '';
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // Hangul syllables Unicode block: 0xAC00 (가) ~ 0xD7A3 (힣)
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const chosungIndex = Math.floor((code - 0xAC00) / 588);
      result += CHOSUNG_LIST[chosungIndex];
    } else {
      result += text[i];
    }
  }

  return result;
}

/**
 * Strips common Korean particles from the end of a word if present.
 * e.g., '여름을' -> '여름', '사과는' -> '사과', '바다에' -> '바다'
 */
export function stripParticle(word: string): string {
  for (const particle of COMMON_PARTICLES) {
    if (word.length > particle.length && word.endsWith(particle)) {
      return word.slice(0, -particle.length);
    }
  }
  return word;
}

export interface KoreanMatchResult {
  matches: boolean;
  scoreBonus: number;
  chosungMatched: boolean;
  isDictionaryWord: boolean;
  isCreativeBonus?: boolean;
}

/**
 * Determines whether user input matches the target prompt (chosung or pattern).
 * STRICT RULE:
 * Must match the chosung AND be an authentic Korean word in the dictionary!
 * Rejects nonsensical syllable combinations (e.g. '모구으', '호나이').
 */
export function matchKoreanInput(
  input: string,
  targetPrompt: string,
  customAccepted?: string[],
  canonicalExample?: string
): KoreanMatchResult {
  const cleanInput = input.trim().replace(/\s+/g, ' ');
  const cleanTarget = targetPrompt.trim();

  if (!cleanInput || !cleanTarget) {
    return { matches: false, scoreBonus: 0, chosungMatched: false, isDictionaryWord: false };
  }

  // 1. Special year/number match (e.g. prompt '2025ㄴ' or '####년' or 'ㄴ')
  if (cleanTarget.includes('0000') || cleanTarget.includes('####') || cleanTarget.endsWith('ㄴ') || cleanTarget.endsWith('년')) {
    if (/^\d{4}(년)?$/.test(cleanInput)) {
      return { matches: true, scoreBonus: 0, chosungMatched: true, isDictionaryWord: true, isCreativeBonus: false };
    }
  }

  // 2. Chosung extraction
  const inputChosung = getChosung(cleanInput).replace(/\s/g, ''); // 띄어쓰기는 초성 비교에서 빼기
  const strippedWord = stripParticle(cleanInput);
  const strippedInputChosung = getChosung(strippedWord).replace(/\s/g, '');

  const barePrompt = cleanTarget.replace(/[\[\]\(\)\s]/g, '');
  const strippedPrompt = stripParticle(barePrompt);

  const isExactChosungMatch =
    inputChosung === cleanTarget ||
    inputChosung === barePrompt ||
    strippedInputChosung === cleanTarget ||
    strippedInputChosung === strippedPrompt;

  const isDirectWordMatch =
    (canonicalExample && (cleanInput === canonicalExample || strippedWord === canonicalExample)) ||
    (customAccepted && (customAccepted.includes(cleanInput) || customAccepted.includes(strippedWord)));

  if (!isExactChosungMatch && !isDirectWordMatch) {
    return { matches: false, scoreBonus: 0, chosungMatched: false, isDictionaryWord: false };
  }

  // 3. STRICT DICTIONARY VALIDATION
  const isRealWord = isValidKoreanWord(cleanInput, customAccepted);

  if (!isRealWord && !isDirectWordMatch) {
    // Chosung matched, but word is NOT in the Korean dictionary!
    return {
      matches: false,
      scoreBonus: 0,
      chosungMatched: true,
      isDictionaryWord: false,
    };
  }

  // Valid Korean word! Check for Creative Bonus (+1P)
  // If player came up with a different valid dictionary word rather than just copying the hint example!
  const isCreative = Boolean(
    canonicalExample &&
    cleanInput !== canonicalExample &&
    strippedWord !== canonicalExample
  );

  return {
    matches: true,
    scoreBonus: 0, // Words strictly award 1P without point inflation
    chosungMatched: true,
    isDictionaryWord: true,
    isCreativeBonus: isCreative,
  };
}
