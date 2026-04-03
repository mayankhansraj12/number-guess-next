import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';

const previewDigits = [
  { digit: '5', known: true  },
  { digit: '?', known: false },
  { digit: '2', known: true  },
  { digit: '?', known: false },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Fixed nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 sm:px-8 py-3.5
                      bg-game-bg/80 backdrop-blur-xl border-b border-game-border">
        {/* Logo — links home */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <Logo className="h-7 w-auto" />
          <span
            className="text-base text-game-text tracking-wide leading-none"
            style={{ fontFamily: 'Chewy, system-ui' }}
          >
            GuessIt
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/game"
            className="btn-liquid-static h-8 px-4 rounded-full text-xs font-semibold
                       flex items-center gap-1.5"
            style={{ fontFamily: 'Funnel Display, system-ui' }}
          >
            Play
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
                        bg-blue-600/10 dark:bg-blue-500/8 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full
                        bg-sky-500/8 dark:bg-sky-400/6 blur-[100px]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full
                        bg-indigo-600/8 dark:bg-indigo-400/6 blur-[100px]" />
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-5 pt-28 pb-16 relative z-10">
        <div className="flex flex-col items-center gap-5 max-w-3xl">

          {/* Eyebrow */}
          <span
            className="text-[10px] tracking-[0.3em] text-game-subtext uppercase animate-fade-up"
            style={{ fontFamily: 'Funnel Sans, system-ui' }}
          >
            Mastermind · Number Edition
          </span>

          {/* Headline */}
          <h1
            className="text-[2.8rem] sm:text-[5rem] md:text-[6.5rem] leading-[0.9] tracking-tight animate-fade-up"
            style={{ fontFamily: 'Chewy, system-ui', animationDelay: '80ms' }}
          >
            <span className="text-hero-shine block">
              Can I Guess
            </span>
            <span className="text-game-text block">Your Number?</span>
          </h1>

          <p
            className="text-sm sm:text-base text-game-subtext max-w-sm leading-relaxed animate-fade-up"
            style={{ fontFamily: 'Funnel Sans, system-ui', animationDelay: '160ms' }}
          >
            Pick any 4-digit number — no repeated digits. The computer uses a smart
            filtering algorithm to deduce it, step by step.
          </p>

          {/* CTA buttons — always side by side */}
          <div
            className="flex flex-row flex-wrap gap-3 pt-1 animate-fade-up justify-center"
            style={{ animationDelay: '240ms' }}
          >
            <Link
              href="/game"
              className="btn-liquid-cta h-12 px-8 rounded-full text-sm font-semibold
                         flex items-center gap-2"
              style={{ fontFamily: 'Funnel Display, system-ui' }}
            >
              Play Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href="#how-to-play"
              className="h-12 px-8 rounded-full border border-game-border-md text-game-text/70 text-sm
                         hover:border-game-border-strong hover:text-game-text hover:bg-game-over
                         active:scale-95 transition-all duration-150
                         flex items-center justify-center"
              style={{ fontFamily: 'Funnel Sans, system-ui' }}
            >
              How it works
            </a>
          </div>
        </div>

        {/* Digit tile preview */}
        <div
          className="mt-16 sm:mt-20 flex gap-2.5 sm:gap-3.5 animate-fade-up"
          style={{ animationDelay: '380ms' }}
        >
          {previewDigits.map((d, i) => (
            <div
              key={i}
              className={`w-[68px] h-[84px] sm:w-20 sm:h-24 rounded-2xl border-2 flex items-center justify-center
                          transition-all duration-500 animate-float
                          ${d.known
                            ? 'border-game-border-strong bg-game-over-md'
                            : 'border-game-border bg-game-surface'
                          }`}
              style={{
                fontFamily: 'Chewy, system-ui',
                fontSize: '2.5rem',
                animationDelay: `${i * 200}ms`,
              }}
            >
              <span className={d.known ? 'text-game-text' : 'text-game-subtext/25'}>
                {d.digit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="flex justify-center pb-8 text-game-subtext/40 animate-fade-up relative z-10"
        style={{ animationDelay: '600ms' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
