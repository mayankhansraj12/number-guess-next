interface GuessDisplayProps {
  guess: string;
  isWon: boolean;
  attemptCount: number;
}

export default function GuessDisplay({ guess, isWon, attemptCount }: GuessDisplayProps) {
  return (
    <div className="rounded-2xl bg-game-surface border border-game-border p-6 sm:p-8 flex flex-col items-center gap-5">
      <span
        className="text-[10px] font-semibold tracking-[0.22em] text-game-subtext uppercase"
        style={{ fontFamily: 'Funnel Sans, system-ui' }}
      >
        My Guess
      </span>

      {/* key=guess forces remount → re-triggers entrance animation on new guess */}
      <div key={guess} className="flex gap-2.5 sm:gap-3">
        {guess.split('').map((digit, i) => (
          <div
            key={i}
            className={`w-[68px] h-[84px] sm:w-20 sm:h-24 rounded-2xl border-2 flex items-center justify-center
                        transition-all duration-300 animate-tile-enter
                        ${isWon
                          ? 'border-game-border-strong bg-game-over-md text-game-text'
                          : 'border-game-border-md bg-game-over text-game-text hover:border-game-border-strong hover:bg-game-over-md hover:scale-105'
                        }`}
            style={{
              fontFamily: 'Chewy, system-ui',
              fontSize: '2.6rem',
              animationDelay: `${i * 75}ms`,
            }}
          >
            {digit}
          </div>
        ))}
      </div>

      {isWon && (
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-game-border-strong bg-game-over-md animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-game-green" />
          <span
            className="text-xs font-semibold text-game-text"
            style={{ fontFamily: 'Funnel Display, system-ui' }}
          >
            Solved in {attemptCount} attempt{attemptCount !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  );
}
