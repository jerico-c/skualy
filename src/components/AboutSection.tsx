import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-skualy.jpg';

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container bg-background"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <p className="caption mb-4 text-primary">Tentang Kami</p>
          <h2 className="headline-section text-foreground mb-8">
            Sebuah Pelarian ke
            <br />
            <span className="text-gradient-warm">Keindahan Alam</span>
          </h2>
        </motion.div>

        {/* Content Grid - Asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-sm">
              <div className="image-warm-overlay">
                <img
                  src={aboutImage}
                  alt="Interior Skualy Café dengan pencahayaan hangat"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 lg:pl-8"
          >
            <div className="space-y-6">
              <p className="body-large text-foreground/90 leading-relaxed">
                Tersembunyi di lereng hijau Gambasan, Skualy adalah tempat di mana 
                waktu berjalan lebih lambat dan setiap momen menjadi kenangan.
              </p>
              
              <p className="body-default text-muted-foreground leading-relaxed">
                Kami percaya bahwa makanan terbaik datang dari bahan-bahan segar 
                yang dipetik langsung dari alam sekitar. Di sini, tradisi kuliner 
                Jawa bertemu dengan sentuhan modern, menciptakan pengalaman 
                bersantap yang tak terlupakan.
              </p>

              <p className="body-default text-muted-foreground leading-relaxed">
                Setiap hidangan adalah cerita — tentang petani lokal yang merawat 
                tanahnya dengan cinta, tentang resep turun-temurun yang dijaga 
                dengan hormat, dan tentang keindahan sederhana kehidupan desa.
              </p>

              <div className="pt-8 border-t border-border/50">
                <p className="caption text-muted-foreground mb-2">Jam Operasional</p>
                <p className="font-serif text-lg text-foreground">
                  Setiap Hari · 08:00 – 21:00
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
