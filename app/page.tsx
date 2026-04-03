import HeroSection from '@/components/landing/HeroSection';
import HowToPlaySection from '@/components/landing/HowToPlaySection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CtaSection from '@/components/landing/CtaSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowToPlaySection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
