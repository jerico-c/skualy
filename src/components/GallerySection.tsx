import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-skualy.jpg';
import aboutImage from '@/assets/about-skualy.jpg';
import foodImage from '@/assets/food-1.jpg';
import coffeeImage from '@/assets/coffee-1.jpg';
import villageImage from '@/assets/village-view.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Skualy dari luar dengan pemandangan sawah', span: 'col-span-2 row-span-2' },
  { src: coffeeImage, alt: 'Kopi latte art', span: 'col-span-1 row-span-1' },
  { src: foodImage, alt: 'Hidangan khas', span: 'col-span-1 row-span-1' },
  { src: villageImage, alt: 'Pemandangan desa Gambasan', span: 'col-span-2 row-span-1' },
  { src: aboutImage, alt: 'Interior Skualy', span: 'col-span-1 row-span-1' },
];

export const GallerySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-container bg-background"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <p className="caption mb-4 text-primary">Galeri</p>
          <h2 className="headline-section text-foreground mb-6">
            Momen di Skualy
          </h2>
          <p className="body-large text-muted-foreground">
            Setiap sudut menyimpan cerita, setiap hidangan adalah karya seni.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 + index * 0.15, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className={`${image.span} overflow-hidden rounded-sm group cursor-pointer`}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[280px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
