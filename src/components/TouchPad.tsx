import React, { useEffect, useMemo, useState } from 'react';
import { Delete, Keyboard } from 'lucide-react';
import { FallingWord, PlayerInventory } from '../types/game';
import { getChosung } from '../utils/hangul';
import { findAlternativeWord } from '../utils/levelManager';
import { sounds } from '../utils/sound';
import { MagicWandIcon, UndoArrowIcon, ShuffleArrowsIcon } from './RewardIcons';

/**
 * 터치 모드: 폰 키보드 대신 화면 아래 글자 조각을 눌러 단어를 만듦
 * - 떨어지는 단어들의 글자 + 같은 초성의 다른 단어 글자 + 헷갈리게 하는 글자를 섞어서 보여줌
 * - 만든 글자의 초성이 떨어지는 카드와 똑같아지면 자동으로 제출
 */
interface TouchPadProps {
  words: FallingWord[];
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  isPlaying: boolean;
  inventory: PlayerInventory;
  onUseWandClick: () => void;
  onUseUndoClick: () => void;
  onUseShuffleClick: () => void;
  onSwitchToTyping: () => void;
  lastHitNotification: { text: string; points: number } | null;
  failedAlert: string | null;
}

// 헷갈리게 섞어 넣을 자주 쓰는 글자
const DECOY_SYLLABLES = '가나다라마바사아자차카타파하고노도로모보소오조초코토포호구누두루무부수우주추기니리미비시이지치개내대래매배새재해강산물불달별꽃눈비밥집책손발말'.split('');

