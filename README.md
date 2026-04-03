# GuessIt — Mastermind Number Game

Think of any 4-digit number (no repeated digits). GuessIt's algorithm will deduce it in a handful of guesses using elimination logic — just like Mastermind, but with numbers.

---

## How the game works

1. **You think of a number** — any 4-digit number where no digit repeats (e.g. `3791`).
2. **The computer makes a guess** — a random valid starting guess.
3. **You give feedback** — tell it how many digits are correct (right digit, wrong position) and how many are in the exact right position.
4. **Repeat** — the algorithm filters out all impossible numbers and picks the next best guess.
5. **Win** — the computer cracks your number, usually in 4–6 attempts.

The solver knows 4,536 valid numbers and narrows them down purely from your feedback.

---

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v4** with CSS custom properties for light/dark theming
- **All logic runs client-side** — no server, no database, no login

---

## Local setup

### Prerequisites

- Node.js 18+ (or Bun)
- npm / yarn / pnpm / bun

### Install and run

```bash
# Clone the repo
git clone https://github.com/mayankhansraj12/number-guess-next.git
cd number-guess-next

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## Deploy to Vercel

GuessIt is a standard Next.js app — Vercel deploys it with zero configuration.

### Steps

1. **Push your code to GitHub** (or GitLab / Bitbucket).

2. **Go to [vercel.com](https://vercel.com)** and sign in (free account works).

3. Click **"Add New → Project"** and import your repository.

4. Vercel auto-detects Next.js. Leave all settings as default and click **Deploy**.

5. Your site is live at `https://your-project.vercel.app` in ~60 seconds.

### Custom domain (optional)

In Vercel's project dashboard → **Domains** → add your domain and follow the DNS instructions.

### Environment variables

None required — the app is fully client-side with no secrets.

---

## Project structure

```
app/
  page.tsx          — Landing page
  game/page.tsx     — Game page
  layout.tsx        — Root layout, fonts, theme
  globals.css       — Tailwind v4 + CSS tokens + custom classes

components/
  landing/          — HeroSection, FeaturesSection, HowToPlaySection, CtaSection
  game/             — GameClient, FeedbackForm, GuessDisplay, HistoryTable, NumberSpinner, StatusBar
  Logo.tsx          — Site logo
  ThemeProvider.tsx — Light/dark context
  ThemeToggle.tsx   — Animated day/night toggle

lib/
  game.ts           — Core solver: ALL_VALID, filterPossibilities, recomputeFromHistory

hooks/
  useGameState.ts   — useReducer game state

types/
  game.ts           — TypeScript types
```

---

© 2025 GuessIt. All rights reserved.
