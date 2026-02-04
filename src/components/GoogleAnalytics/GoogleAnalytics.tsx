import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { GA_TRACKING_ID, isGAEnabled, trackPageView } from '@/lib/analytics';

/**
 * Google Analytics component
 * Handles script loading and page view tracking
 */
export const GoogleAnalytics = (): React.ReactElement | null => {
  const router = useRouter();

  useEffect(() => {
    // Track page views on route changes
    const handleRouteChange = (url: string): void => {
      trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!isGAEnabled()) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
