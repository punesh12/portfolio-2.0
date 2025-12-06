'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { StyledToggle, StyledToggleButton, StyledIcon } from './styles';

export const ThemeToggle = (): React.ReactElement => {
  const { themeMode, toggleTheme } = useTheme();

  const getIcon = (): string => {
    if (themeMode === 'light') return '☀️';
    if (themeMode === 'dark') return '🌙';
    return '💻'; // Auto/system
  };

  const getLabel = (): string => {
    if (themeMode === 'light') return 'Light';
    if (themeMode === 'dark') return 'Dark';
    return 'Auto';
  };

  return (
    <StyledToggle>
      <StyledToggleButton onClick={toggleTheme} aria-label={`Switch to ${getLabel()} theme`}>
        <StyledIcon>{getIcon()}</StyledIcon>
        <span>{getLabel()}</span>
      </StyledToggleButton>
    </StyledToggle>
  );
};
