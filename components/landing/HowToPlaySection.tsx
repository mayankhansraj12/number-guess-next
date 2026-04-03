const steps = [
  {
    n: '01',
    title: 'Pick your number',
    desc: 'Think of any 4-digit number — each digit must be unique. For example: 5 2 8 1.',
  },
  {
    n: '02',
    title: 'The computer opens',
    desc: "It starts with a randomly chosen first guess displayed on screen.",
  },
  {
    n: '03',
    title: 'How many correct digits?',
    desc: 'Count how many digits in the guess appear anywhere in your number (position doesn\'t matter).',
  },
  {
    n: '04',
    title: 'How many correct positions?',
    desc: 'Count how many digits are both the right digit AND in the exact right slot.',
  },
  {
    n: '05',
    title: 'The pool narrows',
    desc: 'Your feedback eliminates hundreds of candidates. The computer makes its next best guess.',
  },
  {
    n: '06',
    title: 'Repeat until solved',
    desc: 'Keep giving feedback. See how few rounds it takes for the algorithm to crack your number.',
  },
];

export default function HowToPlaySection() {
  return (
    <section id="how-to-play" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-game-border">
      <div className="max-w-2xl mx-auto">
        <div className="mb-14">
          <span className="text-[10px] tracking-[0.28em] text-game-accent font-semibold uppercase">
            Rules
          </span>
          <h2
            className="mt-2.5 text-3xl sm:text-4xl text-game-text leading-tight"
            style={{ fontFamily: 'Chewy, system-ui' }}
          >
            How to Play
          </h2>
        </div>

        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <li
              key={i}
              className="group flex gap-5 sm:gap-7 items-start py-5 border-b border-game-border last:border-0
                         hover:-mx-4 hover:px-4 hover:rounded-xl hover:bg-game-over transition-all duration-200"
            >
              {/* Step number */}
              <span
                className="shrink-0 text-[11px] font-mono text-game-accent/40 group-hover:text-game-accent
                           transition-colors duration-200 pt-0.5 w-6 text-right leading-snug"
              >
                {step.n}
              </span>

              <div className="pt-0.5">
                <h3
                  className="text-sm font-semibold text-game-text group-hover:text-game-accent
                             transition-colors duration-200"
                  style={{ fontFamily: 'Funnel Display, system-ui' }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-1 text-sm text-game-subtext leading-relaxed"
                  style={{ fontFamily: 'Funnel Sans, system-ui' }}
                >
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
