import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import heroImage from '@/assets/hero-skualy.jpg';
import aboutImage from '@/assets/about-skualy.jpg';
import foodImage from '@/assets/food-1.jpg';
import coffeeImage from '@/assets/coffee-1.jpg';
import villageImage from '@/assets/village-view.jpg';
import fotbarImage from '@/assets/fotbar.jpg';
import gazeboImage from '@/assets/gazebo.jpg';
import kolamrenangImage from '@/assets/kolamrenang.jpg';
import skualyFrontImage from '@/assets/skualy_front.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Skualy dari luar dengan pemandangan sawah', span: 'col-span-2 row-span-2' },
  { src: coffeeImage, alt: 'Kopi latte art', span: 'col-span-1 row-span-1' },
  { src: foodImage, alt: 'Hidangan khas', span: 'col-span-1 row-span-1' },
  { src: villageImage, alt: 'Pemandangan desa Gambasan', span: 'col-span-2 row-span-1' },
  { src: aboutImage, alt: 'Interior Skualy', span: 'col-span-1 row-span-1' },
  { src: skualyFrontImage, alt: 'Tampak depan Skualy', span: 'col-span-1 row-span-1' },
  { src: kolamrenangImage, alt: 'Kolam renang Skualy', span: 'col-span-2 row-span-1' },
  { src: gazeboImage, alt: 'Gazebo di Skualy', span: 'col-span-1 row-span-1' },
  { src: fotbarImage, alt: 'Spot foto bar Skualy', span: 'col-span-1 row-span-1' },
];

export const GallerySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 5);

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
          {visibleImages.map((image, index) => (
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

        {/* Show More/Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-sm text-sm tracking-wider uppercase text-foreground hover:bg-primary/5 transition-colors duration-300"
          >
            {showAll ? (
              <>
                <ChevronUp size={20} strokeWidth={1.5} />
                Tampilkan Lebih Sedikit
              </>
            ) : (
              <>
                <ChevronDown size={20} strokeWidth={1.5} />
                Lihat Semua Foto
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
