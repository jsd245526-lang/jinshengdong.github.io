'use client';

import { usePathname } from 'next/navigation';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

const metadata = {
  title: '金圣栋 — 机械制造 × AI',
  description: '机械制造与人工智能交叉领域的个人作品集',
};

export { metadata };

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html
      lang="zh"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
      </body>
    </html>
  );
}
