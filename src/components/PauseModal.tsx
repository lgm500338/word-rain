import { Play, RotateCcw, Sparkles } from 'lucide-react';
import { Language } from '../types/game';

interface PauseModalProps {
  isOpen: boolean;
  onResume: () => void;
  onRestart: () => void;
  language: Language;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  isOpen,
  onResume,
  onRestart,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none">
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl text-center">
        
        <h2 className="text-2xl font-black text-white mb-1">일시정지</h2>
        <p className="text-xs text-slate-300 mb-6">잠시 숨을 고르고 준비되면 계속하세요.</p>

        {/* Tips Box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left mb-6 space-y-2.5 text-xs text-slate-300">
          <div className="font-bold text-cyan-300 flex items-center gap-1.5 text-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>플레이 꿀팁</span>
          </div>
          {language === 'ko' ? (
            <>
              <p>• <b className="text-white">다중 정답 인정:</b> <span className="text-cyan-200">ㅅㄱ</span>가 내려올 때 <span className="text-amber-300">사과, 수박, 소금, 사기</span> 등 초성이 맞으면 무엇을 쳐도 정답입니다!</p>
              <p>• <b className="text-white">자유로운 조사:</b> <span className="text-cyan-200">여름</span>을 쳐도 되고 <span className="text-amber-300">여름을, 여름이</span>처럼 조사를 붙여 쳐도 모두 인식됩니다.</p>
              <p>• <b className="text-white">문장 조립 보너스:</b> 하단 트레이의 슬롯에 맞는 단어들을 순서대로 격추하면 대량의 추가 점수를 얻습니다!</p>
            </>
          ) : (
            <>
              <p>• <b className="text-white">Multi-answer recognition:</b> For <span className="text-cyan-200">g_</span>, words like <span className="text-amber-300">go, get, gym</span> are all accepted!</p>
              <p>• <b className="text-white">Sentence Combo:</b> Complete the bottom sentence slots (e.g. I go to hospital) for massive bonus score!</p>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={onResume}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-base shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>게임 계속하기</span>
          </button>
          <button
            onClick={onRestart}
            className="w-full py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-300 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>현재 레벨 재시작</span>
          </button>
        </div>

      </div>
    </div>
  );
};
