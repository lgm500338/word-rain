import React, { useRef, useEffect } from 'react';
import { CornerDownLeft, AlertTriangle } from 'lucide-react';
import { Language, PlayerInventory } from '../types/game';
import { sounds } from '../utils/sound';
import { MagicWandIcon, UndoArrowIcon, ShuffleArrowsIcon } from './RewardIcons';

interface TypingInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  language: Language;
  lastHitNotification: { text: string; points: number; isCombo?: boolean } | null;
  failedAlert: string | null;
  isPlaying: boolean;
  inventory: PlayerInventory;
  onUseWandClick: () => void;
  onUseUndoClick: () => void;
  onUseShuffleClick: () => void;
  compact?: boolean; // 키보드가 올라왔을 때 얇은 한 줄 모드
}

export const TypingInput: React.FC<TypingInputProps> = ({
  value,
  onChange,
  onSubmit,
  language,
  lastHitNotification,
  failedAlert,
  isPlaying,
  inventory,
  onUseWandClick,
  onUseUndoClick,
  onUseShuffleClick,
  compact = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPlaying) {
      inputRef.current?.focus();
    }
  }, [isPlaying]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sounds.playKeyClick();

    if (e.key === 'Enter') {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(value);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
    }
  };

  // 아이템·입력 버튼을 눌러도 키보드가 내려가지 않게
  const keepFocus = (e: React.PointerEvent) => e.preventDefault();

  return (
    <div className={`relative w-full max-w-3xl mx-auto z-40 select-none ${compact ? 'px-2' : 'px-4'}`}>
      
      {/* FAILED Profanity / Restricted Word Alert */}
      {failedAlert && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-bounce">
          <div className="px-4 py-1.5 rounded-full bg-rose-600 border-2 border-rose-300 text-white font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(244,63,94,0.85)] flex items-center gap-2 whitespace-nowrap">
            <AlertTriangle className="w-4 h-4 text-yellow-300 shrink-0" />
            <span>{failedAlert}</span>
          </div>
        </div>
      )}

      {/* Floating Hit Flash Notification */}
      {!failedAlert && lastHitNotification && (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 animate-bounce">
          <div className="px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/40 flex items-center gap-1.5 whitespace-nowrap">
            <span>✨ {lastHitNotification.text}</span>
            {lastHitNotification.points > 0 && (
              <span className="bg-slate-950/20 px-1.5 py-0.2 rounded text-[10px]">
                +{lastHitNotification.points}점
              </span>
            )}
          </div>
        </div>
      )}

      <div className={compact ? 'flex flex-row items-center gap-1.5' : 'flex flex-col sm:flex-row items-center gap-2.5'}>
        {/* Input Form */}
        <form onSubmit={handleFormSubmit} className="relative flex-1 w-full">
          <div
            className={`glass-panel rounded-2xl ${compact ? 'p-1' : 'p-1.5 sm:p-2'} flex items-center gap-2 border transition-all shadow-2xl backdrop-blur-2xl ${
              failedAlert
                ? 'border-rose-500 ring-2 ring-rose-500/70 bg-rose-950/40'
                : 'border-white/20 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400'
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              value={value}
              disabled={!isPlaying}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                compact
                  ? (language === 'ko' ? '단어 입력' : 'Type here')
                  : language === 'ko'
                  ? '초성이나 문장 단어를 치거나, 급할 땐 단어를 아래로 드래그하세요!'
                  : 'Type matching word or drag falling word down to pass!'
              }
              className={`w-full bg-transparent px-3 ${compact ? 'py-1' : 'py-2'} text-base sm:text-lg font-bold text-white placeholder-slate-400 outline-none`}
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />

            {/* Submit Button */}
            <button
              type="submit"
              onPointerDown={keepFocus}
              disabled={!value.trim() || !isPlaying}
              className={`flex items-center gap-1.5 ${compact ? 'px-3 py-1.5' : 'px-4 py-2'} rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-xs shadow-md shadow-cyan-500/30 transition-all active:scale-95 cursor-pointer shrink-0`}
            >
              <span className="hidden sm:inline">입력</span>
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* 3 Signature Power-Up Items Bar (압축 모드: 입력창 위 오른쪽에 세로로) */}
        <div className={compact ? 'absolute right-2 bottom-full mb-2 flex flex-col gap-1.5' : 'flex items-center gap-2 shrink-0'}>
          {/* Undo / Push Up */}
          <button
            type="button"
            onPointerDown={keepFocus}
            onClick={onUseUndoClick}
            disabled={inventory.undoSlow <= 0 || !isPlaying}
            title="되돌리기권: 떨어진 단어들을 위로 되돌려 올립니다"
            className={`relative group ${compact ? 'p-1 rounded-xl' : 'px-2.5 py-1.5 rounded-2xl'} glass-panel border border-white/20 hover:border-amber-400/60 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95`}
          >
            <UndoArrowIcon className={compact ? "w-6 h-6" : "w-7 h-7"} />
            {!compact && <div className="text-left">
              <div className="text-[9px] text-slate-300 font-bold leading-none">되돌리기</div>
              <div className="text-xs font-black text-amber-300 leading-tight">x{inventory.undoSlow}</div>
            </div>}
            {compact && <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black flex items-center justify-center">{inventory.undoSlow}</span>}
          </button>

          {/* Drag Pass Wand */}
          <button
            type="button"
            onPointerDown={keepFocus}
            onClick={onUseWandClick}
            disabled={inventory.dragWand <= 0 || !isPlaying}
            title="드래그 패스권: 단어를 아래로 드래그하거나 이 버튼을 눌러 즉시 패스합니다"
            className={`relative group ${compact ? 'p-1 rounded-xl' : 'px-2.5 py-1.5 rounded-2xl'} glass-panel border border-amber-400/40 hover:border-amber-300 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-lg shadow-amber-500/10`}
          >
            <MagicWandIcon className={compact ? "w-6 h-6" : "w-7 h-7"} />
            {!compact && <div className="text-left">
              <div className="text-[9px] text-amber-200 font-bold leading-none">드래그권</div>
              <div className="text-xs font-black text-amber-300 leading-tight">x{inventory.dragWand}</div>
            </div>}
            {compact && <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black flex items-center justify-center">{inventory.dragWand}</span>}
          </button>

          {/* Shuffle */}
          <button
            type="button"
            onPointerDown={keepFocus}
            onClick={onUseShuffleClick}
            disabled={inventory.shuffle <= 0 || !isPlaying}
            title="셔플권: 현재 떨어지는 단어를 쉬운 단어로 바꿉니다"
            className={`relative group ${compact ? 'p-1 rounded-xl' : 'px-2.5 py-1.5 rounded-2xl'} glass-panel border border-white/20 hover:border-lime-400/60 disabled:opacity-40 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95`}
          >
            <ShuffleArrowsIcon className={compact ? "w-6 h-6" : "w-7 h-7"} />
            {!compact && <div className="text-left">
              <div className="text-[9px] text-slate-300 font-bold leading-none">쉬운셔플</div>
              <div className="text-xs font-black text-lime-300 leading-tight">x{inventory.shuffle}</div>
            </div>}
            {compact && <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black flex items-center justify-center">{inventory.shuffle}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
