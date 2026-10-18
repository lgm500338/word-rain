import React, { useState } from 'react';
import { X, Zap, ChevronRight } from 'lucide-react';
import { getLevelConfig } from '../utils/levelManager';
import { getThemeForLevel } from '../data/themes';

interface LevelSelectModalProps {
  currentLevel: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel: (level: number) => void;
}

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  currentLevel,
  isOpen,
  onClose,
  onSelectLevel,
}) => {
  const [selected, setSelected] = useState<number>(currentLevel);

  if (!isOpen) return null;

  const quickLevels = [
    { lvl: 1, label: 'Lv. 1', desc: '초성 단어 워밍업 (사과, 포도, 바다) + 1단계 공식 안내', tag: '입문' },
    { lvl: 5, label: 'Lv. 5', desc: '단어 + 일상 문장 등장 (나는 배가 고파 / 완전 가을이야)', tag: '일상문장' },
    { lvl: 20, label: 'Lv. 20', desc: '과거·미래 시제 복합 문장 (작년은 2025년 이었고...)', tag: '복합문장' },
    { lvl: 35, label: 'Lv. 35', desc: '소설 수준의 서정적 긴 문장 시작 (밤하늘에 반짝이는...)', tag: '소설문장' },
    { lvl: 100, label: 'Lv. 100', desc: '대문호 마스터 스테이지 (깊이 있는 에세이 & 명문장)', tag: '마스터' },
    { lvl: 500, label: 'Lv. 500', desc: '그랜드 챔피언 스테이지', tag: '챔피언' },
    { lvl: 1000, label: 'Lv. 1000', desc: '신화의 전설 무한 모드 (∞)', tag: '전설 ∞' },
  ];

  const config = getLevelConfig(selected);
  const theme = getThemeForLevel(selected);

  const handleApply = () => {
    onSelectLevel(Math.max(1, selected));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Zap className="w-4 h-4 fill-cyan-400" />
            </span>
            <div>
              <h2 className="text-lg font-black text-white">무한 레벨 선택 (Lv. 1 ~ ∞)</h2>
              <p className="text-xs text-slate-300">원하는 스테이지 번호를 직접 입력하거나 바로 이동할 수 있습니다.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Level Preview Card with Landmark Photo */}
        <div className="relative my-5 p-4 rounded-2xl border border-white/15 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 transition-all duration-500 scale-105"
            style={{ backgroundImage: `url(${theme.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70" />

          <div className="relative z-10">
            <div className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider">
              {config.tierTitleKo} ({config.tierTitleEn})
            </div>
            <div className="text-3xl font-black text-white flex items-baseline gap-2">
              Level {selected}
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex flex-col items-center px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-slate-400 text-[10px]">목표 단어</span>
              <span className="font-bold text-amber-300">{config.wordsRequired}개</span>
            </div>
            <div className="flex flex-col items-center px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/10">
              <span className="text-slate-400 text-[10px]">원하는 레벨 직접 입력</span>
              <input
                type="number"
                min={1}
                max={99999}
                value={selected}
                onChange={(e) => setSelected(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-20 bg-slate-800 text-cyan-300 font-black text-center rounded px-1 py-0.5 border border-cyan-500/40 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Quick presets */}
        <div className="mb-6">
          <div className="text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider">주요 구간 바로가기</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
            {quickLevels.map((item) => (
              <button
                key={item.lvl}
                onClick={() => setSelected(item.lvl)}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  selected === item.lvl
                    ? 'bg-cyan-500/20 border-cyan-400/60 text-white shadow-md'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-cyan-300">{item.label}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/10 text-amber-200">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate max-w-[205px]">{item.desc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl hover:bg-white/10 text-slate-300 text-sm font-semibold transition-colors cursor-pointer"
          >
            취소
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/30 transition-all active:scale-95 cursor-pointer"
          >
            {selected} 레벨 시작하기
          </button>
        </div>

      </div>
    </div>
  );
};
