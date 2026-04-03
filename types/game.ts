export interface HistoryEntry {
  id: number;
  round: number;
  guess: string;
  rightDigits: number;
  rightPositions: number;
}

export interface GameState {
  possibilities: string[];
  history: HistoryEntry[];
  currentGuess: string;
  gameActive: boolean;
  isWon: boolean;
  errorMessage: string | null;
  rightDigits: number;
  rightPositions: number;
  nextId: number;
}

export type GameAction =
  | { type: 'NEW_GAME' }
  | { type: 'SET_RIGHT_DIGITS'; value: number }
  | { type: 'SET_RIGHT_POSITIONS'; value: number }
  | { type: 'SUBMIT_FEEDBACK' }
  | { type: 'DELETE_ENTRY'; id: number }
  | { type: 'CLEAR_ERROR' };