const TILE_COUNT = 12;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const TouchPad: React.FC<TouchPadProps> = ({
  words,
  value,
  onChange,
  onSubmit,
  isPlaying,
  inventory,
  onUseWandClick,
  onUseUndoClick,
  onUseShuffleClick,
  onSwitchToTyping,
  lastHitNotification,
  failedAlert,
}) => {
  // 화면에 있는 카드가 바뀔 때만 글자판을 새로 섞음
  const wordsKey = words.map((w) => w.id + w.prompt).join('|');
  const tiles = useMemo(() => {
    const needed: string[] = [];
    for (const w of words) {
      for (const ch of w.canonicalExample.replace(/\s/g, '')) needed.push(ch);
      const alt = findAlternativeWord(w.prompt, w.canonicalExample);
      if (alt) for (const ch of alt) needed.push(ch);
    }
    // 정답 글자는 꼭 넣고, 남는 칸은 같은 초성의 헷갈리는 글자 위주로 채움
    const unique = [...new Set(needed)];
    const required = [...new Set(words.flatMap((w) => [...w.canonicalExample.replace(/\s/g, '')]))];
    const extras = unique.filter((c) => !required.includes(c));
    const result = [...required, ...shuffle(extras)];
    const count = Math.max(TILE_COUNT, Math.ceil(required.length / 6) * 6);
    const promptInitials = new Set(words.flatMap((w) => [...w.prompt.replace(/\s/g, '')]));
    const decoys = shuffle(DECOY_SYLLABLES).sort(
      (a, b) => Number(promptInitials.has(getChosung(b))) - Number(promptInitials.has(getChosung(a)))
    );
    for (const d of decoys) {
      if (result.length >= count) break;
      if (!result.includes(d)) result.push(d);
    }
    return shuffle(result.slice(0, Math.max(count, required.length)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsKey]);

  const [shake, setShake] = useState(false);
  useEffect(() => {
    if (!shake) return;
    const t = setTimeout(() => setShake(false), 350);
    return () => clearTimeout(t);
  }, [shake]);

  const press = (syllable: string) => {
    if (!isPlaying) return;
    sounds.playKeyClick();
    const next = value + syllable;
    const nextChosung = getChosung(next);
    const prompts = words.map((w) => w.prompt.replace(/\s/g, ''));
    // 이어질 수 있는 카드가 없으면 틀린 것 → 흔들고 지움
    if (!prompts.some((p) => p.startsWith(nextChosung))) {
      sounds.playErrorBuzz();
      setShake(true);
      onChange('');
      return;
    }
    // 초성이 카드와 똑같아지면 자동 제출 (더 긴 카드가 이어질 수 있으면 ✓ 버튼으로 제출)
    const hasLonger = prompts.some((p) => p.length > nextChosung.length && p.startsWith(nextChosung));
    if (prompts.includes(nextChosung) && !hasLonger) {
      onSubmit(next);
      onChange('');
      return;
    }
    onChange(next);
  };

  const keepFocus = (e: React.PointerEvent) => e.preventDefault();

  const items = [
    { key: 'undo', count: inventory.undoSlow, onClick: onUseUndoClick, icon: <UndoArrowIcon className="w-5 h-5" />, label: '되돌리기' },
    { key: 'wand', count: inventory.dragWand, onClick: onUseWandClick, icon: <MagicWandIcon className="w-5 h-5" />, label: '드래그권' },
    { key: 'shuffle', count: inventory.shuffle, onClick: onUseShuffleClick, icon: <ShuffleArrowsIcon className="w-5 h-5" />, label: '쉬운셔플' },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto px-2 z-40 select-none">
      {/* 알림 */}
      {failedAlert && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-rose-600 border border-rose-300 text-white font-black text-xs whitespace-nowrap">
            {failedAlert}
          </div>
        </div>
      )}
      {!failedAlert && lastHitNotification && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none animate-bounce">
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-black text-xs whitespace-nowrap flex items-center gap-1.5">
            <span>✨ {lastHitNotification.text}</span>
            {lastHitNotification.points > 0 && (
              <span className="bg-slate-950/20 px-1.5 rounded text-[10px]">+{lastHitNotification.points}점</span>
            )}
          </div>
        </div>
      )}

      <div className="glass-panel rounded-2xl p-2 border border-white/20 shadow-2xl backdrop-blur-2xl">
        {/* 윗줄: 만든 글자 / 지우기 / 아이템 / 타자 모드로 */}
        <div className="flex items-center gap-1.5 mb-2">
          <div
            className={`flex-1 min-w-0 h-9 px-3 rounded-xl bg-slate-950/60 border flex items-center text-lg font-black text-white tracking-wide ${
              shake ? 'border-rose-500 animate-pulse' : 'border-cyan-400/60'
            }`}
          >
            {value ? (
              <span className="truncate">{value}</span>
            ) : (
              <span className="text-xs font-semibold text-slate-400 truncate">글자를 눌러 단어 만들기</span>
            )}
          </div>
          {value && words.some((w) => w.prompt.replace(/\s/g, '') === getChosung(value)) && (
            <button
              type="button"
              onClick={() => {
                onSubmit(value);
                onChange('');
              }}
              aria-label="제출"
              className="w-9 h-9 rounded-xl bg-cyan-500 text-slate-950 font-black flex items-center justify-center cursor-pointer"
            >
              ✓
            </button>
          )}
          <button
            type="button"
            onPointerDown={keepFocus}
            onClick={() => onChange(value.slice(0, -1))}
            disabled={!value}
            aria-label="한 글자 지우기"
            className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center disabled:opacity-40 cursor-pointer"
          >
            <Delete className="w-4 h-4" />
          </button>
          {items.map((it) => (
            <button
              key={it.key}
              type="button"
              onClick={it.onClick}
              disabled={it.count <= 0 || !isPlaying}
              aria-label={it.label}
              className="relative w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center disabled:opacity-40 cursor-pointer"
            >
              {it.icon}
              <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-amber-400 text-slate-950 text-[9px] font-black flex items-center justify-center">
                {it.count}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={onSwitchToTyping}
            aria-label="타자 모드로 바꾸기"
            title="타자 모드로 바꾸기"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/15 text-slate-300 flex items-center justify-center cursor-pointer"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>

        {/* 글자판 */}
        <div className={`grid grid-cols-6 gap-1.5 ${shake ? 'animate-pulse' : ''}`}>
          {tiles.map((t, i) => (
            <button
              key={`${t}-${i}`}
              type="button"
              onClick={() => press(t)}
              disabled={!isPlaying}
              className="h-11 rounded-xl bg-slate-800/90 border border-white/15 text-white text-xl font-black active:scale-90 active:bg-cyan-600 transition-transform disabled:opacity-40 cursor-pointer"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
