'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
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

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (themeMode !== 'auto' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (): void => {
      // Force re-render when system theme changes by updating state
      setMounted((prev) => !prev);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const currentTheme = getCurrentTheme();
  const mergedTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      ...currentTheme,
      // Make theme-specific colors available directly
      mainBg: currentTheme.mainBg,
      hoverBg: currentTheme.hoverBg,
      navBg: currentTheme.navBg,
      border: currentTheme.border,
      lightGray: currentTheme.lightGray,
      primaryText: currentTheme.primaryText,
      gray100: currentTheme.gray100,
      text: currentTheme.primaryText,
      textSecondary: currentTheme.lightGray,
    },
    // Ensure all theme properties are available
    fonts: theme.fonts,
    gradients: theme.gradients,
    breakpoints: theme.breakpoints,
    spacing: theme.spacing,
  };

  // Always provide theme, even during SSR to prevent undefined errors
  // Use light theme as default during SSR
  const ssrTheme = !mounted
    ? {
        ...theme,
        colors: {
          ...theme.colors,
          ...lightTheme,
          mainBg: lightTheme.mainBg,
          hoverBg: lightTheme.hoverBg,
          navBg: lightTheme.navBg,
          border: lightTheme.border,
          lightGray: lightTheme.lightGray,
          primaryText: lightTheme.primaryText,
          gray100: lightTheme.gray100,
        },
        fonts: theme.fonts,
        gradients: theme.gradients,
        breakpoints: theme.breakpoints,
        spacing: theme.spacing,
      }
    : mergedTheme;

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        currentTheme,
        setThemeMode,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={ssrTheme as any}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
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
