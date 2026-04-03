import type { HistoryEntry } from '@/types/game';

function generateAllValid(): string[] {
  const valid: string[] = [];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (const d0 of digits) {
    if (d0 === '0') continue;
    for (const d1 of digits) {
      if (d1 === d0) continue;
      for (const d2 of digits) {
        if (d2 === d0 || d2 === d1) continue;
        for (const d3 of digits) {
          if (d3 === d0 || d3 === d1 || d3 === d2) continue;
          valid.push(d0 + d1 + d2 + d3);
        }
      }
    }
  }
  return valid;
}

export const ALL_VALID: readonly string[] = generateAllValid();

export function getRandomFirstGuess(): string {
  return ALL_VALID[Math.floor(Math.random() * ALL_VALID.length)];
}

export function computeFeedback(
  guess: string,
  candidate: string
): [number, number] {
  const rightPositions = [...guess].filter((g, i) => g === candidate[i]).length;
  const uniqueDigits = new Set(guess);
  const rightDigits = [...uniqueDigits].reduce((sum, d) => {
    const inGuess = guess.split('').filter((c) => c === d).length;
    const inCandidate = candidate.split('').filter((c) => c === d).length;
    return sum + Math.min(inGuess, inCandidate);
  }, 0);
  return [rightDigits, rightPositions];
}

export function filterPossibilities(
  pool: string[],
  guess: string,
  rightDigits: number,
  rightPositions: number
): string[] {
  return pool.filter((p) => {
    const [rd, rp] = computeFeedback(guess, p);
    return rd === rightDigits && rp === rightPositions;
  });
}

export function recomputeFromHistory(
  history: Pick<HistoryEntry, 'guess' | 'rightDigits' | 'rightPositions'>[]
): string[] {
  let pool = [...ALL_VALID];
  for (const entry of history) {
    pool = filterPossibilities(pool, entry.guess, entry.rightDigits, entry.rightPositions);
    const idx = pool.indexOf(entry.guess);
    if (idx !== -1) pool.splice(idx, 1);
  }
  return pool;
}
