import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, BookOpen, Eye, EyeOff, Check, ChevronRight, ChevronLeft, ChevronDown, Sparkles } from 'lucide-react';
import { GameStats, GameTheme, Language, RewardStep } from '../types/game';
import { getAtmosphereForLevel } from '../data/themes';
import { DAILY_CHALLENGE_STEPS } from './DailyChallengeModal';
import { MagicWandIcon, UndoArrowIcon, ShuffleArrowsIcon, GoldCoinsIcon } from './RewardIcons';

const PRAISE_LIST = [
  { ko: '완벽해요!', en: 'PERFECT!' },
  { ko: '훌륭해요!', en: 'EXCELLENT!' },
  { ko: '끝내줘요!', en: 'AWESOME!' },
  { ko: '멋지군요!', en: 'GREAT!' },
  { ko: '이럴수가!', en: 'UNBELIEVABLE!' },
  { ko: '환상적이에요!', en: 'FANTASTIC!' },
];

interface LevelClearModalProps {
  stats: GameStats;
  currentTheme: GameTheme;
  nextTheme: GameTheme;
  language: Language;
  completedDailySteps: number; // 1 to 10
  justEarnedRewardText: string;
  isOpen: boolean;
  onNextLevel: () => void;
}

export const LevelClearModal: React.FC<LevelClearModalProps> = ({
  stats,
  currentTheme,
  nextTheme,
  language,
  completedDailySteps,
  justEarnedRewardText,
  isOpen,
  onNextLevel,
}) => {
  const [praise, setPraise] = useState(PRAISE_LIST[0]);
  const [admireViewOnly, setAdmireViewOnly] = useState(false);
  const nextAtmos = getAtmosphereForLevel(stats.level + 1);
  const totalCount = stats.levelWordsTarget;
  const missedCount = stats.levelWordsMissed || 0;
  const hitCount = Math.max(0, totalCount - missedCount);
  const isPerfect = missedCount === 0;

  useEffect(() => {
    if (isOpen) {
      setAdmireViewOnly(false);
      // Pick an energetic praise phrase
      const picked = PRAISE_LIST[(stats.level - 1) % PRAISE_LIST.length];
      setPraise(picked);

      // Launch multi-wave fireworks fanfare!
      const fireBurst = (originX: number, originY: number) => {
        try {
          confetti({
            particleCount: 65,
            spread: 80,
            startVelocity: 42,
            origin: { x: originX, y: originY },
            colors: ['#fde047', '#38bdf8', '#f43f5e', '#34d399', '#c084fc', '#fb923c'],
          });
        } catch {}
      };

      fireBurst(0.5, 0.45);
      const t1 = setTimeout(() => fireBurst(0.2, 0.5), 300);
      const t2 = setTimeout(() => fireBurst(0.8, 0.5), 600);
      const t3 = setTimeout(() => fireBurst(0.5, 0.35), 950);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isOpen, stats.level]);

  if (!isOpen) return null;

  const chunkIndex = Math.floor((Math.max(1, stats.level) - 1) / 10);
  const chunkStartLevel = chunkIndex * 10 + 1;
  const chunkEndLevel = chunkStartLevel + 9;

  const activeStep = Math.min(10, completedDailySteps + 1);
  const nextTargetLevel = chunkStartLevel + activeStep - 1;

  const renderStepIcon = (stepObj: RewardStep) => {
    if (stepObj.type === 'wand') return <MagicWandIcon className="w-8 h-8 sm:w-9 sm:h-9" />;
    if (stepObj.type === 'undo') return <UndoArrowIcon className="w-8 h-8 sm:w-9 sm:h-9" />;
    if (stepObj.type === 'shuffle') return <ShuffleArrowsIcon className="w-8 h-8 sm:w-9 sm:h-9" />;
    if (stepObj.type === 'coins') {
      return <GoldCoinsIcon className="w-8 h-8 sm:w-9 sm:h-9" single={stepObj.amount <= 50} />;
    }
    return null;
  };

  const renderCard = (stepNum: number) => {
    const stepObj = DAILY_CHALLENGE_STEPS.find((s) => s.step === stepNum)!;
    const isCompleted = stepNum <= completedDailySteps;
    const isJustCompleted = stepNum === completedDailySteps;
    const isCurrentNext = stepNum === activeStep;
    const stepLevelNumber = chunkStartLevel + stepNum - 1;

    return (
      <div
        key={stepNum}
        className={`relative w-[74px] h-[78px] sm:w-[84px] sm:h-[86px] rounded-2xl flex flex-col items-center justify-between py-1 transition-all select-none shadow-md ${
          isJustCompleted
            ? 'bg-[#fef9e7] border-[3.5px] border-[#84cc16] shadow-[0_0_15px_rgba(132,204,22,0.8)] scale-105 z-10'
            : isCompleted
            ? 'bg-[#fef9e7] border-[2.5px] border-white'
            : isCurrentNext
            ? 'bg-[#fffdf5] border-[3px] border-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.5)]'
            : 'bg-[#fdfaf2] border-[2.5px] border-white/90 opacity-95'
        }`}
      >
        <span
          className={`text-[8px] font-bold px-1 rounded-full leading-tight ${
            isCompleted ? 'bg-[#c5e1a5] text-[#33691e]' : 'bg-black/5 text-[#8d6e63]'
          }`}
        >
          Lv.{stepLevelNumber}
        </span>

        <div className="flex-1 flex flex-col items-center justify-center">
          {isCompleted ? (
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#7cb342] flex items-center justify-center shadow-inner animate-bounce">
                <Check className="w-4 h-4 text-white stroke-[3.5]" />
              </div>
              {isJustCompleted && (
                <span className="text-[8px] font-black text-[#558b2f] mt-0.5 leading-none">획득!</span>
              )}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center">{renderStepIcon(stepObj)}</div>
              <div className="font-extrabold text-[11px] sm:text-xs text-[#5d4037] leading-none mt-0.5">
                x{stepObj.amount}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const isStep10Completed = completedDailySteps >= 10;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-5 pointer-events-auto select-none overflow-y-auto">
      
      {/* Top Bar: Scenic Location Badge & Toggle View Button (No blur so scenic photo shines!) */}
      <div className="w-full max-w-4xl flex items-center justify-between gap-2 z-20">
        <div className="px-3.5 py-1.5 rounded-full bg-slate-950/65 border border-white/25 text-white text-xs font-bold flex items-center gap-2 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>선명해진 배경을 감상해 보세요</span>
        </div>

        <button
          onClick={() => setAdmireViewOnly(!admireViewOnly)}
          className="px-3.5 py-1.5 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-amber-400/50 text-amber-200 text-xs font-bold flex items-center gap-1.5 shadow-lg cursor-pointer transition-all"
        >
          {admireViewOnly ? (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>보상창 다시 보기</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              <span>선명한 풍경만 감상하기</span>
            </>
          )}
        </button>
      </div>

      {/* Center Content (Hidden when admiring pure background) */}
      {!admireViewOnly ? (
        <div className="my-auto flex flex-col items-center w-full max-w-[400px] z-20 py-2">
          
          {/* Fireworks Praise Banner (한국어 + 영어 팡파레 문구) */}
          <div className="text-center mb-3 animate-bounce">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-xs font-black tracking-widest uppercase shadow-lg mb-1">
              🎉 LEVEL {stats.level} CLEAR! 🎉
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] tracking-tight">
              {isPerfect
                ? (language === 'ko' ? `${praise.ko} (${praise.en})` : `${praise.en} (${praise.ko})`)
                : (language === 'ko' ? `${hitCount}개 맞혔어요!` : `${hitCount} words cleared!`)}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-1.5">
              <span className={`px-3 py-0.5 rounded-full font-black text-xs shadow ${isPerfect ? 'bg-cyan-400 text-slate-950' : 'bg-slate-950/80 border border-white/30 text-white'}`}>
                {language === 'ko' ? `${totalCount}개 중 ${hitCount}개` : `${hitCount} / ${totalCount}`}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-slate-950/80 border border-amber-400/50 text-amber-300 font-black text-xs shadow">
                누적 점수: {stats.score.toLocaleString()} P
              </span>
              {justEarnedRewardText && (
                <span className="px-3 py-0.5 rounded-full bg-emerald-500/95 text-slate-950 font-black text-xs shadow">
                  🎁 클리어 보상: {justEarnedRewardText}
                </span>
              )}
            </div>
          </div>

          {/* LEVEL 1 SPECIAL NOTICE: 국립국어원 표준국어대사전 안내 */}
          {stats.level === 1 && (
            <div className="w-full mb-3 p-3.5 rounded-2xl bg-slate-950/90 border-2 border-cyan-400/70 text-left shadow-2xl">
              <div className="flex items-center gap-2 text-cyan-300 font-black text-xs sm:text-sm mb-1">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>한국어 어휘 및 문장 판정 안내</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed">
                본 게임의 단어들은 <b className="text-amber-300">국립국어원 표준국어대사전</b>에 수록된 표준 어휘 및 건전한 일상 문맥을 기준으로 판정됩니다. 
                5레벨부터는 일상 문장, 고레벨에서는 소설 속 명문장이 등장하며, <b className="text-rose-300">비속어나 폭력적인 단어 입력 시 FAILED 처리</b>됩니다.
              </p>
            </div>
          )}

          {/* Blue Daily Challenge 10-Step Snake Card (일일 도전 과제) */}
          <div className="w-full bg-[#6497e8]/95 border-[5px] border-white rounded-[32px] px-4 pt-3.5 pb-4 shadow-2xl flex flex-col items-center">
            
            {/* 10-level chunk segment pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3969b8] text-white text-[11px] font-black tracking-wide mb-1 shadow-inner">
              <Sparkles className="w-3 h-3 text-[#fde047]" />
              <span>{chunkStartLevel} ~ {chunkEndLevel} 레벨 도전 과제</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              일일 도전 과제
            </h2>
            <p className="text-xs font-bold text-white/95 mt-0.5 mb-2.5 text-center">
              <span className="text-[#fde047] font-black text-sm">{nextTargetLevel}</span> 레벨을 클리어하여 다음 보상을 받으세요.
            </p>

            {/* ROW 1: 1 > 2 > 3 */}
            <div className="flex items-center justify-center w-full">
              {renderCard(1)}
              <div className="w-4 sm:w-5 h-5 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              {renderCard(2)}
              <div className="w-4 sm:w-5 h-5 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              {renderCard(3)}
            </div>

            {/* Down under 3 */}
            <div className="w-full flex justify-end pr-[34px] sm:pr-[38px]">
              <div className="w-5 h-4 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronDown className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
            </div>

            {/* ROW 2: 6 < 5 < 4 */}
            <div className="flex items-center justify-center w-full">
              {renderCard(6)}
              <div className="w-4 sm:w-5 h-5 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronLeft className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              {renderCard(5)}
              <div className="w-4 sm:w-5 h-5 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronLeft className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              {renderCard(4)}
            </div>

            {/* Down under 6 */}
            <div className="w-full flex justify-start pl-[34px] sm:pl-[38px]">
              <div className="w-5 h-4 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronDown className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
            </div>

            {/* ROW 3: 7 > 8 > 9 */}
            <div className="flex items-center justify-center w-full">
              {renderCard(7)}
              <div className="w-4 sm:w-5 h-5 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              {renderCard(8)}
              <div className="w-4 sm:w-5 h-5 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              {renderCard(9)}
            </div>

            {/* Down under 9 */}
            <div className="w-full flex justify-end pr-[34px] sm:pr-[38px]">
              <div className="w-5 h-4 bg-[#4b7fd1] flex items-center justify-center">
                <ChevronDown className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
            </div>

            {/* ROW 4: Step 10 Grand Bundle */}
            <div className="w-full max-w-[265px] sm:max-w-[295px] h-[76px] rounded-2xl bg-[#fdfaf2] border-[2.5px] border-white flex items-center justify-around px-3 shadow-md">
              {isStep10Completed ? (
                <div className="flex items-center gap-2 text-[#558b2f] font-black text-sm">
                  <div className="w-7 h-7 rounded-full bg-[#7cb342] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white stroke-[3.5]" />
                  </div>
                  <span>10단계 대보상 획득 완료!</span>
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <UndoArrowIcon className="w-8 h-8" />
                    <span className="text-xs font-extrabold text-[#5d4037]">x3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MagicWandIcon className="w-8 h-8" />
                    <span className="text-xs font-extrabold text-[#5d4037]">x3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShuffleArrowsIcon className="w-8 h-8" />
                    <span className="text-xs font-extrabold text-[#5d4037]">x3</span>
                  </div>
                </>
              )}
            </div>

            {/* Next Level CTA Button with Destination Preview */}
            <div className="w-full max-w-[265px] sm:max-w-[295px] flex flex-col gap-1.5 mt-3.5">
              <button
                onClick={onNextLevel}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#fde047] via-[#fbbf24] to-[#f59e0b] hover:from-[#fef08a] hover:to-[#fbbf24] text-slate-950 font-black text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
              >
                <span>LEVEL {stats.level + 1} 시작하기</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Floating button when admiring crystal-clear background */
        <div className="mt-auto mb-6 z-20 flex flex-col items-center gap-3">
          <div className="px-5 py-2 rounded-2xl bg-slate-950/75 border border-white/20 text-white text-center shadow-xl backdrop-blur-sm">
            <div className="text-lg font-black text-amber-300">{isPerfect ? `${praise.ko} (${praise.en})` : `${totalCount}개 중 ${hitCount}개 맞혔어요!`}</div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <button
              onClick={onNextLevel}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base shadow-2xl flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <span>LEVEL {stats.level + 1} 출발!</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="h-1" />
    </div>
  );
};
