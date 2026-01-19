import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center px-6"
      >
        <p className="caption text-primary mb-4">Error 404</p>
        <h1 className="font-serif text-6xl md:text-8xl font-medium text-foreground mb-6">
          Halaman Tidak Ditemukan
        </h1>
        <p className="body-large text-muted-foreground mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <a 
          href="/" 
          className="inline-block font-serif text-lg text-primary hover:text-primary/80 transition-colors duration-500 nav-link"
        >
          Kembali ke Beranda
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
