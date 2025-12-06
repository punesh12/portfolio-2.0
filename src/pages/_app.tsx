import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '@/contexts/ThemeContext';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;
