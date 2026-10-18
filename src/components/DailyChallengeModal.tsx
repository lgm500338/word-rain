import React from 'react';
import { X, Check, ChevronRight, ChevronLeft, ChevronDown, Plus, Sparkles } from 'lucide-react';
import { MagicWandIcon, UndoArrowIcon, ShuffleArrowsIcon, GoldCoinsIcon } from './RewardIcons';
import { RewardStep } from '../types/game';

export const DAILY_CHALLENGE_STEPS: RewardStep[] = [
  { step: 1, type: 'undo', amount: 1 },
  { step: 2, type: 'wand', amount: 1 },
  { step: 3, type: 'shuffle', amount: 1 },
  { step: 4, type: 'coins', amount: 50 },
  { step: 5, type: 'coins', amount: 100 },
  { step: 6, type: 'coins', amount: 150 },
  { step: 7, type: 'undo', amount: 2 },
  { step: 8, type: 'wand', amount: 2 },
  { step: 9, type: 'shuffle', amount: 2 },
  {
    step: 10,
    type: 'bundle',
    amount: 3,
    bundleAmounts: { undo: 3, wand: 3, shuffle: 3 },
  },
];

interface DailyChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
  completedStepsInChunk: number; // 0 to 10
  coins: number;
  onAddCoinsClick?: () => void;
  justClearedLevel?: boolean;
  onNextLevel?: () => void;
  isNewChunkNotice?: boolean;
}

