'use client';

import { useReducer } from 'react';
import type { GameState, GameAction, HistoryEntry } from '@/types/game';
import {
  ALL_VALID,
  getRandomFirstGuess,
  filterPossibilities,
  recomputeFromHistory,
} from '@/lib/game';

function makeInitialState(): GameState {
  return {
    possibilities: [...ALL_VALID],
    history: [],
    currentGuess: getRandomFirstGuess(),
    gameActive: true,
    isWon: false,
    errorMessage: null,
    rightDigits: 0,
    rightPositions: 0,
    nextId: 1,
  };
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'NEW_GAME':
      return makeInitialState();

    case 'SET_RIGHT_DIGITS':
      return { ...state, rightDigits: action.value, errorMessage: null };

    case 'SET_RIGHT_POSITIONS':
      return { ...state, rightPositions: action.value, errorMessage: null };

    case 'CLEAR_ERROR':
      return { ...state, errorMessage: null };

    case 'SUBMIT_FEEDBACK': {
      const { rightDigits: rd, rightPositions: rp, currentGuess, possibilities, history, nextId } = state;

      // 1. Invalid: more positions than digits
      if (rp > rd) {
        return { ...state, errorMessage: 'Correct positions cannot exceed correct digits.' };
      }

      const attempt = history.length + 1;

      // 2. Win condition
      if (rp === 4) {
        const winEntry: HistoryEntry = {
          id: nextId,
          round: attempt,
          guess: currentGuess,
          rightDigits: rd,
          rightPositions: rp,
        };
        return {
          ...state,
          history: [...history, winEntry],
          gameActive: false,
          isWon: true,
          errorMessage: null,
          nextId: nextId + 1,
        };
      }

      // 3. Filter first — validate before logging
      let filtered = filterPossibilities(possibilities, currentGuess, rd, rp);
      const idx = filtered.indexOf(currentGuess);
      if (idx !== -1) filtered = filtered.filter((_, i) => i !== idx);

      // 4. Contradiction — do NOT log
      if (filtered.length === 0) {
        return {
          ...state,
          errorMessage:
            'No valid numbers match your feedback. Please check your answers — something may be inconsistent.',
        };
      }

      // 5. Valid — now log
      const newEntry: HistoryEntry = {
        id: nextId,
        round: attempt,
        guess: currentGuess,
        rightDigits: rd,
        rightPositions: rp,
      };

      return {
        ...state,
        history: [...history, newEntry],
        possibilities: filtered,
        currentGuess: filtered[0],
        rightDigits: 0,
        rightPositions: 0,
        errorMessage: null,
        nextId: nextId + 1,
      };
    }

    case 'DELETE_ENTRY': {
      const newHistory = state.history
        .filter((e) => e.id !== action.id)
        .map((e, i) => ({ ...e, round: i + 1 }));

      const newPossibilities = recomputeFromHistory(newHistory);
      // Use first possibility deterministically — no random re-generation on delete
      const newGuess = newPossibilities[0] ?? state.currentGuess;

      return {
        ...state,
        history: newHistory,
        possibilities: newPossibilities,
        currentGuess: newGuess,
        gameActive: true,
        isWon: false,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, undefined, makeInitialState);
  return { state, dispatch };
}
