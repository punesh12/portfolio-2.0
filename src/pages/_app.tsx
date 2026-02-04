import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { ThemeContextProvider } from '@/contexts/ThemeContext';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <GoogleAnalytics />
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
};

export default App;
