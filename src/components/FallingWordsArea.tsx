import React, { useState } from 'react';
import { Hand } from 'lucide-react';
import { FallingWord } from '../types/game';

interface FallingWordsAreaProps {
  words: FallingWord[];
  currentInput: string;
  dragWandCount: number;
  onDragPassWord: (word: FallingWord) => void;
}

export const FallingWordsArea: React.FC<FallingWordsAreaProps> = ({
  words,
  currentInput,
  dragWandCount,
  onDragPassWord,
}) => {
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragStartY, setDragStartY] = useState<number>(0);
  const [dragOffsetY, setDragOffsetY] = useState<number>(0);

  const handlePointerDown = (e: React.PointerEvent, word: FallingWord) => {
    if (dragWandCount <= 0) return;
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDraggingId(word.id);
    setDragStartY(e.clientY);
    setDragOffsetY(0);
  };

  const handlePointerMove = (e: React.PointerEvent, word: FallingWord) => {
    if (draggingId !== word.id) return;
    const deltaY = Math.max(0, e.clientY - dragStartY);
    setDragOffsetY(deltaY);

    // If pulled down far enough (65px+), trigger instant Drag Pass!
    if (deltaY >= 65) {
      setDraggingId(null);
      setDragOffsetY(0);
      onDragPassWord(word);
    }
  };

  const handlePointerUp = (e: React.PointerEvent, word: FallingWord) => {
    if (draggingId !== word.id) return;
    if (dragOffsetY >= 40) {
      onDragPassWord(word);
    }
    setDraggingId(null);
    setDragOffsetY(0);
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      
      {/* Danger Line / Bottom Shield */}
      <div className="absolute top-[95%] left-0 right-0 h-1 bg-gradient-to-r from-rose-500/0 via-rose-500/45 to-rose-500/0 shadow-[0_0_15px_rgba(244,63,94,0.6)] pointer-events-none">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-rose-950/85 border border-rose-500/35 text-[10px] text-rose-200 font-bold uppercase tracking-widest backdrop-blur-sm">
          방어선 (DEFENSE LINE)
        </div>
      </div>

      {/* Falling Word Capsules */}
      {words.map((word) => {
        const isDanger = word.y > 75;
        const isCritical = word.y > 86;
        const isDraggingThis = draggingId === word.id;

        const isBeingTargeted =
          currentInput.length > 0 &&
          (word.prompt.startsWith(currentInput) || word.canonicalExample.startsWith(currentInput));

        return (
          <div
            key={word.id}
            onPointerDown={(e) => handlePointerDown(e, word)}
            onPointerMove={(e) => handlePointerMove(e, word)}
            onPointerUp={(e) => handlePointerUp(e, word)}
            title={
              dragWandCount > 0
                ? '급할 땐 마우스로 잡고 아래로 드래그하여 즉시 패스! (드래그권 1개 소모)'
                : undefined
            }
            className={`absolute will-change-transform ${
              dragWandCount > 0 ? 'pointer-events-auto cursor-grab active:cursor-grabbing' : 'pointer-events-none'
            } ${isDraggingThis ? 'z-50 scale-110' : 'transition-all duration-75'}`}
            style={{
              left: `clamp(72px, ${word.x}%, calc(100% - 72px))`,
              top: `${Math.max(0, word.y)}%`,
              // 처음엔 카드 위쪽이 화면 맨 위에, 방어선(95%)에서는 카드 아래쪽이 방어선에 닿도록
              transform: `translate(-50%, calc(${-(Math.min(95, Math.max(0, word.y)) / 95) * 100}% + ${isDraggingThis ? dragOffsetY : 0}px))`,
            }}
          >
            <div
              className={`group relative px-4 py-2.5 rounded-2xl whitespace-nowrap flex flex-col items-center justify-center transition-all duration-150 backdrop-blur-md shadow-xl ${
                isDraggingThis
                  ? 'bg-amber-500/90 border-2 border-yellow-200 text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.9)]'
                  : isCritical
                  ? 'bg-rose-950/85 border-2 border-rose-500 text-rose-100 animate-pulse shadow-rose-500/50 scale-105'
                  : isDanger
                  ? 'bg-amber-950/80 border border-amber-400 text-amber-100 shadow-amber-500/40'
                  : isBeingTargeted
                  ? 'bg-cyan-900/85 border-2 border-cyan-400 text-white shadow-cyan-400/50 scale-105 ring-2 ring-cyan-400/50'
                  : 'bg-slate-900/80 border border-white/25 text-white hover:border-amber-300/60'
              }`}
            >

              {/* Hover Drag Hint Badge */}
              {dragWandCount > 0 && !isDraggingThis && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-2 -top-2 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow">
                  <Hand className="w-3 h-3" />
                </div>
              )}

              {/* Main Prompt (초성 / Blank Skeleton) */}
              <div
                className={`text-2xl sm:text-3xl font-black tracking-wider font-mono-code transition-colors ${
                  isDraggingThis
                    ? 'text-slate-950'
                    : isCritical
                    ? 'text-rose-200 glow-rose'
                    : isDanger
                    ? 'text-amber-200 glow-amber'
                    : isBeingTargeted
                    ? 'text-cyan-200 glow-cyan'
                    : 'text-white'
                }`}
                style={{
                  color:
                    isDraggingThis || isDanger || isCritical || isBeingTargeted
                      ? undefined
                      : word.color,
                }}
              >
                {word.prompt}
              </div>

              {/* Canonical hint & examples hint */}
              <div
                className={`mt-0.5 text-[11px] font-medium flex items-center gap-1 ${
                  isDraggingThis ? 'text-slate-900 font-bold' : 'text-slate-300/90'
                }`}
              >
                {isDraggingThis ? (
                  <span>👇 아래로 당겨서 패스! ({word.canonicalExample})</span>
                ) : (
                  <>
                    <span className="opacity-80">예:</span>
                    <span className="font-semibold text-white/95">{word.canonicalExample}</span>
                  </>
                )}
              </div>

              {/* Particle indicator or drop shadow tail */}
              <div
                className="absolute -bottom-1 w-8 h-1 rounded-full blur-xs opacity-60"
                style={{ backgroundColor: word.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
