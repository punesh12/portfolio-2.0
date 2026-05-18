'use client';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '@/components/Typography/SectionHeading';

interface TimelineEntry {
  title: string;
  startMonth?: string;
  endMonth?: string;
  companyName?: string;
  location?: string;
  position?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [filledDots, setFilledDots] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!ref.current || height === 0) return;

    const newFilledDots = new Set<number>();

    dotRefs.current.forEach((dotRef, index) => {
      if (!dotRef || !ref.current) return;

      const dotRect = dotRef.getBoundingClientRect();
      const containerRect = ref.current.getBoundingClientRect();

      // Calculate the dot's position relative to the timeline container top
      const dotTopRelative = dotRect.top + dotRect.height / 2 - containerRect.top;
      // Calculate the current beam position based on scroll progress
      const beamPosition = latest * height;

      // Fill the dot only when the beam actually reaches or passes through it
      if (beamPosition >= dotTopRelative) {
        newFilledDots.add(index);
      }
    });

    setFilledDots(newFilledDots);
  });

  return (
    <div id="experience" className="w-full font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-12">
        <SectionHeading
          title="My Journey"
          description="5+ years across SaaS, fintech, and product engineering — from IC to leading a team of 6."
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-timeline-item
            className={`flex justify-start pt-6 md:gap-4 ${index === 0 ? 'md:pt-12' : 'md:pt-24'}`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  className={`h-4 w-4 rounded-full border transition-all duration-300 ${
                    filledDots.has(index)
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500 border-purple-500 dark:border-blue-500 p-0'
                      : 'bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 p-2'
                  }`}
                />
              </div>
              <div className="md:pl-20 flex flex-col">
                <h3
                  className={`hidden md:block text-xl md:text-4xl font-bold transition-all duration-300 whitespace-nowrap ${
                    filledDots.has(index)
                      ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'
                      : `text-neutral-500 dark:text-neutral-500 ${index === 0 ? 'opacity-70' : 'opacity-100'}`
                  }`}
                >
                  {item.title}
                </h3>
                {(item.startMonth || item.endMonth) && (
                  <p className="hidden md:block text-sm text-neutral-500 dark:text-neutral-400 mt-1 whitespace-nowrap">
                    {item.startMonth && item.endMonth
                      ? `${item.startMonth} - ${item.endMonth}`
                      : item.startMonth || item.endMonth}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="mb-4 md:mb-0">
                <h3
                  className={`md:hidden block text-xl text-left font-bold transition-all duration-300 whitespace-nowrap ${
                    filledDots.has(index)
                      ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'
                      : `text-neutral-500 dark:text-neutral-500 ${index === 0 ? 'opacity-70' : 'opacity-100'}`
                  }`}
                >
                  {item.title}
                </h3>
                {(item.startMonth || item.endMonth) && (
                  <p className="md:hidden block text-sm text-neutral-500 dark:text-neutral-400 mt-1 whitespace-nowrap">
                    {item.startMonth && item.endMonth
                      ? `${item.startMonth} - ${item.endMonth}`
                      : item.startMonth || item.endMonth}
                  </p>
                )}
              </div>
              {(item.companyName || item.position) && (
                <div className="mb-4 flex flex-col">
                  {item.position && (
                    <h4 className="hidden md:block text-2xl md:text-3xl font-bold text-black dark:text-white mb-1 leading-none">
                      {item.position}
                    </h4>
                  )}
                  {item.position && (
                    <h4 className="md:hidden block text-2xl font-bold text-black dark:text-white mb-1 leading-tight">
                      {item.position}
                    </h4>
                  )}
                  {item.companyName && (
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-normal italic leading-tight">
                      {item.companyName}
                      {item.location && <span className="ml-2">— {item.location}</span>}
                    </p>
                  )}
                </div>
              )}
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
