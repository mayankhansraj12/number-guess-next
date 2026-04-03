const stats = [
  {
    value: '4,536',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    eyebrow: 'Starting pool',
    headline: 'Every valid combination, tracked.',
    body: 'The algorithm begins with all 4,536 valid 4-digit numbers (unique digits, non-zero start). After the first guess, this typically drops below 500.',
  },
  {
    value: '≤ 6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    eyebrow: 'Rounds to solve',
    headline: 'Not random. Deductive.',
    body: 'By choosing guesses that maximally shrink the pool, the algorithm converges on your number in 4–6 rounds — nearly every time.',
  },
  {
    value: '0 ms',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    eyebrow: 'Server latency',
    headline: 'Fully client-side.',
    body: 'Zero network requests. Every filter, every guess, every update happens in your browser — instant, and works offline.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 border-t border-game-border">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <span
              className="text-[10px] tracking-[0.28em] text-game-subtext font-semibold uppercase"
              style={{ fontFamily: 'Funnel Sans, system-ui' }}
            >
              The Algorithm
            </span>
            <h2
              className="mt-2.5 text-3xl sm:text-5xl text-game-text leading-tight"
              style={{ fontFamily: 'Chewy, system-ui' }}
            >
              Smarter than it looks.
            </h2>
          </div>
          <p
            className="text-sm text-game-subtext max-w-[260px] leading-relaxed sm:text-right"
            style={{ fontFamily: 'Funnel Sans, system-ui' }}
          >
            Not brute force — pure information theory applied to a number game.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-game-border
                        border border-game-border rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div
              key={s.value}
              className="group bg-game-surface p-7 sm:p-9 flex flex-col gap-3.5
                         hover:bg-game-over transition-colors duration-200 cursor-default"
            >
              {/* Icon */}
              <span className="text-game-subtext group-hover:text-game-text transition-colors duration-200">
                {s.icon}
              </span>

              {/* Big stat */}
              <span
                className="text-[3.25rem] sm:text-[3.75rem] leading-none text-game-text
                            group-hover:translate-x-1 transition-transform duration-300"
                style={{ fontFamily: 'Chewy, system-ui' }}
              >
                {s.value}
              </span>

              {/* Eyebrow */}
              <span
                className="text-[10px] tracking-[0.2em] text-game-subtext uppercase font-medium"
                style={{ fontFamily: 'Funnel Sans, system-ui' }}
              >
                {s.eyebrow}
              </span>

              {/* Headline */}
              <h3
                className="text-sm font-semibold text-game-text leading-snug"
                style={{ fontFamily: 'Funnel Display, system-ui' }}
              >
                {s.headline}
              </h3>

              {/* Body: always visible on mobile, hover-reveal on desktop */}
              <p
                className="text-xs text-game-subtext leading-relaxed overflow-hidden
                           sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-28 sm:group-hover:opacity-100
                           transition-all duration-300 ease-out"
                style={{ fontFamily: 'Funnel Sans, system-ui' }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop-only hint */}
        <p className="mt-6 text-[11px] text-game-subtext/40 text-center hidden sm:block">
          Hover each card to learn more
        </p>
      </div>
    </section>
  );
}
