'use client';

import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.15 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
