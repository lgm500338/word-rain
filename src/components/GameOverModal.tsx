import React from 'react';
import { RotateCcw, Award, ArrowUpCircle } from 'lucide-react';
import { GameStats } from '../types/game';

interface GameOverModalProps {
  stats: GameStats;
  highScore: number;
  isOpen: boolean;
  onRetry: () => void;
  onRestartLv1: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  stats,
  highScore,
  isOpen,
  onRetry,
  onRestartLv1,
}) => {
  if (!isOpen) return null;

  const isNewRecord = stats.score > highScore;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md select-none">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-rose-500/30 shadow-2xl text-center">
        
        {/* Game Over Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-xl shadow-rose-500/30">
          <RotateCcw className="w-8 h-8 stroke-[2.2]" />
        </div>

        <h2 className="text-2xl font-black text-white">게임 오버</h2>
        <p className="text-sm text-rose-300 mt-1 font-medium">단어가 방어선에 닿아 체력이 소진되었습니다.</p>

        {/* Score & High Score */}
        <div className="my-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">도달한 레벨</span>
            <span className="font-black text-cyan-300 text-lg">LEVEL {stats.level}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">최종 점수</span>
            <span className="font-black text-amber-300 text-xl">{stats.score.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm pt-2 border-t border-white/10">
            <span className="text-slate-400 flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-400" />
              최고 기록
            </span>
            <span className="font-bold text-white">
              {Math.max(stats.score, highScore).toLocaleString()}
              {isNewRecord && <span className="text-[10px] text-amber-400 ml-1.5 font-black uppercase">NEW!</span>}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={onRetry}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-black text-base shadow-xl shadow-rose-500/30 flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            <span>레벨 {stats.level} 다시 도전</span>
          </button>

          <button
            onClick={onRestartLv1}
            className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-300 font-bold text-sm transition-all cursor-pointer"
          >
            1 레벨부터 새로 시작하기
          </button>
        </div>

      </div>
    </div>
  );
};
