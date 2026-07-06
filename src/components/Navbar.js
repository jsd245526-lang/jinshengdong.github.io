'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { path: '/', key: 'home' },
  { path: '/projects', key: 'projects' },
  { path: '/resume', key: 'resume' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [menuOpenPath, setMenuOpenPath] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuOpen = menuOpenPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* 左侧：名字 */}
          <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-gradient">金圣栋</span>
          </Link>

          {/* 右侧：桌面端导航 */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, key }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {t(`nav.${key}`)}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: 'var(--color-glass)' }}
                      layoutId="navbar-active"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-3">
              <LanguageToggle />
            </div>
          </div>

          {/* 右侧：移动端汉堡按钮 */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpenPath(menuOpen ? null : pathname)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-px rounded-full"
                style={{ background: 'var(--color-text-primary)' }}
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-5 h-px rounded-full"
                style={{ background: 'var(--color-text-primary)' }}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-px rounded-full"
                style={{ background: 'var(--color-text-primary)' }}
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'var(--color-bg-primary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ path, key }, i) => {
              const isActive = pathname === path;
              return (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                >
                  <Link
                    href={path}
                    onClick={() => setMenuOpenPath(null)}
                    className={`text-2xl font-semibold transition-colors ${
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
                    }`}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
