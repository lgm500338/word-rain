import { Heart, Volume2, VolumeX, Pause, Play, Sparkles, Zap, Calendar, Trophy, Plus } from 'lucide-react';
import { Language, GameStats, GameTheme } from '../types/game';
import { GoldCoinsIcon } from './RewardIcons';

interface HeaderProps {
  stats: GameStats;
  tierTitle: string;
  language: Language;
  onToggleLanguage: () => void;
  onToggleSound: () => void;
  isMuted: boolean;
  isPlaying: boolean;
  onTogglePause: () => void;
  theme: GameTheme;
  onOpenLevelModal: () => void;
  onOpenDailyCheckIn: () => void;
  onOpenDailyChallenge: () => void;
  coins: number;
  onAddCoinsClick: () => void;
  canClaimCheckIn: boolean;
  phaseLabel?: string;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  tierTitle,
  language,
  onToggleLanguage,
  onToggleSound,
  isMuted,
  isPlaying,
  onTogglePause,
  theme,
  onOpenLevelModal,
  onOpenDailyCheckIn,
  onOpenDailyChallenge,
  coins,
  onAddCoinsClick,
  canClaimCheckIn,
  phaseLabel,
}) => {
  const progressPercent = Math.min(100, Math.round((stats.levelWordsCleared / stats.levelWordsTarget) * 100));

  return (
    <header className="w-full z-30 select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
        <div className="glass-panel rounded-2xl px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2.5 shadow-2xl backdrop-blur-xl border border-white/15">
          
          {/* Logo & Infinite Level Picker */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </span>
              <div className="hidden sm:block">
                <h1 className="text-sm font-black tracking-tight flex items-center gap-1.5 text-white">
                  <span>워드 레인</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    {tierTitle}
                  </span>
                </h1>
                <div className="text-[10px] text-slate-300">
                  {language === 'ko' ? '초성 & 명문장 무한 타이핑' : 'Infinite Word & Sentence Rain'}
                </div>
              </div>
            </div>

            {/* Level Badge (Clickable to jump to any level 1 ~ ∞) */}
            <button
              onClick={onOpenLevelModal}
              title="레벨 선택 (무한 스테이지)"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-400/35 text-cyan-200 hover:bg-cyan-500/25 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[9px] text-cyan-300/80 uppercase font-bold leading-none">STAGE</div>
                <div className="text-sm font-black text-cyan-100 leading-none">
                  Lv.{stats.level} <span className="text-xs font-bold text-amber-300">/ ∞</span>
                </div>
              </div>
            </button>
          </div>

          {/* Level Progress Bar */}
          <div className="flex-1 max-w-[210px] min-w-[130px] mx-1 hidden md:block">
            <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-200">
              <span className="text-slate-300">
                목표 <b className="text-white">{stats.levelWordsCleared} / {stats.levelWordsTarget}</b>
              </span>
              <span className="text-cyan-400 font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 rounded-full shadow-lg shadow-cyan-500/50"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Daily Check-in & Daily Challenge Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenDailyCheckIn}
              className="relative flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-pink-500/20 hover:bg-pink-500/35 border border-pink-400/40 text-pink-200 text-xs font-bold transition-all cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-pink-400" />
              <span>출석체크</span>
              {canClaimCheckIn && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping absolute -top-0.5 -right-0.5" />
              )}
            </button>

            <button
              onClick={onOpenDailyChallenge}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/35 border border-blue-400/40 text-blue-200 text-xs font-bold transition-all cursor-pointer active:scale-95"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">일일도전</span>
            </button>
          </div>

          {/* Coins, Score, Lives, Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Coin Badge matching Screenshot (`800 +`) */}
            <div className="flex items-center gap-1.5 bg-slate-900/85 border border-amber-400/35 rounded-full px-2 py-0.5 shadow-inner">
              <GoldCoinsIcon className="w-5 h-5" single />
              <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wide">
                {coins.toLocaleString()}
              </span>
              <button
                onClick={onAddCoinsClick}
                title="무료 코인 보너스 +200"
                className="w-4 h-4 rounded-full bg-lime-600 hover:bg-lime-500 text-white flex items-center justify-center cursor-pointer transition-transform active:scale-90"
              >
                <Plus className="w-3 h-3 stroke-[3]" />
              </button>
            </div>

            {/* Score (P 단위) */}
            <div className="text-right flex flex-col items-end">
              <div className="text-[9px] font-bold text-slate-300 uppercase leading-none">SCORE</div>
              <div className="text-xs sm:text-sm font-black text-amber-300 glow-amber leading-none mt-0.5">
                {stats.score.toLocaleString()} <span className="text-[10px] text-amber-400 font-bold">P</span>
              </div>
            </div>

            {/* Lives */}
            <div className="flex items-center gap-0.5 px-2 py-1 rounded-xl bg-slate-900/60 border border-white/10">
              {Array.from({ length: stats.maxLives }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-3.5 h-3.5 transition-all duration-200 ${
                    i < stats.lives
                      ? 'text-rose-500 fill-rose-500 filter drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]'
                      : 'text-slate-700'
                  }`}
                />
              ))}
            </div>

            {/* Controls: Lang, Sound, Pause */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-1.5">
              <button
                onClick={onToggleLanguage}
                title="언어 전환 (한국어 / English)"
                className="px-2 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-bold text-cyan-300 transition-colors cursor-pointer border border-white/10"
              >
                {language === 'ko' ? '한' : 'EN'}
              </button>

              <button
                onClick={onToggleSound}
                title={isMuted ? '음소거 해제' : '음소거'}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors cursor-pointer border border-white/10"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <button
                onClick={onTogglePause}
                title={isPlaying ? '일시정지 (Esc)' : '재개'}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors cursor-pointer border border-white/10"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
