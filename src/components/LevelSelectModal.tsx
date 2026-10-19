import React, { useEffect, useRef } from 'react';
import { X, Zap, Lock } from 'lucide-react';
import { getLevelConfig } from '../utils/levelManager';

interface LevelSelectModalProps {
  currentLevel: number;
  maxUnlockedLevel: number; // 지금까지 도달한 가장 높은 레벨
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel: (level: number) => void;
}

/**
 * 레벨 선택: 지금까지 도달한 레벨까지만 다시 할 수 있음 (앞 레벨 미리 하기는 불가)
 */
export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  currentLevel,
  maxUnlockedLevel,
  isOpen,
  onClose,
  onSelectLevel,
}) => {
  const currentRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) currentRef.current?.scrollIntoView({ block: 'center' });
  }, [isOpen]);

  if (!isOpen) return null;

  const levels = Array.from({ length: maxUnlockedLevel }, (_, i) => i + 1);

  const pick = (lvl: number) => {
    onSelectLevel(lvl);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-5 border border-white/20 shadow-2xl flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Zap className="w-4 h-4 fill-cyan-400" />
            </span>
            <div>
              <h2 className="text-lg font-black text-white">레벨 선택</h2>
              <p className="text-xs text-slate-300">지나온 레벨은 언제든 다시 할 수 있어요.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level grid */}
        <div className="grid grid-cols-5 gap-2 overflow-y-auto py-4 pr-1">
          {levels.map((lvl) => {
            const isCurrent = lvl === currentLevel;
            const isFrontier = lvl === maxUnlockedLevel;
            return (
              <button
                key={lvl}
                ref={isCurrent ? currentRef : undefined}
                onClick={() => pick(lvl)}
                className={`relative h-12 rounded-xl text-sm font-black transition-all cursor-pointer active:scale-95 border ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-lg shadow-cyan-500/30'
                    : isFrontier
                    ? 'bg-amber-400/20 text-amber-200 border-amber-400/60'
                    : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/15'
                }`}
              >
                {lvl}
                <span className="block text-[9px] font-semibold opacity-70 leading-none mt-0.5">
                  {getLevelConfig(lvl).wordsRequired}단어
                </span>
              </button>
            );
          })}
          <div className="h-12 rounded-xl border border-dashed border-white/15 text-slate-500 flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 text-center">
          Lv.{maxUnlockedLevel + 1}은 Lv.{maxUnlockedLevel} 클리어 후 열려요.
        </div>
      </div>
    </div>
  );
};
