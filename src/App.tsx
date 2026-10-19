import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  FallingWord,
  SentenceChain,
  GameStats,
  Language,
  GameTheme,
  PlayerInventory,
  RewardStep,
} from './types/game';
import { getLevelConfig, spawnNextWord } from './utils/levelManager';
import { matchKoreanInput } from './utils/hangul';
import { matchEnglishInput } from './utils/english';
import { loadFullKoreanDictionary } from './utils/koreanDictionary';
import { isRestrictedInput } from './utils/profanityFilter';
import { getThemeForLevel, getAtmosphereForLevel, THEMES } from './data/themes';

// 배경 사진 후보 (중복 제거)
const ALL_BG_URLS: string[] = [...new Set(THEMES.map((t) => t.imageUrl))];
import { KOREAN_STANDALONE_WORDS } from './data/koreanData';
import { ENGLISH_STANDALONE_WORDS } from './data/englishData';
import { sounds } from './utils/sound';
import { Header } from './components/Header';
import { FallingWordsArea } from './components/FallingWordsArea';
import { TypingInput } from './components/TypingInput';
import { LevelSelectModal } from './components/LevelSelectModal';
import { LevelClearModal } from './components/LevelClearModal';
import { GameOverModal } from './components/GameOverModal';
import { PauseModal } from './components/PauseModal';
import { DailyChallengeModal, DAILY_CHALLENGE_STEPS } from './components/DailyChallengeModal';
import { DailyCheckInModal, DAILY_CHECKIN_STEPS } from './components/DailyCheckInModal';


// 카드 폭 추정(px): 초성 글자 수와 예시 단어 길이로 계산
function estimateCardWidth(word: FallingWord): number {
  const isWide = typeof window !== 'undefined' && window.innerWidth >= 640;
  const promptPx = word.prompt.length * (isWide ? 33 : 27);
  const examplePx = (word.canonicalExample.length + 3) * 12;
  return Math.max(promptPx, examplePx) + 36;
}

// 위쪽(아직 덜 내려온) 카드들과 겹치지 않는 가로 위치(%)를 찾음. 없으면 null
function findFreeX(newWord: FallingWord, existing: FallingWord[]): number | null {
  const areaWidth = Math.min(typeof window !== 'undefined' ? window.innerWidth : 1280, 1280);
  const toPct = (px: number) => (px / areaWidth) * 100;
  const newHalf = toPct(estimateCardWidth(newWord) / 2);
  const minX = Math.max(5, toPct(72), newHalf + toPct(6));
  const maxX = 100 - minX;
  const upper = existing.filter((w) => w.y < 40);

  let bestX: number | null = null;
  let bestMargin = -Infinity;
  const start = Math.random() * 3;
  for (let x = minX + start; x <= maxX; x += 3) {
    let margin = Infinity;
    for (const w of upper) {
      const need = newHalf + toPct(estimateCardWidth(w) / 2) + toPct(8);
      margin = Math.min(margin, Math.abs(x - w.x) - need);
    }
    if (margin === Infinity) margin = 1000 - Math.abs(x - newWord.x); // 비어 있으면 원래 고른 자리 근처
    if (margin > bestMargin) {
      bestMargin = margin;
      bestX = x;
    }
  }
  if (bestX === null || bestMargin < 0) return null;
  return bestX;
}

