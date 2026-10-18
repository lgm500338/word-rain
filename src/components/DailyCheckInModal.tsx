import React from 'react';
import { X, Check, ChevronRight, ChevronLeft, ChevronDown, Plus, Gift } from 'lucide-react';
import { MagicWandIcon, UndoArrowIcon, ShuffleArrowsIcon, GoldCoinsIcon } from './RewardIcons';
import { RewardStep } from '../types/game';

export const DAILY_CHECKIN_STEPS: RewardStep[] = [
  { step: 1, label: 'D1', type: 'wand', amount: 2 },
  { step: 2, label: 'D2', type: 'undo', amount: 2 },
  { step: 3, label: 'D3', type: 'wand', amount: 2 },
  { step: 4, label: 'D4', type: 'shuffle', amount: 2 },
  { step: 5, label: 'D5', type: 'coins', amount: 1000 },
  { step: 6, label: 'D6', type: 'undo', amount: 2 },
  { step: 7, label: 'D7', type: 'wand', amount: 2 },
  { step: 8, label: 'D8', type: 'shuffle', amount: 2 },
  { step: 9, label: 'D9', type: 'coins', amount: 1000 },
  {
    step: 10,
    label: 'D10',
    type: 'bundle',
    amount: 10,
    bundleAmounts: { undo: 10, wand: 10, shuffle: 10 },
  },
];

interface DailyCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkedInDays: number; // 0 to 10
  canClaimToday: boolean;
  onClaimCheckIn: () => void;
  coins: number;
  onAddCoinsClick?: () => void;
}

