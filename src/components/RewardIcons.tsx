import React from 'react';

/**
 * Custom vivid SVG icons matching the arcade reward aesthetics:
 * - MagicWandIcon (드래그 패스 요술봉)
 * - UndoArrowIcon (되돌리기/위로 올리기 화살표)
 * - ShuffleArrowsIcon (쉬운 초성 변환 셔플 화살표)
 * - GoldCoinsIcon (골드 코인 싱글 / 스택)
 */

export const MagicWandIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Glow */}
    <circle cx="26" cy="24" r="18" fill="url(#wandGlow)" opacity="0.45" />
    {/* Sparkles */}
    <circle cx="44" cy="14" r="3" fill="#FBBF24" />
    <circle cx="14" cy="36" r="2.5" fill="#F59E0B" />
    <path d="M48 26L50 30L54 32L50 34L48 38L46 34L42 32L46 30L48 26Z" fill="#FDE047" />
    {/* Stick */}
    <path d="M26 26L52 52" stroke="url(#wandStick)" strokeWidth="6" strokeLinecap="round" />
    <path d="M44 44L52 52" stroke="#FEF08A" strokeWidth="6" strokeLinecap="round" />
    {/* Star Head */}
    <path
      d="M24 8L28.5 17.5L39 19L31.5 26.2L33.3 36.5L24 31.6L14.7 36.5L16.5 26.2L9 19L19.5 17.5L24 8Z"
      fill="url(#starGrad)"
      stroke="#EA580C"
      strokeWidth="1.5"
    />
    <defs>
      <radialGradient id="wandGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26 24) scale(18)">
        <stop stopColor="#FDE047" />
        <stop offset="1" stopColor="#FDE047" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="wandStick" x1="26" y1="26" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97316" />
        <stop offset="1" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="starGrad" x1="12" y1="10" x2="34" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FB923C" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
    </defs>
  </svg>
);

export const UndoArrowIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" fill="url(#undoGlow)" opacity="0.4" />
    <path
      d="M28 16L12 30L28 44V35C40 35 47 40 50 50C51 34 44 23 28 23V16Z"
      fill="url(#undoGrad)"
      stroke="#D97706"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <defs>
      <radialGradient id="undoGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32) scale(20)">
        <stop stopColor="#FDE047" />
        <stop offset="1" stopColor="#FDE047" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="undoGrad" x1="12" y1="16" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.5" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>
    </defs>
  </svg>
);

export const ShuffleArrowsIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" fill="url(#shufGlow)" opacity="0.35" />
    {/* Path 1 */}
    <path
      d="M12 22H20C27 22 31 42 40 42H50"
      stroke="#84CC16"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path d="M44 34L54 42L44 50V34Z" fill="#EAB308" />
    {/* Path 2 */}
    <path
      d="M12 42H20C27 42 31 22 40 22H50"
      stroke="#FACC15"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path d="M44 14L54 22L44 30V14Z" fill="#84CC16" />
    <defs>
      <radialGradient id="shufGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32) scale(20)">
        <stop stopColor="#FEF08A" />
        <stop offset="1" stopColor="#FEF08A" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const GoldCoinsIcon: React.FC<{ className?: string; single?: boolean }> = ({
  className = 'w-10 h-10',
  single = false,
}) => {
  if (single) {
    return (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" fill="url(#coinGrad)" stroke="#D97706" strokeWidth="3" />
        <circle cx="32" cy="32" r="15" stroke="#FEF08A" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M23 36L25 26L32 31L39 26L41 36H23Z" fill="#D97706" />
        <defs>
          <linearGradient id="coinGrad" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="0.5" stopColor="#FACC15" />
            <stop offset="1" stopColor="#CA8A04" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coin stack */}
      <ellipse cx="38" cy="46" rx="14" ry="7" fill="#CA8A04" stroke="#92400E" strokeWidth="1.5" />
      <ellipse cx="38" cy="40" rx="14" ry="7" fill="#EAB308" stroke="#92400E" strokeWidth="1.5" />
      <ellipse cx="38" cy="34" rx="14" ry="7" fill="#FACC15" stroke="#92400E" strokeWidth="1.5" />
      <ellipse cx="38" cy="28" rx="14" ry="7" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
      {/* Front tilted coin */}
      <circle cx="22" cy="40" r="13" fill="url(#coinStackGrad)" stroke="#B45309" strokeWidth="2" />
      <circle cx="22" cy="40" r="9" stroke="#FEF9C3" strokeWidth="1.2" />
      <defs>
        <linearGradient id="coinStackGrad" x1="10" y1="28" x2="34" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF08A" />
          <stop offset="0.5" stopColor="#FACC15" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
  );
};
