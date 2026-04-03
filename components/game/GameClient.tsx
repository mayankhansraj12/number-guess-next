'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState';
import GuessDisplay from './GuessDisplay';
import FeedbackForm from './FeedbackForm';
import HistoryTable from './HistoryTable';
import StatusBar from './StatusBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export default function GameClient() {
  const { state, dispatch } = useGameState();
  const {
    currentGuess, isWon, gameActive, history,
    possibilities, rightDigits, rightPositions, errorMessage,
  } = state;

  // Auto-dismiss error after 2 s; also dismiss on any pointer down
  useEffect(() => {
    if (!errorMessage) return;

    const dismiss = () => dispatch({ type: 'CLEAR_ERROR' });
    const autoTimer = setTimeout(dismiss, 2000);

    const handler = () => {
      dismiss();
      document.removeEventListener('pointerdown', handler, true);
    };
    const attachTimer = setTimeout(() => {
      document.addEventListener('pointerdown', handler, true);
    }, 150);

    return () => {
      clearTimeout(autoTimer);
      clearTimeout(attachTimer);
      document.removeEventListener('pointerdown', handler, true);
    };
  }, [errorMessage, dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">

        {/* Header */}
        <header className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-auto" />
            <div>
              <h1
                className="text-base text-game-text leading-none"
                style={{ fontFamily: 'Chewy, system-ui' }}
              >
                GuessIt
              </h1>
              <p className="text-[11px] text-game-subtext mt-0.5" style={{ fontFamily: 'Funnel Sans, system-ui' }}>
                4-digit · no repeated digits
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-game-text/60 hover:text-game-text
                         transition-colors px-3 py-1.5 rounded-full border border-game-border-md
                         hover:border-game-border-strong hover:bg-game-over active:scale-95"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Home
            </Link>
          </div>
        </header>

        <GuessDisplay guess={currentGuess} isWon={isWon} attemptCount={history.length} />

        <FeedbackForm
          rightDigits={rightDigits}
          rightPositions={rightPositions}
          gameActive={gameActive}
          onChangeDigits={(v) => dispatch({ type: 'SET_RIGHT_DIGITS', value: v })}
          onChangePositions={(v) => dispatch({ type: 'SET_RIGHT_POSITIONS', value: v })}
          onSubmit={() => dispatch({ type: 'SUBMIT_FEEDBACK' })}
          onNewGame={() => dispatch({ type: 'NEW_GAME' })}
        />

        <HistoryTable history={history} onDelete={(id) => dispatch({ type: 'DELETE_ENTRY', id })} />
      </div>

      <StatusBar possibilities={possibilities.length} isWon={isWon} attemptCount={history.length} />

      {/* Floating error toast — fixed, never breaks layout */}
      {errorMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-toast-in
                        w-max max-w-[min(360px,calc(100vw-2rem))]">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl
                          bg-game-surface border border-game-border-strong
                          shadow-2xl shadow-black/40 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" className="text-game-red shrink-0">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
            </svg>
            <span
              className="text-sm text-game-text leading-snug"
              style={{ fontFamily: 'Funnel Sans, system-ui' }}
            >
              {errorMessage}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
