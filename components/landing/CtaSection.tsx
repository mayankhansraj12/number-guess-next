import Link from 'next/link';
import { Logo } from '@/components/Logo';

export default function CtaSection() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 border-t border-game-border">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <span
          className="text-[10px] tracking-[0.28em] text-game-subtext uppercase font-medium"
          style={{ fontFamily: 'Funnel Sans, system-ui' }}
        >
          Ready?
        </span>
        <h2
          className="text-3xl sm:text-5xl text-game-text leading-tight"
          style={{ fontFamily: 'Chewy, system-ui' }}
        >
          Think you can stump the computer?
        </h2>
        <p
          className="text-sm text-game-subtext max-w-75 leading-relaxed"
          style={{ fontFamily: 'Funnel Sans, system-ui' }}
        >
          Pick your secret 4-digit number. See how many rounds the algorithm needs.
        </p>
        <Link
          href="/game"
          className="btn-liquid-cta h-12 px-10 rounded-full text-sm font-semibold
                     flex items-center justify-center gap-2 mt-2"
          style={{ fontFamily: 'Funnel Display, system-ui' }}
        >
          Start Game
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-game-border max-w-5xl mx-auto
                      flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Logo className="h-5 w-auto opacity-40" />
          <span
            className="text-sm text-game-subtext/50"
            style={{ fontFamily: 'Chewy, system-ui' }}
          >
            GuessIt
          </span>
        </div>
        <span
          className="text-[11px] text-game-subtext/40"
          style={{ fontFamily: 'Funnel Sans, system-ui' }}
        >
          © {new Date().getFullYear()} GuessIt. All rights reserved.
        </span>
      </div>
    </section>
  );
}
