'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { path: '/', key: 'home', index: '01' },
  { path: '/projects', key: 'projects', index: '02' },
  { path: '/resume', key: 'resume', index: '03' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [menuOpenPath, setMenuOpenPath] = useState(null);
  const menuOpen = menuOpenPath === pathname;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--rule)] bg-[color:rgba(241,239,232,0.96)]">
        <div className="dossier-shell h-20 flex items-center justify-between gap-6">
          <Link href="/" className="min-w-0">
            <span className="block font-bold leading-none">金圣栋</span>
            <span className="technical-note block mt-1 truncate">Mechanical Engineering × Applied AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`min-h-11 px-3 flex items-center gap-2 text-sm border-b-2 transition-colors ${
                  pathname === item.path
                    ? 'border-[var(--mechanical)] text-[var(--graphite)]'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--graphite)]'
                }`}
              >
                <span className="font-mono text-[10px]">{item.index}</span>
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <div className="ml-4"><LanguageToggle /></div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              className="min-w-11 min-h-11 border border-[var(--rule)] font-mono text-xs"
              onClick={() => setMenuOpenPath(menuOpen ? null : pathname)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-[var(--paper)] pt-28 px-5 md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
          >
            <div className="dossier-shell">
              <p className="technical-note mb-8">Navigation / {pathname}</p>
              <div className="border-t-2 border-[var(--graphite)]">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMenuOpenPath(null)}
                    className="min-h-16 flex items-center gap-5 border-b border-[var(--rule)] text-xl"
                  >
                    <span className="font-mono text-xs text-[var(--mechanical)]">{item.index}</span>
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
