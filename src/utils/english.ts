/**
 * English skeleton matching utility for Word Rain
 * Handles patterns like "g_", "t_", "h________", "c__", "b____"
 */

export function matchEnglishInput(
  input: string,
  pattern: string,
  canonical?: string
): { matches: boolean; scoreBonus: number; isCreativeBonus?: boolean } {
  const cleanInput = input.trim().toLowerCase();
  const cleanPattern = pattern.trim().toLowerCase();
  const cleanCanonical = canonical?.trim().toLowerCase();

  if (!cleanInput || !cleanPattern) {
    return { matches: false, scoreBonus: 0, isCreativeBonus: false };
  }

  // Exact match
  if (cleanInput === cleanPattern) {
    const isCreative = Boolean(cleanCanonical && cleanInput !== cleanCanonical);
    return { matches: true, scoreBonus: isCreative ? 1 : 0, isCreativeBonus: isCreative };
  }

  // Pattern with underscores, e.g. "g_", "h________", "w____"
  if (cleanPattern.includes('_')) {
    const expectedLength = cleanPattern.length;
    const firstUnderscoreIdx = cleanPattern.indexOf('_');
    const prefix = cleanPattern.slice(0, firstUnderscoreIdx);
    const lastUnderscoreIdx = cleanPattern.lastIndexOf('_');
    const suffix = lastUnderscoreIdx < cleanPattern.length - 1 ? cleanPattern.slice(lastUnderscoreIdx + 1) : '';

    if (!cleanInput.startsWith(prefix)) {
      return { matches: false, scoreBonus: 0, isCreativeBonus: false };
    }

    if (suffix && !cleanInput.endsWith(suffix)) {
      return { matches: false, scoreBonus: 0, isCreativeBonus: false };
    }

    if (cleanInput.length === expectedLength || (Math.abs(cleanInput.length - expectedLength) <= 1 && cleanInput.length >= prefix.length + 1)) {
      const isCreative = Boolean(cleanCanonical && cleanInput !== cleanCanonical);
      return { matches: true, scoreBonus: 0, isCreativeBonus: isCreative };
    }
  }

  return { matches: false, scoreBonus: 0, isCreativeBonus: false };
}
