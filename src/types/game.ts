export type Language = 'ko' | 'en';

export type WordRole = 'subject' | 'object' | 'predicate' | 'time' | 'adverb' | 'standalone';

export interface FallingWord {
  id: string;
  prompt: string;               // Displayed text (e.g. 'ㅅㄱ', 'ㅇㄹ', 'g_', 'h________')
  canonicalExample: string;     // One typical example (e.g. '사과', '여름', 'hospital')
  acceptedExamples?: string[];  // Sample of accepted words
  role: WordRole;
  sentenceId?: string;          // Links to a sentence chain if part of one
  sentenceSlotIndex?: number;   // 0-indexed position in sentence
  sentenceSlotLabel?: string;   // e.g. '주어', '목적어', '서술어'
  x: number;                    // 8% to 86%
  y: number;                    // 0% to 100%
  speed: number;                // % per tick
  points: number;
  bonus: number;
  color: string;
  isHit?: boolean;
}

export interface SentenceSlot {
  role: WordRole;
  label: string;
  prompt: string;               // Expected chosung or pattern
  canonical: string;
  accepted?: string[];
  filledWord?: string;          // Populated when player enters matching word
  isFilled: boolean;
}

export interface SentenceChain {
  id: string;
  title: string;
  category?: 'daily' | 'compound' | 'novel';
  templateId?: string;
  language: Language;
  slots: SentenceSlot[];
  rewardPoints: number;
  isCompleted: boolean;
  completedAt?: number;
}

export interface LevelConfig {
  level: number;
  tierTitleKo: string;
  tierTitleEn: string;
  wordsRequired: number;
  dropIntervalMs: number;
  baseSpeed: number;            // Speed multiplier (capped at comfortable reading speed)
  sentenceProbability: number;  // 0 to 0.85
  wpmTarget: number;            // Expected typing speed
  themeId: string;
}

export interface GameTheme {
  id: string;
  nameKo: string;
  nameEn: string;
  location: string;
  imageUrl: string;
  accentColor: string;
  ambientColor: string;
}

export interface PlayerInventory {
  coins: number;
  dragWand: number;   // 🪄 요술봉 (드래그 패스권)
  undoSlow: number;   // ↩️ 되돌리기 (단어 위로 올리기 & 감속권)
  shuffle: number;    // 🔀 셔플 (쉬운 단어로 변환권)
}

export type RewardType = 'wand' | 'undo' | 'shuffle' | 'coins' | 'bundle';

export interface RewardStep {
  step: number;       // 1 to 10
  label?: string;     // e.g. 'D1' ~ 'D10'
  type: RewardType;
  amount: number;
  bundleAmounts?: { undo: number; wand: number; shuffle: number };
}

export interface GameStats {
  score: number;
  level: number;
  wordsCleared: number;
  levelWordsCleared: number;
  levelWordsTarget: number;
  levelWordsMissed?: number; // 이번 레벨에서 놓친 단어 수
  sentencesCompleted: number;
  combo: number;
  maxCombo: number;
  wpm: number;
  accuracy: number;
  totalKeystrokes: number;
  correctKeystrokes: number;
  lives: number;
  maxLives: number;
}
