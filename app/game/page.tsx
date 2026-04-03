import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = { title: 'Play — GuessIt' };

// Game state uses Math.random() for first guess — disable SSR to avoid hydration mismatch
const GameClient = dynamic(() => import('@/components/game/GameClient'), { ssr: false });

export default function GamePage() {
  return <GameClient />;
}
