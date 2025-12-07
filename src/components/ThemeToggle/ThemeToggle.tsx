'use client';

import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = (): React.ReactElement => {
  const { themeMode, toggleTheme } = useTheme();

  const getLabel = (): string => {
    if (themeMode === 'light') return 'Light';
    if (themeMode === 'dark') return 'Dark';
    return 'Auto';
  };

  const renderIcon = (): React.ReactElement => {
    if (themeMode === 'light') {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    }
    if (themeMode === 'dark') {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    }
    // Auto/system - laptop icon
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="2" y1="16" x2="22" y2="16" />
        <line x1="6" y1="20" x2="6" y2="20.01" />
        <line x1="10" y1="20" x2="10" y2="20.01" />
        <line x1="14" y1="20" x2="14" y2="20.01" />
        <line x1="18" y1="20" x2="18" y2="20.01" />
      </svg>
    );
  };

  return (
    <div className="flex items-center justify-center flex-shrink-0">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${getLabel()} theme`}
        className="flex items-center justify-center p-1 rounded-lg bg-transparent text-text-primary border-none transition-all duration-200 w-8 h-8 hover:bg-bg-hover active:scale-95"
      >
        {renderIcon()}
      </button>
    </div>
  );
};
