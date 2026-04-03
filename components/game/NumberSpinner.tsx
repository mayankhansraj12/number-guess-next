'use client';

import { useEffect, useRef, useState } from 'react';

interface NumberSpinnerProps {
  value: number;
  onChange: (v: number) => void;
  label: string;
  min?: number;
  max?: number;
}

export default function NumberSpinner({ value, onChange, label, min = 0, max = 4 }: NumberSpinnerProps) {
  const [bouncing, setBouncing] = useState(false);
  const prevRef = useRef(value);

  useEffect(() => {
    if (prevRef.current !== value) {
      setBouncing(true);
      const t = setTimeout(() => setBouncing(false), 220);
      prevRef.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-2.5">
      <span
        className="text-[10px] font-medium text-game-subtext uppercase tracking-[0.15em]"
        style={{ fontFamily: 'Funnel Sans, system-ui' }}
      >
        {label}
      </span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-9 h-9 rounded-full border border-game-border-md text-game-text
                     hover:border-game-border-strong hover:bg-game-over-md
                     active:scale-90 disabled:opacity-20 disabled:cursor-not-allowed
                     transition-all duration-150 flex items-center justify-center text-lg leading-none select-none"
          aria-label="Decrease"
        >
          −
        </button>

        <span
          className={`w-10 text-center tabular-nums leading-none text-game-text
                      transition-transform duration-150 ${bouncing ? 'scale-125' : 'scale-100'}`}
          style={{ fontFamily: 'Chewy, system-ui', fontSize: '2.4rem' }}
        >
          {value}
        </span>

        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-9 h-9 rounded-full border border-game-border-md text-game-text
                     hover:border-game-border-strong hover:bg-game-over-md
                     active:scale-90 disabled:opacity-20 disabled:cursor-not-allowed
                     transition-all duration-150 flex items-center justify-center text-lg leading-none select-none"
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
}
