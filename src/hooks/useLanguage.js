'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { siteContent } from '@/data/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('zh');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'zh' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  }, []);

  const t = useCallback(
    (path) => {
      const keys = path.split('.');
      let value = siteContent[language];
      for (const key of keys) {
        if (value == null) return path;
        value = value[key];
      }
      return value ?? path;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
