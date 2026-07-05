'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