export const DailyCheckInModal: React.FC<DailyCheckInModalProps> = ({
  isOpen,
  onClose,
  checkedInDays,
  canClaimToday,
  onClaimCheckIn,
  coins,
  onAddCoinsClick,
}) => {
  if (!isOpen) return null;

  const activeDay = Math.min(10, checkedInDays + 1);

  const renderStepIcon = (stepObj: RewardStep) => {
    if (stepObj.type === 'wand') return <MagicWandIcon className="w-10 h-10" />;
    if (stepObj.type === 'undo') return <UndoArrowIcon className="w-10 h-10" />;
    if (stepObj.type === 'shuffle') return <ShuffleArrowsIcon className="w-10 h-10" />;
    if (stepObj.type === 'coins') return <GoldCoinsIcon className="w-10 h-10" />;
    return null;
  };

  const renderDayCard = (dayNum: number) => {
    const stepObj = DAILY_CHECKIN_STEPS.find((s) => s.step === dayNum)!;
    const isCompleted = dayNum <= checkedInDays;
    const isCurrentNext = dayNum === activeDay;

    return (
      <div
        key={dayNum}
        onClick={() => {
          if (isCurrentNext && canClaimToday) {
            onClaimCheckIn();
          }
        }}
        className={`relative w-[86px] h-[98px] sm:w-[96px] sm:h-[106px] rounded-2xl overflow-hidden flex flex-col items-center justify-between transition-all select-none shadow-md ${
          isCompleted
            ? 'bg-[#fef9e7] border-[3px] border-white'
            : isCurrentNext
            ? 'bg-[#fffdf5] border-[3.5px] border-[#f59e0b] shadow-[0_0_16px_rgba(245,158,11,0.65)] scale-105 z-10 cursor-pointer'
            : 'bg-[#fdfaf2] border-[3px] border-white/90 opacity-95'
        }`}
      >
        {/* Top Day Header Tab (D1, D2, etc.) */}
        <div
          className={`w-full py-0.5 text-center text-xs font-extrabold tracking-wide ${
            isCompleted
              ? 'bg-[#e2d4f0] text-white'
              : isCurrentNext
              ? 'bg-[#c084fc] text-white'
              : 'bg-[#c896ff] text-white'
          }`}
        >
          {stepObj.label}
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center pb-1">
          {isCompleted ? (
            <div className="w-10 h-10 rounded-full bg-[#ff5ca8] flex items-center justify-center shadow-inner">
              <Check className="w-6 h-6 text-white stroke-[3.5]" />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center">{renderStepIcon(stepObj)}</div>
              <div
                className={`font-extrabold text-sm sm:text-base leading-none mt-0.5 ${
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

  const isDay10Completed = checkedInDays >= 10;
  const isDay10Active = activeDay === 10;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none animate-fadeIn"
    >
      {/* Top-Right Coin Pill matching Screenshot */}
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

      {/* Main Pink Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[380px] sm:max-w-[410px] bg-[#fd65b0] border-[6px] border-white rounded-[36px] px-5 pt-6 pb-6 shadow-2xl flex flex-col items-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#d9468f] hover:bg-[#be3277] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-[26px] font-black text-white tracking-tight drop-shadow-xs">
          매일 체크인
        </h2>
        <p className="text-xs sm:text-sm font-bold text-white/95 mt-1 mb-4 text-center">
          매일 출석 체크하고 더 많은 보상을 받으세요!
        </p>

        {/* ROW 1: D1 > D2 > D3 */}
        <div className="flex items-center justify-center w-full">
          {renderDayCard(1)}
          <div className="w-5 sm:w-6 h-6 bg-[#e04894] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderDayCard(2)}
          <div className="w-5 sm:w-6 h-6 bg-[#e04894] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderDayCard(3)}
        </div>

        {/* Connector Down on Right (Under D3) */}
        <div className="w-full flex justify-end pr-[36px] sm:pr-[40px]">
          <div className="w-6 h-5 bg-[#e04894] flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-white stroke-[3]" />
          </div>
        </div>

        {/* ROW 2: D6 < D5 < D4 */}
        <div className="flex items-center justify-center w-full">
          {renderDayCard(6)}
          <div className="w-5 sm:w-6 h-6 bg-[#e04894] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderDayCard(5)}
          <div className="w-5 sm:w-6 h-6 bg-[#e04894] flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderDayCard(4)}
        </div>

        {/* Connector Down on Left (Under D6) */}
        <div className="w-full flex justify-start pl-[36px] sm:pl-[40px]">
          <div className="w-6 h-5 bg-[#e04894] flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-white stroke-[3]" />
          </div>
        </div>

        {/* ROW 3: D7 > D8 > D9 */}
        <div className="flex items-center justify-center w-full">
          {renderDayCard(7)}
          <div className="w-5 sm:w-6 h-6 bg-[#e04894] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderDayCard(8)}
          <div className="w-5 sm:w-6 h-6 bg-[#e04894] flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
          </div>
          {renderDayCard(9)}
        </div>

        {/* Connector Down on Right (Under D9) */}
        <div className="w-full flex justify-end pr-[36px] sm:pr-[40px]">
          <div className="w-6 h-5 bg-[#e04894] flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-white stroke-[3]" />
          </div>
        </div>

        {/* ROW 4: D10 Grand Bundle (Full Width) */}
        <div
          onClick={() => {
            if (isDay10Active && canClaimToday) {
              onClaimCheckIn();
            }
          }}
          className={`w-full max-w-[306px] sm:max-w-[336px] h-[96px] rounded-2xl overflow-hidden flex flex-col justify-between shadow-md transition-all ${
            isDay10Completed
              ? 'bg-[#fef9e7] border-[3px] border-white'
              : isDay10Active
              ? 'bg-[#fffdf5] border-[3.5px] border-[#f59e0b] shadow-[0_0_16px_rgba(245,158,11,0.65)] cursor-pointer'
              : 'bg-[#fdfaf2] border-[3px] border-white/90'
          }`}
        >
          <div className="w-full py-0.5 bg-[#c896ff] text-center text-xs font-extrabold text-white">
            D10
          </div>
          <div className="flex-1 flex items-center justify-around px-4">
            {isDay10Completed ? (
              <div className="flex items-center gap-2 text-[#d9468f] font-black text-base">
                <div className="w-8 h-8 rounded-full bg-[#ff5ca8] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white stroke-[3.5]" />
                </div>
                <span>10일 출석 대보상 수령 완료!</span>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <UndoArrowIcon className="w-9 h-9" />
                  <span className="text-xs font-extrabold text-[#5d4037]">x10</span>
                </div>
                <div className="flex flex-col items-center">
                  <MagicWandIcon className="w-9 h-9" />
                  <span className="text-xs font-extrabold text-[#5d4037]">x10</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShuffleArrowsIcon className="w-9 h-9" />
                  <span className="text-xs font-extrabold text-[#5d4037]">x10</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Claim Attendance Button */}
        {checkedInDays < 10 && (
          <button
            onClick={onClaimCheckIn}
            className="mt-4 w-full max-w-[306px] sm:max-w-[336px] py-3 rounded-2xl bg-gradient-to-r from-[#fde047] to-[#f59e0b] hover:from-[#fef08a] hover:to-[#fbbf24] text-slate-950 font-black text-base shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
          >
            <Gift className="w-5 h-5 text-rose-600" />
            <span>D{activeDay} 출석 체크 보상 받기!</span>
          </button>
        )}
      </div>

      {/* Bottom Tap to Close text matching Screenshot */}
      <button
        onClick={onClose}
        className="mt-5 text-white/90 hover:text-white font-bold text-lg tracking-wide cursor-pointer"
      >
        탭하여 닫기
      </button>
    </div>
  );
};
