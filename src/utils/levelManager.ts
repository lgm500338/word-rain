import { LevelConfig, Language, FallingWord, SentenceChain, SentenceSlot } from '../types/game';
import { KOREAN_STANDALONE_WORDS, KOREAN_SENTENCE_TEMPLATES, KoreanWordEntry } from '../data/koreanData';
import { ENGLISH_STANDALONE_WORDS, ENGLISH_SENTENCE_TEMPLATES, EnglishWordEntry } from '../data/englishData';
import { getThemeForLevel } from '../data/themes';

/**
 * Calculates level configuration for Infinite Levels (Lv. 1 ~ ∞)
 */
export function getLevelConfig(level: number): LevelConfig {
  const safeLevel = Math.max(1, level);

  // Tier Titles for Infinite Progression
  let tierTitleKo = '루키 타자';
  let tierTitleEn = 'Rookie Typist';
  if (safeLevel >= 1000) {
    tierTitleKo = '신화의 전설 ∞';
    tierTitleEn = 'Mythic Legend ∞';
  } else if (safeLevel >= 300) {
    tierTitleKo = '그랜드 챔피언';
    tierTitleEn = 'Grand Champion';
  } else if (safeLevel >= 100) {
    tierTitleKo = '대문호 마스터';
    tierTitleEn = 'Literary Master';
  } else if (safeLevel >= 35) {
    tierTitleKo = '소설 타이피스트';
    tierTitleEn = 'Novelist';
  } else if (safeLevel >= 5) {
    tierTitleKo = '일상 문장가';
    tierTitleEn = 'Daily Writer';
  }

  // 레벨당 떨어지는 단어 개수 (정확히 이 개수만 떨어지고, 다 처리되면 레벨 종료)
  //  1~5: 5개 / 6~10: 6개 / 11~30: 7개 / 31~70: 8개 / 71~100: 9개
  //  101~200: 10개 / 201~400: 11개 / 401~700: 12개 / 701~1000: 13개 / 1001~: 14개
  const WORD_COUNT_STEPS: [number, number][] = [
    [5, 5], [10, 6], [30, 7], [70, 8], [100, 9],
    [200, 10], [400, 11], [700, 12], [1000, 13],
  ];
  const wordsRequired = WORD_COUNT_STEPS.find(([maxLv]) => safeLevel <= maxLv)?.[1] ?? 14;

  // Comfortable Speed Scaling:
  // User requested: High levels have novel-length sentences, so no need to make speed excessively fast!
  // Capped at a very comfortable, readable speed (0.13 -> max 0.34)
  const speedProgress = Math.min(1, (safeLevel - 1) / 80);
  const baseSpeed = 0.13 + speedProgress * 0.21;

  // Drop Interval: comfortable pacing (2900ms down to 1750ms minimum)
  const dropIntervalMs = Math.max(1750, Math.floor(2900 - speedProgress * 1150));

  // Sentence generation probability:
  // Level 1~4: 0 (pure single words warmup)
  // Level 5~14: 0.55 (words + daily phrases like "나는 배가 고파", "완전 가을이야")
  // Level 15~34: 0.65 (compound sentences)
  // Level 35~∞: 0.78 (novel-level literary long sentences + words)
  let sentenceProbability = 0;
  if (safeLevel >= 5 && safeLevel <= 14) {
    sentenceProbability = 0.55;
  } else if (safeLevel >= 15 && safeLevel <= 34) {
    sentenceProbability = 0.65;
  } else if (safeLevel >= 35) {
    sentenceProbability = 0.78;
  }

  // WPM Target for display (comfortable realistic range 20 ~ 75 WPM)
  const wpmTarget = Math.min(85, Math.round(20 + Math.sqrt(safeLevel) * 4.5));

  const theme = getThemeForLevel(safeLevel);

  return {
    level: safeLevel,
    tierTitleKo,
    tierTitleEn,
    wordsRequired,
    dropIntervalMs,
    baseSpeed,
    sentenceProbability,
    wpmTarget,
    themeId: theme.id,
  };
}

