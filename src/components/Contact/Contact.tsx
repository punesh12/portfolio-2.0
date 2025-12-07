'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import messageIcon from '@/assets/projectImages/message-icon.png';
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

const SpeechBubble = ({
  className,
  gradientFrom,
  gradientTo,
  delay = 0,
  id,
}: {
  className?: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
  id: string;
}): React.ReactElement => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
      </defs>
      <path
        d="M20 20C20 15.5817 23.5817 12 28 12H72C76.4183 12 80 15.5817 80 20V60C80 64.4183 76.4183 68 72 68H48L32 84V68H28C23.5817 68 20 64.4183 20 60V20Z"
        fill={`url(#${id})`}
        className="drop-shadow-lg"
      />
    </svg>
  </motion.div>
);

export const Contact = (): React.ReactElement => {
  return (
    <section id="contact" className="py-12 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <SectionTitle>Get In Touch</SectionTitle>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 w-[80%] mx-auto rounded-3xl bg-gradient-to-br from-bg-hover/40 via-bg-main/60 to-bg-hover/30 dark:from-bg-hover/20 dark:via-bg-main/40 dark:to-bg-hover/15 backdrop-blur-sm border border-border/50 dark:border-transparent p-8 md:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch relative z-10">
            {/* Left Side - Content */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-basic-orange to-basic-red bg-clip-text text-transparent">
                    Say
                  </span>{' '}
                  <span className="bg-gradient-to-r from-basic-pink to-basic-purple bg-clip-text text-transparent">
                    hi!
                  </span>
                </h2>
                <Typography
                  size="16"
                  weight="regular"
                  as="p"
                  className="text-text-secondary leading-relaxed max-w-md"
                >
                  Want to create something awesome? Or, you have any query? Drop an email or connect
                  on LinkedIn.
                </Typography>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/punesh-borkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 no-underline transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-center justify-center w-8 h-8">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[#0077B5] dark:text-[#0A66C2] group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-[#0077B5] dark:text-[#0A66C2] font-medium text-base group-hover:underline">
                    linkedin
                  </span>
                </a>

                <a
                  href="mailto:punesh12@gmail.com"
                  className="group flex items-center gap-3 no-underline transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-center justify-center w-8 h-8">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-basic-pink group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </div>
                  <span className="text-basic-pink font-medium text-base group-hover:underline">
                    punesh12@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side - Message Icon */}
            <div className="relative hidden md:flex items-center justify-center h-full min-h-[200px] self-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-full h-full max-w-[300px] max-h-[300px] flex items-center justify-center"
              >
                <Image
                  src={messageIcon}
                  alt="Message icon"
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
