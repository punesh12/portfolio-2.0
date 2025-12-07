'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Typography } from '@/components/Typography';
import { SectionTitle } from '@/components/Typography/SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const About = (): React.ReactElement => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
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

  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [30, -30]);

  return (
    <section id="about" ref={ref} className="py-12 relative">
      <motion.div
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <SectionTitle>About Me</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center max-md:gap-6">
          <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex flex-col gap-4">
              <Typography
                size="16"
                weight="regular"
                as="p"
                className="text-text-secondary leading-[1.6]"
              >
                I&apos;m a Lead Engineer passionate about creating beautiful, functional, and
                user-friendly web experiences. With expertise in React, Next.js, and TypeScript, I
                design complex, robust components and write comprehensive test cases to guarantee
                software reliability.
              </Typography>
              <Typography
                size="16"
                weight="regular"
                as="p"
                className="text-text-secondary leading-[1.6]"
              >
                I&apos;ve integrated AI tools into my workflow to boost development efficiency,
                reducing test-writing time by 90% and code review time by 80%. I believe in writing
                clean code, documenting thoroughly, and continuously optimizing for quality and
                performance.
              </Typography>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative w-full h-[400px] max-md:h-[300px] rounded-2xl overflow-hidden border border-border bg-bg-hover">
              {/* Grid pattern background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--border-color) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-basic-blue/5 via-transparent to-basic-purple/5" />

              {/* Animated gradient orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-basic-blue/20 to-basic-purple/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Code-inspired elements */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-xs">
                  {/* Brackets */}
                  <div className="absolute left-0 top-0 text-6xl font-mono text-basic-blue/20 dark:text-basic-purple/20">
                    {'{'}
                  </div>
                  <div className="absolute right-0 bottom-0 text-6xl font-mono text-basic-blue/20 dark:text-basic-purple/20">
                    {'}'}
                  </div>

                  {/* Center content */}
                  <div className="relative z-10 flex flex-col items-center justify-center pt-12 pb-12">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-basic-blue to-basic-purple p-0.5 mb-4">
                      <div className="w-full h-full rounded-full bg-bg-main flex items-center justify-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-basic-blue dark:text-basic-purple"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm font-mono text-text-secondary text-center">
                      Lead Engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
