'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from '@/styles/themes';

type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeContextValue {
  themeMode: ThemeMode;
  currentTheme: typeof lightTheme | typeof darkTheme;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps): React.ReactElement => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('auto');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get saved theme preference or default to auto
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'auto')) {
      setThemeModeState(savedTheme);
    }
  }, []);

  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getCurrentTheme = (): typeof lightTheme | typeof darkTheme => {
    if (themeMode === 'auto') {
      return getSystemTheme() === 'dark' ? darkTheme : lightTheme;
    }
    return themeMode === 'dark' ? darkTheme : lightTheme;
  };

  const setThemeMode = (mode: ThemeMode): void => {
    setThemeModeState(mode);
    localStorage.setItem('theme', mode);
  };

  const toggleTheme = (): void => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('auto');
    } else {
      setThemeMode('light');
    }
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const effectiveTheme = themeMode === 'auto' ? getSystemTheme() : themeMode;

    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode, mounted]);

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (themeMode !== 'auto' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (): void => {
      const root = document.documentElement;
      if (getSystemTheme() === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const currentTheme = getCurrentTheme();

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        currentTheme,
        setThemeMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeContextProvider');
  }
  return context;
};
