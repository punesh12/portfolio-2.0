'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ParallaxBackground = (): React.ReactElement => {
  const { scrollY } = useScroll();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent): void => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const topY = useTransform(scrollY, [0, 1000], [0, reducedMotion ? 0 : 200]);
  const bottomY = useTransform(scrollY, [0, 1000], [0, reducedMotion ? 0 : -150]);

  return (
    <>
      {/* <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] opacity-100 blur-[100px] rounded-b-[50%] pointer-events-none z-0 will-change-transform"
        style={{
          y: topY,
          background:
            'radial-gradient(ellipse at top, rgba(255, 232, 199, 0.3), rgba(255, 205, 27, 0.25))',
        }}
      /> */}
      {/* <motion.div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] opacity-100 blur-[100px] rounded-t-[50%] pointer-events-none z-0 will-change-transform"
        style={{
          y: bottomY,
          background:
            'linear-gradient(to right, rgba(173, 216, 230, 0.25), rgba(230, 230, 250, 0.22), rgba(255, 192, 203, 0.25), rgba(255, 218, 185, 0.22))',
        }}
      /> */}
    </>
  );
};
