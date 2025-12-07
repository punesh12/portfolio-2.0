'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Typography } from '@/components/Typography';
import { cn } from '@/lib/utils';

export interface TimelineEntry {
  title: string;
  content: ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isActive: boolean;
  reducedMotion: boolean;
}

const TimelineItem = ({
  entry,
  index,
  isActive,
  reducedMotion,
}: TimelineItemProps): React.ReactElement => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start center', 'end center'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reducedMotion ? [1, 1, 1] : [0.4, 1, 0.4],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reducedMotion ? [1, 1, 1] : [0.96, 1, 0.96],
  );

  return (
    <div
      ref={itemRef}
      className={cn(
        'relative mb-12 pl-8 min-h-[200px] max-md:pl-6 max-md:mb-8 max-md:min-h-[150px]',
      )}
    >
      <div
        className={cn(
          'absolute -left-[10px] top-3 w-5 h-5 rounded-full z-[3] transition-all duration-300 max-md:-left-2 max-md:w-4 max-md:h-4',
          isActive
            ? 'bg-gradient-to-br from-basic-blue to-basic-purple border-[3px] border-transparent shadow-[0_0_20px_rgba(175,82,222,0.6),0_0_0_4px_white] max-md:border-2'
            : 'bg-basic-white border-[3px] border-border shadow-[0_0_0_2px_white] max-md:border-2',
        )}
      />
      <motion.div
        style={{
          opacity,
          scale,
        }}
      >
        <div className="bg-bg-hover border border-border rounded-2xl p-8 transition-all duration-300 relative z-[2] max-md:p-6">
          <div className="mb-4 text-text-primary">
            <Typography size="24" weight="bold" as="h3" className="md:text-[28px]">
              {entry.title}
            </Typography>
          </div>
          <div className="mt-4 text-text-secondary leading-[1.7]">{entry.content}</div>
        </div>
      </motion.div>
    </div>
  );
};

export const Timeline = ({ data }: TimelineProps): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent): void => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(Math.floor(latest * data.length), data.length - 1);
      setActiveIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress, data.length]);

  const beamHeight = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0%', '0%'] : ['10%', '100%'],
  );

  return (
    <section id="experience" className="py-12 px-4 max-w-[1440px] mx-auto relative">
      <div className="relative mb-12">
        <div className="sticky top-[100px] z-10 bg-bg-main/90 backdrop-blur-[10px] bg-gradient-to-b from-bg-main/90 to-transparent py-6 max-md:top-20 max-md:py-4">
          <Typography size="32" weight="bold" as="h2" className="mb-2 text-text-primary">
            Work Experience
          </Typography>
          <Typography size="16" weight="regular" as="p" className="text-text-secondary">
            A timeline of my professional journey
          </Typography>
        </div>
      </div>

      <div ref={containerRef} className="relative pl-12 pt-6 max-md:pl-8">
        <motion.div
          className="absolute left-8 top-0 w-[3px] bg-gradient-to-b from-basic-blue via-basic-purple to-basic-pink rounded-sm z-[1] origin-top shadow-[0_0_10px_rgba(175,82,222,0.5)] max-md:left-4 max-md:w-[2px]"
          style={{
            height: beamHeight,
          }}
        />

        {data.map((entry, index) => (
          <TimelineItem
            key={index}
            entry={entry}
            index={index}
            isActive={index === activeIndex}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  );
};
