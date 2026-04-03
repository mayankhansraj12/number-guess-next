/* GuessIt logo — uses the actual PNG; inverts automatically in dark mode */
export function Logo({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/logoguessit.png"
      alt="GuessIt"
      className={`${className} dark:invert`}
    />
  );
}
