'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typography } from '@/components/Typography';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Hero = (): React.ReactElement => {
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

  const y = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, reducedMotion ? 1 : 0.3]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-start pb-12 relative overflow-hidden max-md:min-h-[90vh] max-md:pb-8 max-md:justify-center"
    >
      <motion.div
        style={{
          y,
          opacity,
        }}
      >
        <div className="w-full flex flex-col items-start max-w-[800px] max-md:items-center max-md:text-center max-md:max-w-full">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mb-6 uppercase tracking-[2px] font-bold">
                <Typography
                  size="16"
                  weight="bold"
                  as="span"
                  className="md:text-lg bg-gradient-to-r from-basic-orange to-basic-red bg-clip-text text-transparent"
                >
                  LEAD ENGINEER
                </Typography>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="mb-8 flex flex-col gap-1 leading-[1.1]">
                <span className="block text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.2] bg-gradient-to-r from-basic-blue to-basic-purple bg-clip-text text-transparent">
                  Building beautiful
                </span>
                <span className="block text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.2] bg-gradient-to-r from-basic-pink to-basic-purple bg-clip-text text-transparent">
                  digital experiences
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="mb-8 max-w-[600px] text-text-secondary leading-[1.7] max-md:max-w-full max-md:mb-6">
                <Typography size="18" weight="regular" as="p" className="md:text-xl">
                  I craft modern web applications with a focus on user experience, performance, and
                  clean code. Passionate about creating interactive and engaging digital solutions.
                </Typography>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="flex gap-3 flex-wrap max-md:justify-center">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-6 py-2.5 rounded-lg no-underline transition-all duration-300 cursor-pointer inline-flex items-center justify-center font-medium text-sm bg-gradient-to-br from-basic-blue to-basic-purple text-basic-white border-none shadow-[0_2px_8px_rgba(0,122,255,0.15)] hover:bg-gradient-to-br hover:from-basic-purple hover:to-basic-pink hover:shadow-[0_4px_12px_rgba(175,82,222,0.25)] hover:-translate-y-0.5"
                >
                  <Typography size="14" weight="medium" as="span">
                    View Work
                  </Typography>
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    'px-6 py-2.5 rounded-lg no-underline transition-all duration-300 cursor-pointer inline-flex items-center justify-center font-medium text-sm border border-border bg-bg-main text-text-primary hover:bg-bg-hover hover:border-basic-blue hover:-translate-y-0.5',
                  )}
                >
                  <Typography size="14" weight="medium" as="span">
                    Get in Touch
                  </Typography>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
