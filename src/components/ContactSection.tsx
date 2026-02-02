import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Gambasan, Selopampang',
    detail: 'Temanggung, Jawa Tengah',
  },
  {
    icon: Phone,
    label: 'Reservasi',
    value: '+62 85196204549',
    detail: 'WhatsApp tersedia',
  },
  {
    icon: Clock,
    label: 'Jam Buka',
    value: 'Senin - Minggu (Jumat Tutup)',
    detail: '08:00 – 17:00 WIB',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@skualy_gambasan',
    detail: 'Ikuti kami',
  },
];

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-container bg-secondary/30"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <p className="caption mb-4 text-primary">Kontak</p>
          <h2 className="headline-section text-foreground mb-6">
            Kunjungi Kami
          </h2>
          <p className="body-large text-muted-foreground">
            Kami menantikan kehadiran Anda untuk berbagi kehangatan 
            dan cita rasa khas Gambasan.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.1, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="caption mb-2">{item.label}</p>
              <h4 className="font-serif text-xl text-foreground mb-1">{item.value}</h4>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 md:mt-24"
        >
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.766490241163!2d110.18008197491564!3d-7.380046392629478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a830068d559a5%3A0x6b951772f82e072d!2sSkualy!5e0!3m2!1sen!2sid!4v1768806563968!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Skualy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
