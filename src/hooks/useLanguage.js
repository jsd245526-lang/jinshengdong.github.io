'use client';

import { createContext, useContext, useSyncExternalStore, useCallback } from 'react';
import { siteContent } from '@/data/content';

const LanguageContext = createContext(null);
const languageChangeEvent = 'languagechange';

function getLanguageSnapshot() {
  const saved = localStorage.getItem('lang');
  return saved === 'zh' || saved === 'en' ? saved : 'zh';
}

function subscribeToLanguage(callback) {
  const onStorage = (event) => {
    if (event.key === 'lang') callback();
  };

  window.addEventListener('storage', onStorage);
  window.addEventListener(languageChangeEvent, callback);

  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(languageChangeEvent, callback);
  };
}

export function LanguageProvider({ children }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    () => 'zh'
  );

  const setLanguage = useCallback((lang) => {
    localStorage.setItem('lang', lang);
    window.dispatchEvent(new Event(languageChangeEvent));
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
