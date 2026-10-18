import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { SentenceChain } from '../types/game';

interface SentenceTrayProps {
  sentences: SentenceChain[];
}

export const SentenceTray: React.FC<SentenceTrayProps> = ({ sentences }) => {
  if (sentences.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-2 pointer-events-auto select-none">
      <div className="flex flex-col gap-2">
        {sentences.map((sentence) => {
          const filledCount = sentence.slots.filter(s => s.isFilled).length;
          const totalSlots = sentence.slots.length;
          const isComplete = sentence.isCompleted;

          return (
            <div
              key={sentence.id}
              className={`rounded-2xl px-4 py-2.5 transition-all duration-300 backdrop-blur-xl border ${
                isComplete
                  ? 'bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-cyan-500/20 border-amber-400/50 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/40'
                  : 'bg-slate-900/80 border-white/10 shadow-md'
              }`}
            >
              {/* Sentence Header */}
              <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Sparkles className={`w-3.5 h-3.5 ${isComplete ? 'text-amber-400 animate-spin' : 'text-cyan-400'}`} />
                  <span className="font-bold text-white text-[11px] sm:text-xs">
                    {isComplete ? '✨ 문장 완성 성공!' : '문장 조립 트레이'}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    ({filledCount}/{totalSlots} 파츠 결합)
                  </span>
                </div>
                {isComplete ? (
                  <span className="text-amber-300 font-black text-xs flex items-center gap-1 animate-pulse">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    +{sentence.rewardPoints} BONUS!
                  </span>
                ) : (
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-1.5 py-0.5 rounded-md font-mono-code">
                    완성 시 +{sentence.rewardPoints}점
                  </span>
                )}
              </div>

              {/* Slots Row */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {sentence.slots.map((slot, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border transition-all text-xs ${
                      slot.isFilled
                        ? 'bg-emerald-500/25 border-emerald-400/60 text-emerald-200 font-bold shadow-sm shadow-emerald-500/30 scale-102'
                        : 'bg-slate-800/60 border-white/10 text-slate-300'
                    }`}
                  >
                    <span className="text-[9px] uppercase font-bold text-slate-400 bg-white/5 px-1 rounded">
                      {slot.label}
                    </span>
                    {slot.isFilled ? (
                      <span className="text-white font-black text-sm flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 inline" />
                        {slot.filledWord}
                      </span>
                    ) : (
                      <span className="font-mono-code font-bold text-cyan-300 text-sm">
                        {slot.prompt}
                        <span className="text-[9px] font-normal text-slate-400 ml-1">
                          ({slot.canonical})
                        </span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