export default function App() {
  // Game Configuration & Language
  const [language, setLanguage] = useState<Language>('ko');
  // 저장된 진행 상황: 마지막으로 하던 레벨, 지금까지 도달한 가장 높은 레벨
  const readSavedNumber = (key: string): number => {
    try {
      const v = parseInt(localStorage.getItem(key) || '', 10);
      return Number.isFinite(v) && v >= 1 ? v : 1;
    } catch {
      return 1;
    }
  };
  const [maxUnlockedLevel, setMaxUnlockedLevel] = useState<number>(() =>
    Math.max(readSavedNumber('wordrain_max_level'), readSavedNumber('wordrain_current_level'))
  );
  const [level, setLevel] = useState<number>(() => readSavedNumber('wordrain_current_level'));
  useEffect(() => {
    try {
      localStorage.setItem('wordrain_current_level', String(level));
      localStorage.setItem('wordrain_max_level', String(maxUnlockedLevel));
    } catch {}
  }, [level, maxUnlockedLevel]);
  const [gameState, setGameState] = useState<'playing' | 'paused' | 'levelClear' | 'gameOver'>('playing');

  // Theme & Location Wallpaper (100 World Landmarks & Atmospheric Infinite Cycles)
  const [theme, setTheme] = useState<GameTheme>(() => getThemeForLevel(1));
  const [isAutoTheme, setIsAutoTheme] = useState<boolean>(true);
  const [destinationBanner, setDestinationBanner] = useState<{
    nameKo: string;
    location: string;
    level: number;
    phaseLabelKo?: string;
  } | null>(null);

  // Audio State
  const [isMuted, setIsMuted] = useState<boolean>(() => sounds.isMuted);

  // Modals
  const [isLevelModalOpen, setIsLevelModalOpen] = useState<boolean>(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [isDailyChallengeOpen, setIsDailyChallengeOpen] = useState<boolean>(false);
  const [isDailyCheckInOpen, setIsDailyCheckInOpen] = useState<boolean>(false);
  // 배경 사진: 주소가 깨진 사진은 기억해 두고, 다음 사진으로 자동 교체
  const [failedBgUrls, setFailedBgUrls] = useState<string[]>([]);
  const bgUrl = useMemo(() => {
    if (!failedBgUrls.includes(theme.imageUrl)) return theme.imageUrl;
    const start = Math.max(0, ALL_BG_URLS.indexOf(theme.imageUrl));
    for (let i = 1; i <= ALL_BG_URLS.length; i++) {
      const candidate = ALL_BG_URLS[(start + i) % ALL_BG_URLS.length];
      if (!failedBgUrls.includes(candidate)) return candidate;
    }
    return null;
  }, [theme.imageUrl, failedBgUrls]);
  const bgImageError = bgUrl === null;

  // Player Inventory (Coins + 3 Power-up Items)
  const [inventory, setInventory] = useState<PlayerInventory>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wordrain_inventory');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return {
      coins: 800,
      dragWand: 3,
      undoSlow: 2,
      shuffle: 2,
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('wordrain_inventory', JSON.stringify(inventory));
    }
  }, [inventory]);

  // Load full 350,000+ words Korean dictionary on mount in background
  useEffect(() => {
    loadFullKoreanDictionary();
  }, []);

  // Daily Challenge Progress (0 to 10 steps)
  const [completedDailySteps, setCompletedDailySteps] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wordrain_daily_steps');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('wordrain_daily_steps', String(completedDailySteps));
    }
  }, [completedDailySteps]);

  // Daily Check-in Attendance (0 to 10 days)
  const [checkedInDays, setCheckedInDays] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wordrain_checkin_days');
      return saved ? parseInt(saved, 10) : 1; // Starts with D1 checked like screenshot, D2 ready!
    }
    return 1;
  });

  const [canClaimCheckIn, setCanClaimCheckIn] = useState<boolean>(true);
  const [justEarnedRewardText, setJustEarnedRewardText] = useState<string>('');

  // High Score Persistence
  const [highScore, setHighScore] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wordrain_highscore');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  // Level configuration (Infinite Levels 1 ~ ∞)
  const levelConfig = getLevelConfig(level);

  // Game Stats
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    level,
    wordsCleared: 0,
    levelWordsCleared: 0,
    levelWordsTarget: levelConfig.wordsRequired,
    levelWordsMissed: 0,
    sentencesCompleted: 0,
    combo: 0,
    maxCombo: 0,
    wpm: 0,
    accuracy: 100,
    totalKeystrokes: 0,
    correctKeystrokes: 0,
    lives: 5,
    maxLives: 5,
  });

  // Falling Words & Sentence Chains
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);
  const [activeSentences, setActiveSentences] = useState<SentenceChain[]>([]);

  // Input value, hit notifications, and profanity FAILED alert
  const [currentInput, setCurrentInput] = useState<string>('');
  const [lastHitNotification, setLastHitNotification] = useState<{
    text: string;
    points: number;
    isCombo?: boolean;
  } | null>(null);
  const [failedAlert, setFailedAlert] = useState<string | null>(null);

  // WPM tracking refs and Anti-Repetition word & sentence template history
  const keystrokeCountRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const recentWordsRef = useRef<string[]>([]);
  const recentSentenceTemplateIdsRef = useRef<string[]>([]);
  // 폰 키보드가 올라왔는지 감지 → 압축 모드
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouch) return;
    let fullHeight = Math.max(vv.height, window.innerHeight);
    const update = () => {
      fullHeight = Math.max(fullHeight, vv.height);
      const open = vv.height < fullHeight * 0.78;
      setIsKeyboardOpen(open);
      setViewportHeight(open ? vv.height : null);
      if (open) window.scrollTo(0, 0);
    };
    const onRotate = () => { fullHeight = 0; setTimeout(update, 300); };
    vv.addEventListener('resize', update);
    window.addEventListener('orientationchange', onRotate);
    update();
    return () => {
      vv.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', onRotate);
    };
  }, []);
  const compact = isKeyboardOpen;

  // 이번 레벨에서 지금까지 떨어뜨린 단어 수 (레벨 목표 개수만큼만 떨어뜨림)
  const spawnedCountRef = useRef<number>(0);

  // Keep theme updated when auto mode is on & show destination intro
  useEffect(() => {
    if (isAutoTheme) {
      const nextTh = getThemeForLevel(level);
      const atmos = getAtmosphereForLevel(level);
      setTheme(nextTh);
      setDestinationBanner({
        nameKo: nextTh.nameKo,
        location: nextTh.location,
        level,
        phaseLabelKo: atmos.phaseLabelKo,
      });
      const timer = setTimeout(() => {
        setDestinationBanner(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [level, isAutoTheme]);

  // Update high score whenever current score exceeds it
  useEffect(() => {
    if (stats.score > highScore) {
      setHighScore(stats.score);
      if (typeof window !== 'undefined') {
        localStorage.setItem('wordrain_highscore', String(stats.score));
      }
    }
  }, [stats.score, highScore]);

  // Grant a RewardStep to player's inventory
  const grantRewardStep = useCallback((stepObj: RewardStep): string => {
    let rewardLabel = '';
    setInventory((prev) => {
      if (stepObj.type === 'wand') {
        rewardLabel = `드래그 패스권 x${stepObj.amount}`;
        return { ...prev, dragWand: prev.dragWand + stepObj.amount };
      }
      if (stepObj.type === 'undo') {
        rewardLabel = `되돌리기권 x${stepObj.amount}`;
        return { ...prev, undoSlow: prev.undoSlow + stepObj.amount };
      }
      if (stepObj.type === 'shuffle') {
        rewardLabel = `쉬운 셔플권 x${stepObj.amount}`;
        return { ...prev, shuffle: prev.shuffle + stepObj.amount };
      }
      if (stepObj.type === 'coins') {
        rewardLabel = `골드 코인 +${stepObj.amount}`;
        return { ...prev, coins: prev.coins + stepObj.amount };
      }
      if (stepObj.type === 'bundle' && stepObj.bundleAmounts) {
        const b = stepObj.bundleAmounts;
        rewardLabel = `3종 선물 세트 (되돌리기 x${b.undo} / 요술봉 x${b.wand} / 셔플 x${b.shuffle})`;
        return {
          ...prev,
          undoSlow: prev.undoSlow + b.undo,
          dragWand: prev.dragWand + b.wand,
          shuffle: prev.shuffle + b.shuffle,
        };
      }
      return prev;
    });
    return rewardLabel;
  }, []);

  // Reset or Start Level
  const initLevel = useCallback((targetLevel: number, preserveScore: boolean = false) => {
    const config = getLevelConfig(targetLevel);
    setLevel(targetLevel);
    setFallingWords([]);
    setActiveSentences([]);
    setCurrentInput('');
    setLastHitNotification(null);
    setFailedAlert(null);
    setGameState('playing');

    setStats((prev) => ({
      ...prev,
      level: targetLevel,
      levelWordsCleared: 0,
      levelWordsTarget: config.wordsRequired,
      levelWordsMissed: 0,
      lives: 5,
      score: preserveScore ? prev.score : 0,
      combo: preserveScore ? prev.combo : 0,
    }));

    keystrokeCountRef.current = 0;
    spawnedCountRef.current = 0;
    startTimeRef.current = Date.now();
  }, []);

  // Pause game if any secondary modal is opened
  const isAnyOverlayOpen =
    isLevelModalOpen || isThemeModalOpen || isDailyChallengeOpen || isDailyCheckInOpen;

  // Spawn word loop timer with ANTI-REPETITION check
  useEffect(() => {
    if (gameState !== 'playing' || isAnyOverlayOpen) return;

    const spawnTimer = setInterval(() => {
      setFallingWords((prevWords) => {
        const maxOnScreen = Math.min(6, 3 + Math.floor(level / 15));
        if (prevWords.length >= maxOnScreen) return prevWords;
        // 이번 레벨 단어를 다 떨어뜨렸으면 더 이상 만들지 않음
        if (spawnedCountRef.current >= levelConfig.wordsRequired) return prevWords;

        const { newWord, newSentence } = spawnNextWord(
          level,
          language,
          activeSentences,
          prevWords,
          recentWordsRef.current,
          recentSentenceTemplateIdsRef.current
        );

        // 자리 확인: 위쪽 카드들과 겹치지 않는 가로 위치를 찾고, 없으면 이번엔 쉬고 다음에 떨어뜨림
        const placedX = findFreeX(newWord, prevWords);
        if (placedX === null) return prevWords;
        newWord.x = placedX;

        // Record newly spawned word to avoid repeating in current and subsequent levels
        const newlyUsed = [
          newWord.canonicalExample,
          newWord.prompt,
          ...(newWord.acceptedExamples || []),
        ];
        recentWordsRef.current = [
          ...newlyUsed,
          ...recentWordsRef.current.filter((w) => !newlyUsed.includes(w)),
        ].slice(0, 160);

        if (newSentence) {
          if (newSentence.templateId) {
            recentSentenceTemplateIdsRef.current = [
              newSentence.templateId,
              ...recentSentenceTemplateIdsRef.current.filter((id) => id !== newSentence.templateId),
            ].slice(0, 15);
          }
          setActiveSentences((prevSents) => {
            const uncompleted = prevSents.filter((s) => !s.isCompleted);
            return [...uncompleted, newSentence];
          });
        }

        spawnedCountRef.current += 1;
        return [...prevWords, newWord];
      });
    }, levelConfig.dropIntervalMs);

    return () => clearInterval(spawnTimer);
  }, [gameState, isAnyOverlayOpen, level, language, activeSentences, levelConfig.dropIntervalMs, levelConfig.wordsRequired]);

  // Word falling animation loop
  useEffect(() => {
    if (gameState !== 'playing' || isAnyOverlayOpen) return;

    const interval = setInterval(() => {
      setFallingWords((prevWords) => {
        const nextWords: FallingWord[] = [];
        let lostLivesCount = 0;

        for (const word of prevWords) {
          const newY = word.y + word.speed;

          if (newY >= 95) {
            lostLivesCount++;
          } else {
            nextWords.push({ ...word, y: newY });
          }
        }

        if (lostLivesCount > 0) {
          sounds.playDamage();
          setStats((prev) => {
            const newLives = Math.max(0, prev.lives - lostLivesCount);
            if (newLives <= 0) {
              setGameState('gameOver');
            }
            return {
              ...prev,
              lives: newLives,
              levelWordsMissed: (prev.levelWordsMissed || 0) + lostLivesCount,
              combo: 0,
            };
          });
        }

        return nextWords;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [gameState, isAnyOverlayOpen]);

  // 레벨 종료: 정해진 개수를 다 떨어뜨렸고, 화면에 남은 단어가 없을 때
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (stats.lives <= 0) return;
    if (spawnedCountRef.current < stats.levelWordsTarget) return;
    if (fallingWords.length > 0) return;

    const timer = setTimeout(() => {
      sounds.playLevelUp();

      // Advance Daily Challenge step for the current 10-level chunk (1 to 10)
      const stepInChunk = ((level - 1) % 10) + 1;
      const stepObj = DAILY_CHALLENGE_STEPS.find((s) => s.step === stepInChunk);
      if (stepObj) {
        const label = grantRewardStep(stepObj);
        setJustEarnedRewardText(label);
      }

      setMaxUnlockedLevel((prev) => Math.max(prev, level + 1));
      setGameState('levelClear');
    }, 600);
    return () => clearTimeout(timer);
  }, [fallingWords.length, gameState, stats.lives, stats.levelWordsTarget, level, grantRewardStep]);

  // Live WPM calculation
  useEffect(() => {
    if (gameState !== 'playing' || isAnyOverlayOpen) return;

    const wpmTimer = setInterval(() => {
      const elapsedMinutes = (Date.now() - startTimeRef.current) / 60000;
      if (elapsedMinutes > 0.05) {
        const currentWpm = Math.round(keystrokeCountRef.current / 5 / elapsedMinutes);
        setStats((prev) => ({ ...prev, wpm: currentWpm }));
      }
    }, 1500);

    return () => clearInterval(wpmTimer);
  }, [gameState, isAnyOverlayOpen]);

  // Core function to process a cleared word (either typed or Drag-Passed)
  const processMatchedWord = useCallback(
    (
      matchedWord: FallingWord,
      displayWord: string,
      hitBonus: number,
      isDragPass: boolean = false,
      isCreative: boolean = false
    ) => {
      const currentCombo = stats.combo + 1;
      // 점수 규칙: 예시 단어를 그대로 치면 0점, 내가 생각한 다른 단어를 치면 1점 (그 외 보너스 없음)
      void hitBonus;
      const totalPoints = !isDragPass && isCreative ? 1 : 0;

      if (isDragPass) {
        sounds.playRewardClaim();
      } else {
        sounds.playWordHit(currentCombo);
      }

      // Remove the hit word from fallingWords
      setFallingWords((prev) => prev.filter((w) => w.id !== matchedWord.id));

      // Check if this word contributes to an active sentence slot
      let sentenceCompletedPoints = 0;
      let sentenceTitle = '';
      if (matchedWord.sentenceId) {
        setActiveSentences((prevSents) =>
          prevSents.map((sent) => {
            if (sent.id !== matchedWord.sentenceId) return sent;

            const updatedSlots = sent.slots.map((slot, idx) => {
              if (idx === matchedWord.sentenceSlotIndex && !slot.isFilled) {
                return { ...slot, isFilled: true, filledWord: displayWord };
              }
              return slot;
            });

            const isAllFilled = updatedSlots.every((s) => s.isFilled);
            if (isAllFilled && !sent.isCompleted) {
              // Sentence completed! Reward points = slot count (+N P)
              sentenceCompletedPoints = 0; // 문장 완성 보너스 점수 없음 (점수는 단어당 규칙만 적용)
              sentenceTitle = sent.title;
              sounds.playSentenceComplete();
              try {
                confetti({
                  particleCount: 60,
                  spread: 70,
                  origin: { y: 0.65 },
                });
              } catch {}
              return { ...sent, slots: updatedSlots, isCompleted: true };
            }

            return { ...sent, slots: updatedSlots };
          })
        );
      }

      // 알림 문구: 점수는 창의 단어(+1)일 때만 표시
      const sentenceNow = matchedWord.sentenceId
        ? activeSentences.find((sn) => sn.id === matchedWord.sentenceId)
        : undefined;
      const completesSentence = Boolean(
        sentenceNow &&
          sentenceNow.slots.every((sl, idx) => sl.isFilled || idx === matchedWord.sentenceSlotIndex)
      );
      let notifText = '';
      if (isDragPass) {
        notifText = `🪄 드래그 패스: ${displayWord}`;
      } else if (completesSentence && sentenceNow) {
        notifText = `🎉 문장 완성! ${sentenceNow.slots
          .map((sl, idx) => (idx === matchedWord.sentenceSlotIndex ? displayWord : sl.filledWord || sl.canonical))
          .join(' ')}`;
      } else if (isCreative) {
        notifText = `✨ 창의 단어: ${displayWord}`;
      } else {
        notifText = `${displayWord}`;
      }
      void sentenceTitle;

      setLastHitNotification({
        text: notifText,
        points: totalPoints,
        isCombo: currentCombo >= 5,
      });

      setTimeout(() => {
        setLastHitNotification(null);
      }, 1600);

      // Update statistics & check for Level Clear
      setStats((prev) => {
        const nextScore = prev.score + totalPoints + sentenceCompletedPoints;
        const nextCleared = prev.levelWordsCleared + 1;
        const nextSentences =
          sentenceCompletedPoints > 0 ? prev.sentencesCompleted + 1 : prev.sentencesCompleted;
        const nextMaxCombo = Math.max(prev.maxCombo, currentCombo);

        return {
          ...prev,
          score: nextScore,
          wordsCleared: prev.wordsCleared + 1,
          levelWordsCleared: nextCleared,
          sentencesCompleted: nextSentences,
          combo: currentCombo,
          maxCombo: nextMaxCombo,
          correctKeystrokes: prev.correctKeystrokes + displayWord.length,
        };
      });
    },
    [stats.combo, gameState, level, grantRewardStep, activeSentences]
  );

  // Input change handler
  const handleInputChange = (val: string) => {
    setCurrentInput(val);
    if (failedAlert) setFailedAlert(null);
    keystrokeCountRef.current += 1;
    setStats((prev) => ({
      ...prev,
      totalKeystrokes: prev.totalKeystrokes + 1,
    }));
  };

  // Submit word logic (Matching Engine + Profanity Filter)
  const handleSubmitInput = (submittedText: string) => {
    const rawInput = submittedText.trim();
    if (!rawInput || gameState !== 'playing') return;

    // 1. Check Profanity / Violent / Restricted Words FIRST!
    if (isRestrictedInput(rawInput)) {
      sounds.playErrorBuzz();
      setFailedAlert(
        language === 'ko'
          ? 'FAILED : 사용할 수 없는 단어입니다 (비속어·폭력적 표현 제한)'
          : 'FAILED : Restricted or inappropriate word cannot be used'
      );
      setCurrentInput('');
      setTimeout(() => {
        setFailedAlert(null);
      }, 2600);
      return;
    }

    // 2. Check match against all falling words (prioritizing lowest/most urgent word)
    const sortedWords = [...fallingWords].sort((a, b) => b.y - a.y);
    let matchedWord: FallingWord | null = null;
    let hitBonus = 0;
    let isCreative = false;
    let hasDictionaryError = false;
    let attemptedNonWord = '';

    for (const word of sortedWords) {
      if (language === 'ko') {
        const matchResult = matchKoreanInput(
          rawInput,
          word.prompt,
          word.acceptedExamples,
          word.canonicalExample
        );
        if (matchResult.matches) {
          matchedWord = word;
          hitBonus = matchResult.scoreBonus;
          isCreative = Boolean(matchResult.isCreativeBonus);
          break;
        } else if (matchResult.chosungMatched && !matchResult.isDictionaryWord) {
          hasDictionaryError = true;
          attemptedNonWord = rawInput;
        }
      } else {
        const matchResult = matchEnglishInput(rawInput, word.prompt, word.canonicalExample);
        if (matchResult.matches) {
          matchedWord = word;
          hitBonus = matchResult.scoreBonus;
          isCreative = Boolean(matchResult.isCreativeBonus);
          break;
        }
      }
    }

    if (matchedWord) {
      processMatchedWord(matchedWord, rawInput, hitBonus, false, isCreative);
      setCurrentInput('');
    } else {
      if (hasDictionaryError) {
        sounds.playErrorBuzz();
        setFailedAlert(`사전에 없는 단어입니다: '${attemptedNonWord}'`);
        setTimeout(() => {
          setFailedAlert(null);
        }, 2500);
      }
      setCurrentInput('');
    }
  };

  // Drag-Pass handler (when player drags a falling word downward or clicks Drag Wand)
  const handleDragPassWord = useCallback(
    (word: FallingWord) => {
      if (inventory.dragWand <= 0 || gameState !== 'playing') return;
      setInventory((prev) => ({ ...prev, dragWand: Math.max(0, prev.dragWand - 1) }));
      processMatchedWord(word, word.canonicalExample, 0, true, false);
    },
    [inventory.dragWand, gameState, processMatchedWord]
  );

  // Power-Up 1: Click Wand Button to auto-pass the most urgent (lowest) falling word
  const handleUseWandButton = () => {
    if (inventory.dragWand <= 0 || fallingWords.length === 0 || gameState !== 'playing') return;
    const lowestWord = [...fallingWords].sort((a, b) => b.y - a.y)[0];
    if (lowestWord) {
      handleDragPassWord(lowestWord);
    }
  };

  // Power-Up 2: Click Undo Button to push all falling words back up and slow them down
  const handleUseUndoButton = () => {
    if (inventory.undoSlow <= 0 || fallingWords.length === 0 || gameState !== 'playing') return;
    sounds.playRewardClaim();
    setInventory((prev) => ({ ...prev, undoSlow: Math.max(0, prev.undoSlow - 1) }));
    setFallingWords((prev) =>
      prev.map((w) => ({
        ...w,
        y: Math.max(2, w.y - 45),
        speed: w.speed * 0.65,
      }))
    );
    setLastHitNotification({
      text: '↩️ 되돌리기 발동! (단어 상승 & 감속)',
      points: 0,
    });
    setTimeout(() => setLastHitNotification(null), 1500);
  };

  // Power-Up 3: Click Shuffle Button to transform falling words into easy Tier-1 words
  const handleUseShuffleButton = () => {
    if (inventory.shuffle <= 0 || fallingWords.length === 0 || gameState !== 'playing') return;
    sounds.playRewardClaim();
    setInventory((prev) => ({ ...prev, shuffle: Math.max(0, prev.shuffle - 1) }));
    setFallingWords((prev) =>
      prev.map((w) => {
        if (w.sentenceId) return w; // Keep sentence structure intact
        if (language === 'ko') {
          const easyPool = KOREAN_STANDALONE_WORDS.filter((k) => k.tier === 1);
          const pick = easyPool[Math.floor(Math.random() * easyPool.length)];
          return {
            ...w,
            prompt: pick.chosung,
            canonicalExample: pick.canonical,
            acceptedExamples: pick.accepted,
          };
        } else {
          const easyPool = ENGLISH_STANDALONE_WORDS.filter((e) => e.tier === 1);
          const pick = easyPool[Math.floor(Math.random() * easyPool.length)];
          return {
            ...w,
            prompt: pick.pattern,
            canonicalExample: pick.canonical,
            acceptedExamples: pick.accepted,
          };
        }
      })
    );
    setLastHitNotification({
      text: '🔀 쉬운 단어로 셔플 완료!',
      points: 0,
    });
    setTimeout(() => setLastHitNotification(null), 1500);
  };

  // Claim Daily Check-In (Pink D1~D10 modal)
  const handleClaimCheckIn = () => {
    if (checkedInDays >= 10) return;
    const nextDay = checkedInDays + 1;
    const stepObj = DAILY_CHECKIN_STEPS.find((s) => s.step === nextDay);
    if (stepObj) {
      sounds.playRewardClaim();
      grantRewardStep(stepObj);
      setCheckedInDays(nextDay);
      if (typeof window !== 'undefined') {
        localStorage.setItem('wordrain_checkin_days', String(nextDay));
      }
      try {
        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }
  };

  // Add bonus coins when clicking `+` next to coin counter
  const handleAddBonusCoins = () => {
    sounds.playRewardClaim();
    setInventory((prev) => ({
      ...prev,
      coins: prev.coins + 200,
      dragWand: prev.dragWand + 1,
    }));
    setLastHitNotification({
      text: '🪙 보너스 +200 코인 & 드래그권 +1 충전!',
      points: 0,
    });
    setTimeout(() => setLastHitNotification(null), 1500);
  };

  // Keyboard shortcut for Pause (Escape)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (gameState === 'playing') {
          setGameState('paused');
        } else if (gameState === 'paused') {
          setGameState('playing');
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [gameState]);

  // Next level handler (Infinite Levels + 10-Level Chunk Transition)
  const handleNextLevel = () => {
    const nextLvl = level + 1;
    // When finishing level 10, 20, 30..., open the new chunk Daily Challenge popup!
    if (level % 10 === 0) {
      initLevel(nextLvl, true);
      setIsDailyChallengeOpen(true);
    } else {
      initLevel(nextLvl, true);
    }
  };

  // Sound toggle
  const handleToggleSound = () => {
    const newMuted = sounds.toggleMute();
    setIsMuted(newMuted);
  };

  // Language switch
  const handleToggleLanguage = () => {
    const nextLang = language === 'ko' ? 'en' : 'ko';
    setLanguage(nextLang);
    initLevel(level, true);
  };

  // Theme selection handler
  const handleSelectTheme = (selectedTheme: GameTheme, isAuto: boolean) => {
    setTheme(selectedTheme);
    setIsAutoTheme(isAuto);
  };

  // Level selector modal handler
  const handleSelectLevel = (newLevel: number) => {
    initLevel(newLevel, false);
  };

  // Determine whether the background should become crystal-clear and bright!
  const isLevelClearView = gameState === 'levelClear';
  const atmosphere = getAtmosphereForLevel(level);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col justify-between font-sans"
      style={viewportHeight ? { height: viewportHeight } : undefined}
    >
      
      {/* Background Image Preloader & Error Fallback detector */}
      <img
        key={bgUrl || 'none'}
        src={bgUrl || undefined}
        alt=""
        className="hidden"
        onError={() => bgUrl && setFailedBgUrls((prev) => (prev.includes(bgUrl) ? prev : [...prev, bgUrl]))}
      />

      {/* Scenic Nature & Landmark Background Wallpaper: 100% Clear & Natural Original Scenery */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${
          isLevelClearView
            ? 'scale-100 brightness-105'
            : 'scale-100 brightness-100'
        }`}
        style={{
          backgroundColor: '#0f172a',
          backgroundImage: bgImageError
            ? 'linear-gradient(135deg, #0b1329 0%, #1e293b 50%, #0f172a 100%)'
            : `url(${bgUrl})`,
        }}
      />

      {/* Subtle edge vignette (top for stats bar, bottom for input bar). ZERO center blur! */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isLevelClearView ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,23,42,0.38) 0%, rgba(15,23,42,0.1) 14%, transparent 24%, transparent 76%, rgba(15,23,42,0.2) 86%, rgba(15,23,42,0.45) 100%)',
        }}
      />

      {/* Top Header Bar */}
      <Header
        stats={stats}
        tierTitle={language === 'ko' ? levelConfig.tierTitleKo : levelConfig.tierTitleEn}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onToggleSound={handleToggleSound}
        isMuted={isMuted}
        isPlaying={gameState === 'playing'}
        onTogglePause={() => setGameState(gameState === 'playing' ? 'paused' : 'playing')}
        theme={theme}
        phaseLabel={atmosphere.phaseLabelKo}
        compact={compact}
        onOpenLevelModal={() => setIsLevelModalOpen(true)}
        onOpenDailyCheckIn={() => setIsDailyCheckInOpen(true)}
        onOpenDailyChallenge={() => setIsDailyChallengeOpen(true)}
        coins={inventory.coins}
        onAddCoinsClick={handleAddBonusCoins}
        canClaimCheckIn={canClaimCheckIn && checkedInDays < 10}
      />


      {/* Center Game Playfield: Falling Words Area */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto overflow-hidden">
        <FallingWordsArea
          words={fallingWords}
          currentInput={currentInput}
          dragWandCount={inventory.dragWand}
          onDragPassWord={handleDragPassWord}
        />
      </main>

      {/* Bottom Central Typing Bar */}
      <div className={`relative w-full z-40 ${compact ? 'pb-1 pt-0.5' : 'pb-3.5 pt-1'} flex flex-col items-center`}>

        {/* Central Ergonomic Typing Input Bar + 3 Power-Up Items */}
        <TypingInput
          value={currentInput}
          onChange={handleInputChange}
          onSubmit={handleSubmitInput}
          language={language}
          lastHitNotification={lastHitNotification}
          failedAlert={failedAlert}
          isPlaying={gameState === 'playing'}
          inventory={inventory}
          onUseWandClick={handleUseWandButton}
          onUseUndoClick={handleUseUndoButton}
          onUseShuffleClick={handleUseShuffleButton}
          compact={compact}
        />
      </div>

      {/* Modals */}
      <LevelSelectModal
        currentLevel={level}
        maxUnlockedLevel={maxUnlockedLevel}
        isOpen={isLevelModalOpen}
        onClose={() => setIsLevelModalOpen(false)}
        onSelectLevel={handleSelectLevel}
      />

      {/* Standalone Daily Challenge Modal (Blue) when opened from Header */}
      <DailyChallengeModal
        isOpen={isDailyChallengeOpen}
        onClose={() => setIsDailyChallengeOpen(false)}
        currentLevel={level}
        completedStepsInChunk={(level - 1) % 10}
        coins={inventory.coins}
        onAddCoinsClick={handleAddBonusCoins}
      />

      {/* Standalone Daily Check-In Modal (Pink D1~D10) */}
      <DailyCheckInModal
        isOpen={isDailyCheckInOpen}
        onClose={() => setIsDailyCheckInOpen(false)}
        checkedInDays={checkedInDays}
        canClaimToday={canClaimCheckIn}
        onClaimCheckIn={handleClaimCheckIn}
        coins={inventory.coins}
        onAddCoinsClick={handleAddBonusCoins}
      />

      {/* Level Clear Screen: Unblurs scenic background, fires fireworks + praise, and displays Daily Challenge reward progress! */}
      <LevelClearModal
        stats={stats}
        currentTheme={theme}
        nextTheme={getThemeForLevel(level + 1)}
        language={language}
        completedDailySteps={((level - 1) % 10) + 1}
        justEarnedRewardText={justEarnedRewardText}
        isOpen={gameState === 'levelClear'}
        onNextLevel={handleNextLevel}
      />

      <GameOverModal
        stats={stats}
        highScore={highScore}
        isOpen={gameState === 'gameOver'}
        onRetry={() => initLevel(level, false)}
        onRestartLv1={() => initLevel(1, false)}
      />

      <PauseModal
        isOpen={gameState === 'paused'}
        onResume={() => setGameState('playing')}
        onRestart={() => initLevel(level, false)}
        language={language}
      />

    </div>
  );
}
