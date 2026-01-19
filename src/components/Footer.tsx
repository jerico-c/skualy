import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:hello@skualy.id', label: 'Email' },
];

export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={footerRef}
      className="bg-foreground text-primary-foreground py-16 md:py-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <h3 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Skualy
          </h3>
          
          <p className="font-serif text-lg italic text-primary-foreground/70 mb-8">
            The Beauty of Gambasan
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-primary-foreground/30 mb-8" />

          {/* Address */}
          <div className="mb-8">
            <p className="text-sm tracking-widest uppercase text-primary-foreground/60 mb-2">
              Resto & Café
            </p>
            <p className="text-primary-foreground/80">
              Gambasan, Selopampang
            </p>
            <p className="text-primary-foreground/60">
              Temanggung, Jawa Tengah
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-500"
                aria-label={social.label}
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs tracking-widest uppercase text-primary-foreground/40">
            © {new Date().getFullYear()} Skualy. Semua hak dilindungi.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
