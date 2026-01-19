import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import villageImage from '@/assets/village-view.jpg';

export const PhilosophySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-0 overflow-hidden"
    >
      {/* Full-width image with overlay */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={villageImage}
            alt="Pemandangan desa Gambasan saat matahari terbit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
        </motion.div>

        {/* Content overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl text-center"
          >
            <p className="caption text-primary-foreground/70 mb-6">Filosofi Kami</p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-light leading-relaxed mb-8">
              "Dari tanah yang sama tempat nenek moyang kami 
              <span className="italic"> menanam harapan</span>, 
              kami menyajikan cita rasa yang 
              <span className="italic"> menghubungkan generasi</span>."
            </h2>

            <div className="flex items-center justify-center space-x-4">
              <span className="w-12 h-px bg-primary-foreground/40" />
              <p className="text-sm tracking-widest text-primary-foreground/60 uppercase">
                Gambasan, Selopampang
              </p>
              <span className="w-12 h-px bg-primary-foreground/40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
