interface StatusBarProps {
  possibilities: number;
  isWon: boolean;
  attemptCount: number;
}

export default function StatusBar({ possibilities, isWon, attemptCount }: StatusBarProps) {
  const isLow = !isWon && possibilities > 0 && possibilities < 15;

  let message: string;
  if (isWon) {
    message = `Solved in ${attemptCount} attempt${attemptCount !== 1 ? 's' : ''} — start a new game to play again`;
  } else if (possibilities === 0) {
    message = 'No possibilities remaining — something is inconsistent, try New Game';
  } else {
    message = `${possibilities.toLocaleString()} possible number${possibilities !== 1 ? 's' : ''} remaining`;
  }

  return (
    <div className="sticky bottom-0 z-10 bg-game-status-bg/90 backdrop-blur-md border-t border-game-border px-5 py-2.5">
      <div className="max-w-xl mx-auto flex items-center gap-2.5">
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500
                      ${isWon ? 'bg-emerald-400' : isLow ? 'bg-game-red animate-pulse' : 'bg-game-accent/50'}`}
        />
        <p
          className={`text-[11px] font-mono tracking-wide transition-colors duration-300
                      ${isWon ? 'text-emerald-400' : isLow ? 'text-game-red' : 'text-game-subtext'}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
