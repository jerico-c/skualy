import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-skualy.jpg';

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with slow zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src={heroImage}
            alt="Skualy Resto & Café overlooking Gambasan village"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Warm cinematic overlay */}
        <div className="absolute inset-0 gradient-hero-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="caption text-primary-foreground/80 mb-6"
          >
            Resto & Café
          </motion.p>

          {/* Main Title */}
          <h1 className="headline-display text-primary-foreground mb-8">
            Skualy
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light italic tracking-wide"
          >
            The Beauty of Gambasan
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-8 text-sm tracking-widest text-primary-foreground/70 uppercase"
          >
            Selopampang · Temanggung
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-500"
          aria-label="Scroll to content"
        >
          <div className="scroll-indicator">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </motion.button>
      </div>
    </section>
  );
};
