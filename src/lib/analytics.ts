/**
 * Google Analytics utility functions
 * Handles page view tracking and custom events
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '';

/**
 * True when a Measurement ID is configured (safe on server and client).
 */
export const isGAConfigured = (): boolean => GA_TRACKING_ID !== '';

/**
 * True when GA can run in the browser (configured + window).
 */
export const isGAEnabled = (): boolean => {
  return typeof window !== 'undefined' && isGAConfigured();
};

/**
 * Initialize Google Analytics
 * This function is called when the GA script loads
 */
export const initGA = (): void => {
  if (!isGAEnabled()) {
    return;
  }

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]): void {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    page_path: window.location.pathname,
  });
};

/**
 * Track a page view
 * @param url - The URL of the page being viewed
 */
export const trackPageView = (url: string): void => {
  if (!isGAEnabled() || typeof window.gtag === 'undefined') {
    return;
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

/**
 * Track a custom event
 * @param action - The action being tracked (e.g., 'click', 'download')
 * @param category - The category of the event (e.g., 'button', 'link')
 * @param label - Optional label for the event
 * @param value - Optional numeric value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
): void => {
  if (!isGAEnabled() || typeof window.gtag === 'undefined') {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