const PALETTE = [
  '#38bdf8', // sky
  '#f43f5e', // rose
  '#34d399', // emerald
  '#fbbf24', // amber
  '#a855f7', // purple
  '#2dd4bf', // teal
  '#fb923c', // orange
];

/**
 * Spawns a new falling word or a piece of a sentence chain
 */
export function spawnNextWord(
  level: number,
  language: Language,
  activeSentences: SentenceChain[],
  existingWords: FallingWord[],
  recentWords: string[] = [],
  recentTemplateIds: string[] = []
): { newWord: FallingWord; newSentence?: SentenceChain } {
  const config = getLevelConfig(level);
  const wordId = 'word_' + Math.random().toString(36).substring(2, 9);
  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];

  // 겹치지 않게: 아직 위쪽에 있는 카드들과 가장 멀리 떨어진 가로 위치를 고름
  const upperXPositions = existingWords.filter(w => w.y < 55).map(w => w.x);
  let chosenX = 15 + Math.random() * 70;
  let bestGap = -1;
  for (let attempt = 0; attempt < 16; attempt++) {
    const candidateX = 15 + Math.random() * 70;
    const gap = upperXPositions.length
      ? Math.min(...upperXPositions.map(x => Math.abs(x - candidateX)))
      : 100;
    if (gap > bestGap) {
      bestGap = gap;
      chosenX = candidateX;
    }
    if (gap >= 35) break;
  }

  const shouldSpawnSentence = Math.random() < config.sentenceProbability;

  if (language === 'ko') {
    const availableSentence = activeSentences.find(s => !s.isCompleted && s.slots.some(slot => !slot.isFilled));

    // Also make sure we don't spawn a duplicate slot that's already falling on screen
    if (shouldSpawnSentence && availableSentence) {
      const fallingSlotIndices = existingWords
        .filter(w => w.sentenceId === availableSentence.id)
        .map(w => w.sentenceSlotIndex);

      const unfilledSlots = availableSentence.slots
        .map((slot, index) => ({ slot, index }))
        .filter(item => !item.slot.isFilled && !fallingSlotIndices.includes(item.index));

      if (unfilledSlots.length > 0) {
        const targetSlotItem = unfilledSlots[0];
        const slot = targetSlotItem.slot;

        return {
          newWord: {
            id: wordId,
            prompt: slot.prompt,
            canonicalExample: slot.canonical,
            acceptedExamples: slot.accepted || [slot.canonical],
            role: slot.role,
            sentenceId: availableSentence.id,
            sentenceSlotIndex: targetSlotItem.index,
            sentenceSlotLabel: slot.label,
            x: chosenX,
            y: -5,
            speed: config.baseSpeed * (0.92 + Math.random() * 0.16),
            points: 1,
            bonus: 0,
            color,
          }
        };
      }
    }

    // Start a brand new sentence if none is currently active
    if (shouldSpawnSentence && activeSentences.filter(s => !s.isCompleted).length < 1) {
      const eligibleTemplates = KOREAN_SENTENCE_TEMPLATES.filter(t => t.tier <= level);
      if (eligibleTemplates.length > 0) {
        const pool = level >= 35
          ? eligibleTemplates.filter(t => t.category === 'novel' || t.category === 'compound')
          : eligibleTemplates;
        
        // Filter out recently used sentence templates to prevent "나는" or same sentence repeating!
        const freshTemplates = pool.filter(t => !recentTemplateIds.includes(t.id));
        const finalTemplatePool = freshTemplates.length > 0 ? freshTemplates : pool;
        const chosenTemplate = finalTemplatePool[Math.floor(Math.random() * finalTemplatePool.length)];
        const sentenceId = 'sent_' + Math.random().toString(36).substring(2, 9);

        const slots: SentenceSlot[] = chosenTemplate.slots.map(s => {
          // Avoid options that were recently used
          const freshOptions = s.options.filter(
            opt => !recentWords.includes(opt.canonical) && !recentWords.includes(opt.chosung)
          );
          const optPool = freshOptions.length > 0 ? freshOptions : s.options;
          const opt = optPool[Math.floor(Math.random() * optPool.length)];
          return {
            role: s.role,
            label: s.label,
            prompt: opt.chosung,
            canonical: opt.canonical,
            accepted: opt.accepted,
            isFilled: false,
          };
        });

        const newSentence: SentenceChain = {
          id: sentenceId,
          title: slots.map(s => s.canonical).join(' '),
          category: chosenTemplate.category,
          templateId: chosenTemplate.id,
          language: 'ko',
          slots,
          rewardPoints: slots.length, // +1P per slot! e.g. 5 slots = +5P, 10 slots = +10P
          isCompleted: false,
        };

        const firstSlot = slots[0];
        return {
          newSentence,
          newWord: {
            id: wordId,
            prompt: firstSlot.prompt,
            canonicalExample: firstSlot.canonical,
            acceptedExamples: firstSlot.accepted || [firstSlot.canonical],
            role: firstSlot.role,
            sentenceId,
            sentenceSlotIndex: 0,
            sentenceSlotLabel: firstSlot.label,
            x: chosenX,
            y: -5,
            speed: config.baseSpeed * (0.92 + Math.random() * 0.16),
            points: 1,
            bonus: 0,
            color,
          }
        };
      }
    }

    // Default: Spawn standalone word with STRICT ANTI-REPETITION FILTER
    const existingPrompts = existingWords.map(w => w.prompt);
    const eligibleWords = KOREAN_STANDALONE_WORDS.filter(w => {
      if (level <= 8) return w.tier === 1;
      if (level <= 25) return w.tier <= 2;
      return true;
    });

    // 1st priority: words NOT in recentWords history and not already falling on screen
    const freshWords = eligibleWords.filter(
      w => !recentWords.includes(w.canonical) && !recentWords.includes(w.chosung) && !existingPrompts.includes(w.chosung)
    );

    // 2nd priority: words not falling on screen, sorted by LRU (least recently used)
    const nonScreenWords = eligibleWords.filter(w => !existingPrompts.includes(w.chosung));

    let chosen: KoreanWordEntry;
    if (freshWords.length > 0) {
      chosen = freshWords[Math.floor(Math.random() * freshWords.length)];
    } else if (nonScreenWords.length > 0) {
      // Pick the word furthest back in recent history so it doesn't repeat from recent levels
      const sortedByLRU = [...nonScreenWords].sort((a, b) => {
        const idxA = recentWords.indexOf(a.canonical);
        const idxB = recentWords.indexOf(b.canonical);
        return (idxB === -1 ? 9999 : idxB) - (idxA === -1 ? 9999 : idxA);
      });
      chosen = sortedByLRU[0];
    } else {
      chosen = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];
    }

    return {
      newWord: {
        id: wordId,
        prompt: chosen.chosung,
        canonicalExample: chosen.canonical,
        acceptedExamples: chosen.accepted,
        role: chosen.role,
        x: chosenX,
        y: -5,
        speed: config.baseSpeed * (0.9 + Math.random() * 0.2),
        points: 1, // +1P per word
        bonus: 0,
        color,
      }
    };
  } else {
    // English mode
    const availableSentence = activeSentences.find(s => !s.isCompleted && s.slots.some(slot => !slot.isFilled));

    if (shouldSpawnSentence && availableSentence) {
      const fallingSlotIndices = existingWords
        .filter(w => w.sentenceId === availableSentence.id)
        .map(w => w.sentenceSlotIndex);

      const unfilledSlots = availableSentence.slots
        .map((slot, index) => ({ slot, index }))
        .filter(item => !item.slot.isFilled && !fallingSlotIndices.includes(item.index));

      if (unfilledSlots.length > 0) {
        const target = unfilledSlots[0];
        return {
          newWord: {
            id: wordId,
            prompt: target.slot.prompt,
            canonicalExample: target.slot.canonical,
            acceptedExamples: target.slot.accepted || [target.slot.canonical],
            role: target.slot.role,
            sentenceId: availableSentence.id,
            sentenceSlotIndex: target.index,
            sentenceSlotLabel: target.slot.label,
            x: chosenX,
            y: -5,
            speed: config.baseSpeed * (0.92 + Math.random() * 0.16),
            points: 1,
            bonus: 0,
            color,
          }
        };
      }
    }

    if (shouldSpawnSentence && activeSentences.filter(s => !s.isCompleted).length < 1) {
      const eligibleTemplates = ENGLISH_SENTENCE_TEMPLATES.filter(t => t.tier <= level);
      if (eligibleTemplates.length > 0) {
        // Filter out recently used English templates to prevent "I" repeating!
        const freshTemplates = eligibleTemplates.filter(t => !recentTemplateIds.includes(t.id));
        const finalTemplatePool = freshTemplates.length > 0 ? freshTemplates : eligibleTemplates;
        const chosenTemplate = finalTemplatePool[Math.floor(Math.random() * finalTemplatePool.length)];
        const sentenceId = 'sent_' + Math.random().toString(36).substring(2, 9);

        const slots: SentenceSlot[] = chosenTemplate.slots.map(s => {
          const freshOptions = s.options.filter(
            opt => !recentWords.includes(opt.canonical) && !recentWords.includes(opt.pattern)
          );
          const optPool = freshOptions.length > 0 ? freshOptions : s.options;
          const opt = optPool[Math.floor(Math.random() * optPool.length)];
          return {
            role: s.role,
            label: s.label,
            prompt: opt.pattern,
            canonical: opt.canonical,
            accepted: opt.accepted,
            isFilled: false,
          };
        });

        const newSentence: SentenceChain = {
          id: sentenceId,
          title: slots.map(s => s.canonical).join(' '),
          category: chosenTemplate.category,
          templateId: chosenTemplate.id,
          language: 'en',
          slots,
          rewardPoints: slots.length, // +1P per slot
          isCompleted: false,
        };

        const firstSlot = slots[0];
        return {
          newSentence,
          newWord: {
            id: wordId,
            prompt: firstSlot.prompt,
            canonicalExample: firstSlot.canonical,
            acceptedExamples: firstSlot.accepted || [firstSlot.canonical],
            role: firstSlot.role,
            sentenceId,
            sentenceSlotIndex: 0,
            sentenceSlotLabel: firstSlot.label,
            x: chosenX,
            y: -5,
            speed: config.baseSpeed * (0.92 + Math.random() * 0.16),
            points: 1,
            bonus: 0,
            color,
          }
        };
      }
    }

    const existingPrompts = existingWords.map(w => w.prompt);
    const eligibleWords = ENGLISH_STANDALONE_WORDS.filter(w => {
      if (level <= 8) return w.tier === 1;
      if (level <= 25) return w.tier <= 2;
      return true;
    });

    const freshWords = eligibleWords.filter(
      w => !recentWords.includes(w.canonical) && !recentWords.includes(w.pattern) && !existingPrompts.includes(w.pattern)
    );
    const nonScreenWords = eligibleWords.filter(w => !existingPrompts.includes(w.pattern));

    let chosen: EnglishWordEntry;
    if (freshWords.length > 0) {
      chosen = freshWords[Math.floor(Math.random() * freshWords.length)];
    } else if (nonScreenWords.length > 0) {
      const sortedByLRU = [...nonScreenWords].sort((a, b) => {
        const idxA = recentWords.indexOf(a.canonical);
        const idxB = recentWords.indexOf(b.canonical);
        return (idxB === -1 ? 9999 : idxB) - (idxA === -1 ? 9999 : idxA);
      });
      chosen = sortedByLRU[0];
    } else {
      chosen = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];
    }

    return {
      newWord: {
        id: wordId,
        prompt: chosen.pattern,
        canonicalExample: chosen.canonical,
        acceptedExamples: chosen.accepted,
        role: chosen.role,
        x: chosenX,
        y: -5,
        speed: config.baseSpeed * (0.9 + Math.random() * 0.2),
        points: 1, // +1P per word
        bonus: 0,
        color,
      }
    };
  }
}
