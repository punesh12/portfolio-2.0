import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';

interface StyledComponentsProviderProps {
  children: ReactNode;
}

export const StyledComponentsProvider = ({
  children,
}: StyledComponentsProviderProps): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