export const DailyChallengeModal: React.FC<DailyChallengeModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  completedStepsInChunk,
  coins,
  onAddCoinsClick,
  justClearedLevel = false,
  onNextLevel,
  isNewChunkNotice = false,
}) => {
  if (!isOpen) return null;

  // Calculate 10-level chunk range: 1~10, 11~20, 21~30, etc.
  const chunkIndex = Math.floor((Math.max(1, currentLevel) - 1) / 10);
  const chunkStartLevel = chunkIndex * 10 + 1;
  const chunkEndLevel = chunkStartLevel + 9;

  // Next target step within chunk (1 to 10)
  const activeStep = Math.min(10, completedStepsInChunk + 1);
  const nextTargetLevel = chunkStartLevel + activeStep - 1;

  const renderStepIcon = (stepObj: RewardStep) => {
    if (stepObj.type === 'wand') return <MagicWandIcon className="w-10 h-10 sm:w-11 sm:h-11" />;
    if (stepObj.type === 'undo') return <UndoArrowIcon className="w-10 h-10 sm:w-11 sm:h-11" />;
    if (stepObj.type === 'shuffle') return <ShuffleArrowsIcon className="w-10 h-10 sm:w-11 sm:h-11" />;
    if (stepObj.type === 'coins') {
      return <GoldCoinsIcon className="w-10 h-10 sm:w-11 sm:h-11" single={stepObj.amount <= 50} />;
    }
    return null;
  };

  const renderCard = (stepNum: number) => {
    const stepObj = DAILY_CHALLENGE_STEPS.find((s) => s.step === stepNum)!;
    const isCompleted = stepNum <= completedStepsInChunk;
    const isCurrentNext = stepNum === activeStep;
    const stepLevelNumber = chunkStartLevel + stepNum - 1;

    return (
      <div
        key={stepNum}
        className={`relative w-[86px] h-[94px] sm:w-[96px] sm:h-[104px] rounded-2xl flex flex-col items-center justify-between py-1.5 transition-all select-none shadow-md ${
          isCompleted
            ? 'bg-[#fef9e7] border-[3px] border-white'
            : isCurrentNext
            ? 'bg-[#fffdf5] border-[3.5px] border-[#f59e0b] shadow-[0_0_16px_rgba(245,158,11,0.65)] scale-105 z-10'
            : 'bg-[#fdfaf2] border-[3px] border-white/90 opacity-95'
        }`}
      >
        {/* Level Tag Header */}
        <span
          className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
            isCompleted
              ? 'bg-[#c5e1a5] text-[#33691e]'
              : isCurrentNext
              ? 'bg-[#fed7aa] text-[#9a3412]'
              : 'bg-black/5 text-[#8d6e63]'
          }`}
        >
          Lv.{stepLevelNumber}
        </span>

        {/* Card Body */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {isCompleted ? (
            <div className="w-9 h-9 rounded-full bg-[#7cb342] flex items-center justify-center shadow-inner">
              <Check className="w-5 h-5 text-white stroke-[3.5]" />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center">{renderStepIcon(stepObj)}</div>
              <div
                className={`font-extrabold text-xs sm:text-sm tracking-tight ${
                  isCurrentNext ? 'text-[#ea580c]' : 'text-[#5d4037]'
                }`}
              >
                x{stepObj.amount}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const isStep10Completed = completedStepsInChunk >= 10;
  const isStep10Active = activeStep === 10;

  return (
    <div
      onClick={justClearedLevel && onNextLevel ? onNextLevel : onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none animate-fadeIn"
    >
      {/* Top-Right Coin Pill */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-[#1e293b]/90 border-2 border-[#475569] rounded-full px-2.5 py-1 shadow-xl"
      >
        <GoldCoinsIcon className="w-6 h-6" single />
        <span className="text-white font-black text-base tracking-wide px-1">
          {coins.toLocaleString()}
        </span>
        {onAddCoinsClick && (
          <button
            onClick={onAddCoinsClick}
            title="무료 보너스 코인 충전"
            className="w-6 h-6 rounded-full bg-[#65a30d] hover:bg-[#84cc16] text-white flex items-center justify-center shadow cursor-pointer transition-transform active:scale-90"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
          </button>
        )}
      </div>

      {/* Main Blue Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[380px] sm:max-w-[410px] bg-[#6497e8] border-[6px] border-white rounded-[36px] px-5 pt-5 pb-5 shadow-2xl flex flex-col items-center"
      >
        {/* Close Button */}
        <button
          onClick={justClearedLevel && onNextLevel ? onNextLevel : onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#4a7ac7] hover:bg-[#3b66ab] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Section Pill: 1 ~ 10 레벨 구간, 11 ~ 20 레벨 구간, etc. */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3969b8] text-white text-xs font-black tracking-wide mb-1 shadow-inner">
          <Sparkles className="w-3 h-3 text-[#fde047]" />
          <span>{chunkStartLevel} ~ {chunkEndLevel} 레벨 도전 과제</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-[26px] font-black text-white tracking-tight drop-shadow-xs">
          일일 도전 과제
        </h2>

        {/* Instruction Subtitle */}
        <p className="text-xs sm:text-sm font-bold text-white/95 mt-1 mb-4 text-center">
          <span className="text-[#fde047] font-black text-base">{nextTargetLevel}</span> 레벨을 클리어하여 다음 보상을 받으세요.
          <span className="block text-[11px] text-white/80 font-normal">
            ({completedStepsInChunk} / 10 레벨 완료)
          </span>
        </p>

        {/* ROW 1: Step 1 > Step 2 > Step 3 */}
        <div className="flex items-center justify-center w-full">
          {renderCard(1)}
          <div className="w-5 sm:w-6 h-6 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderCard(2)}
          <div className="w-5 sm:w-6 h-6 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderCard(3)}
        </div>

        {/* Connector Down on Right (Under Step 3) */}
        <div className="w-full flex justify-end pr-[36px] sm:pr-[40px]">
          <div className="w-6 h-5 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-white stroke-[3]" />
          </div>
        </div>

        {/* ROW 2: Step 6 < Step 5 < Step 4 */}
        <div className="flex items-center justify-center w-full">
          {renderCard(6)}
          <div className="w-5 sm:w-6 h-6 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderCard(5)}
          <div className="w-5 sm:w-6 h-6 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderCard(4)}
        </div>

        {/* Connector Down on Left (Under Step 6) */}
        <div className="w-full flex justify-start pl-[36px] sm:pl-[40px]">
          <div className="w-6 h-5 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-white stroke-[3]" />
          </div>
        </div>

        {/* ROW 3: Step 7 > Step 8 > Step 9 */}
        <div className="flex items-center justify-center w-full">
          {renderCard(7)}
          <div className="w-5 sm:w-6 h-6 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderCard(8)}
          <div className="w-5 sm:w-6 h-6 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderCard(9)}
        </div>

        {/* Connector Down on Right (Under Step 9) */}
        <div className="w-full flex justify-end pr-[36px] sm:pr-[40px]">
          <div className="w-6 h-5 bg-[#4b7fd1] flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-white stroke-[3]" />
          </div>
        </div>

        {/* ROW 4: Step 10 Grand Bundle (Full Width, represents chunkEndLevel) */}
        <div
          className={`w-full max-w-[306px] sm:max-w-[336px] h-[92px] rounded-2xl flex flex-col justify-between py-1.5 px-4 shadow-md transition-all ${
            isStep10Completed
              ? 'bg-[#fef9e7] border-[3px] border-white'
              : isStep10Active
              ? 'bg-[#fffdf5] border-[3.5px] border-[#f59e0b] shadow-[0_0_16px_rgba(245,158,11,0.65)]'
              : 'bg-[#fdfaf2] border-[3px] border-white/90'
          }`}
        >
          <div className="w-full text-center">
            <span
              className={`text-[9px] font-bold px-2 py-0.2 rounded-full ${
                isStep10Completed
                  ? 'bg-[#c5e1a5] text-[#33691e]'
                  : isStep10Active
                  ? 'bg-[#fed7aa] text-[#9a3412]'
                  : 'bg-black/5 text-[#8d6e63]'
              }`}
            >
              Lv.{chunkEndLevel} 최종 대보상
            </span>
          </div>

          <div className="flex items-center justify-around">
            {isStep10Completed ? (
              <div className="flex items-center gap-2 text-[#558b2f] font-black text-sm">
                <div className="w-8 h-8 rounded-full bg-[#7cb342] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white stroke-[3.5]" />
                </div>
                <span>{chunkEndLevel}레벨 최종 보상 획득 완료!</span>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <UndoArrowIcon className="w-9 h-9" />
                  <span className="text-xs font-extrabold text-[#5d4037]">x3</span>
                </div>
                <div className="flex flex-col items-center">
                  <MagicWandIcon className="w-9 h-9" />
                  <span className="text-xs font-extrabold text-[#5d4037]">x3</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShuffleArrowsIcon className="w-9 h-9" />
                  <span className="text-xs font-extrabold text-[#5d4037]">x3</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Button if triggered on Level Clear or New Chunk Notice */}
        {justClearedLevel && onNextLevel && (
          <button
            onClick={onNextLevel}
            className="mt-4 w-full max-w-[306px] sm:max-w-[336px] py-3 rounded-2xl bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#fde047] hover:to-[#fbbf24] text-slate-950 font-black text-base shadow-lg cursor-pointer transition-transform active:scale-95"
          >
            {isStep10Completed
              ? `다음 ${chunkEndLevel + 1} ~ ${chunkEndLevel + 10} 도전 과제 시작 ▶`
              : '보상 확인 & 다음 레벨 시작 ▶'}
          </button>
        )}
      </div>

      {/* Bottom Tap to Close text */}
      <button
        onClick={justClearedLevel && onNextLevel ? onNextLevel : onClose}
        className="mt-5 text-white/90 hover:text-white font-bold text-lg tracking-wide cursor-pointer"
      >
        탭하여 닫기
      </button>
    </div>
  );
};
