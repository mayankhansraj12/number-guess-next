import NumberSpinner from './NumberSpinner';

interface FeedbackFormProps {
  rightDigits: number;
  rightPositions: number;
  gameActive: boolean;
  onChangeDigits: (v: number) => void;
  onChangePositions: (v: number) => void;
  onSubmit: () => void;
  onNewGame: () => void;
}

export default function FeedbackForm({
  rightDigits, rightPositions, gameActive,
  onChangeDigits, onChangePositions, onSubmit, onNewGame,
}: FeedbackFormProps) {
  return (
    <div className="rounded-2xl bg-game-surface border border-game-border p-5 sm:p-6 flex flex-col gap-6 items-center">
      <span
        className="self-start text-[10px] font-semibold tracking-[0.22em] text-game-subtext uppercase"
        style={{ fontFamily: 'Funnel Sans, system-ui' }}
      >
        Your Feedback
      </span>

      {/* Spinners — always side by side */}
      <div className="flex flex-row gap-10 sm:gap-16 justify-center w-full">
        <NumberSpinner value={rightDigits}    onChange={onChangeDigits}    label="Correct digits"    />
        <NumberSpinner value={rightPositions} onChange={onChangePositions} label="Correct positions" />
      </div>

      <div className="flex flex-wrap gap-2.5 self-start">
        <button
          onClick={onSubmit}
          disabled={!gameActive}
          className="h-10 px-6 rounded-full bg-game-accent text-game-bg text-sm font-semibold
                     hover:bg-game-accent-dk active:scale-95 shadow-sm
                     disabled:opacity-25 disabled:cursor-not-allowed
                     transition-all duration-150"
          style={{ fontFamily: 'Funnel Display, system-ui' }}
        >
          Submit
        </button>
        <button
          onClick={onNewGame}
          className="h-10 px-6 rounded-full border border-game-border-md text-game-subtext text-sm
                     hover:border-game-border-strong hover:text-game-text hover:bg-game-over
                     active:scale-95 transition-all duration-150"
          style={{ fontFamily: 'Funnel Sans, system-ui' }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}
