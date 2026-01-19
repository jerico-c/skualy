import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { MenuSection } from '@/components/MenuSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/GrainOverlay';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GrainOverlay />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
