'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative w-13 h-7 rounded-full p-0.75 transition-all duration-500
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${className}
                  bg-amber-100 border border-amber-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.08)]
                  dark:bg-indigo-950 dark:border-indigo-800/60 dark:shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]`}
    >
      {/* Stars — always in DOM, CSS shows/hides */}
      <span className="absolute top-1.25 right-2.5 w-0.75 h-0.75 rounded-full bg-indigo-200/80 hidden dark:block" />
      <span className="absolute bottom-1.5 right-1.75 w-0.5  h-0.5  rounded-full bg-indigo-200/50 hidden dark:block" />
      <span className="absolute top-2.25 right-1.5  w-0.5  h-0.5  rounded-full bg-indigo-200/60 hidden dark:block" />

      {/* Sliding circle — position & color driven by CSS dark: variants, not JS state */}
      <span
        className="relative flex items-center justify-center w-5.5 h-5.5 rounded-full shadow-sm
                   transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                   translate-x-0 bg-amber-400
                   dark:translate-x-6 dark:bg-indigo-400"
      >
        {/* Sun — light mode */}
        <span className="block dark:hidden">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" fill="white" stroke="none" />
            <line x1="12" y1="2"    x2="12" y2="5"    />
            <line x1="12" y1="19"   x2="12" y2="22"   />
            <line x1="4.22" y1="4.22"   x2="6.34" y2="6.34"   />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="2"    y1="12"   x2="5"    y2="12"   />
            <line x1="19"   y1="12"   x2="22"   y2="12"   />
            <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
            <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  />
          </svg>
        </span>
        {/* Moon — dark mode */}
        <span className="hidden dark:block">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
