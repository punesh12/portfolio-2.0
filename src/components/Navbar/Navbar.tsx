'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NAVIGATION_ITEMS } from '@/constants';
import { cn } from '@/lib/utils';

export const Navbar = (): React.ReactElement => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');
  const lastScrollY = useRef(0);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Hide when scrolling down (after 100px)
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map((item) => item.href.replace('#', ''));
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const handleInitialActive = (): void => {
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    handleInitialActive();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 w-full py-4 z-[100] flex justify-center backdrop-blur-sm pointer-events-none transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="max-w-[50vw] w-full mx-auto p-4 border border-border rounded-xl backdrop-blur-[24px] bg-white/5 dark:bg-black/5 overflow-hidden box-border max-md:max-w-[calc(100%-2rem)] max-md:px-4 max-md:py-2 pointer-events-auto">
        <div className="w-full flex items-center justify-between gap-6 box-border flex-nowrap min-w-0 max-md:gap-4">
          <Link
            href="/"
            className="text-lg font-semibold text-text-primary no-underline flex items-center gap-0 flex-shrink-0 whitespace-nowrap"
          >
            <span>P</span>
            <span className="relative">
              <span>unesh</span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-basic-blue via-basic-purple to-basic-pink" />
            </span>
          </Link>

          <div className="hidden md:flex items-baseline gap-6 flex-1 justify-center">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'no-underline lowercase px-1 py-2 rounded transition-all duration-200 flex items-baseline gap-1 relative',
                    isActive
                      ? 'text-base font-bold bg-gradient-to-r from-basic-blue via-basic-purple to-basic-pink bg-clip-text text-transparent pb-0'
                      : 'text-sm font-normal text-text-primary hover:font-bold',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-basic-blue via-basic-purple to-basic-pink" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0 min-w-0 max-md:gap-2">
            <a
              href="/Punesh_Borkar_Resume.pdf"
              download="Punesh_Borkar_Resume.pdf"
              className="flex items-center justify-center w-6 h-6 text-text-primary transition-colors duration-200 hover:text-basic-blue"
              aria-label="Download Resume"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-full h-full dark:brightness-0 dark:invert"
              >
                <rect width="100" height="100" fill="url(#pattern0_2930_2219)" />
                <defs>
                  <pattern
                    id="pattern0_2930_2219"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0_2930_2219" transform="scale(0.01)" />
                  </pattern>
                  <image
                    id="image0_2930_2219"
                    width="100"
                    height="100"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7ElEQVR4nO2asWoVQRhGPxQbQUxnJ2phJySdYGFtJYL2KjYKAQsbe0F8AiuLtBY+gW9gp43VFTG2gqCmEBxZsJBLcnfm3smeb2b/A9Plbk7OH5bdmSsFQRAEwfSkWFq1YiDyWjEQea0YiLwWPpC5k+geuIAZeA9cwAy8By5gBt4DFzAD74ELmIH3wAXMwHvgAmbgPWoInJL0VNIHSb8k7UvaVZt0MZDXR7zlvpN0S23R/ECujGw9/JB0Vu3Q/EDuZ+wHXVU7ND+QBxkD2dnA74Wkg4zfMbYWkm7MYSDXM2KcW9Ntu8Ig/l/Dw0b3A7k0EuHrBm4xkDU+/zAjxOUN/J5L+hm3rHxuj4T4Lem82qH5gZyQ9GbFQB6rLZofyMA1SX8OudY3SVtqiy4GMvBk6ToH/57AWqObgVxYus4ntUk3A7m4dJ3PapNudntfHXKtexX84k29gDOSHkn6uCLEW0k3JZ1cwy1eDDM/c1rSM0nfC/9D7xa6xUAyfn54jH2/QZS9Qr94Ux/hZYU4d+RLcwP5UmEge/KluYH0TqJ74AJm4D1wATPwHriAGXgPXMAMvAcuYAbeAxcwA++BC5iB98AFzMB74AJm4D1wATPwHriAGXgPXMAMvAcuYAbeo1Sg1hl3qnzANObV5QFV7SPVVOkIdnuuR7gxkAkoFah1xp0K19gtZ8yry1vWHEh0D1zADLwHLmAG3gMXMAPvgQuYgffABczAe+ACZuA9cAEz8B5ue1mLzBe4Uq8uXwyn2jrZL/wbZrt1EgOZALe9rMWat6zYy+qURPfABczAe+ACZuA9cAEz8B64gBl4D1zADLwHLmAG3gMXMAPvUSoQ38s6ZkoE4mtAExADaXggA/G9rGMGFzAD74ELmIH3wAXMwHvgAmbgPXABM/AeuIAZeA9cwAy8By5gBt4DFzAD74ELmIH3wAXMwHvgAmbgPXABM/AeuIAZeI+jtqtjKQaSDFcMRF4rBiKvFQRBEASakr8jSe+DOHzqlAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </a>
            <a
              href="https://github.com/punesh12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-6 h-6 text-text-primary transition-colors duration-200 hover:text-basic-blue"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/punesh-borkar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-6 h-6 text-text-primary transition-colors duration-200 hover:text-basic-blue"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-full h-full"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <div className="flex items-center gap-0 flex-shrink-0">
              <div className="w-px h-6 bg-border opacity-30 mx-2 flex-shrink-0 max-md:mx-1" />
              <ThemeToggle />
            </div>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="hidden max-md:flex flex-col gap-1 bg-transparent border-none cursor-pointer p-1 flex-shrink-0"
            >
              <span
                className={cn(
                  'w-6 h-0.5 bg-text-primary transition-all duration-300 block',
                  isMobileMenuOpen && 'rotate-45 translate-x-1.5 translate-y-1.5',
                )}
              />
              <span
                className={cn(
                  'w-6 h-0.5 bg-text-primary transition-all duration-300 block',
                  isMobileMenuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'w-6 h-0.5 bg-text-primary transition-all duration-300 block',
                  isMobileMenuOpen && '-rotate-45 translate-x-1.5 -translate-y-1.5',
                )}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="hidden max-md:flex flex-col pt-4 mt-4 border-t border-border">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={cn(
                    'no-underline lowercase px-1 py-2 rounded transition-all duration-200 flex items-center gap-1 relative',
                    isActive
                      ? 'text-base font-bold bg-gradient-to-r from-basic-blue via-basic-purple to-basic-pink bg-clip-text text-transparent'
                      : 'text-sm font-normal text-text-primary hover:font-bold',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-basic-blue via-basic-purple to-basic-pink" />
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
