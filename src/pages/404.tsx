import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ParallaxBackground } from '@/components/Parallax';
import { Typography } from '@/components/Typography';
import { SITE_NAME } from '@/constants';
import { cn } from '@/lib/utils';

const Custom404: NextPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Page not found — {SITE_NAME}</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <ParallaxBackground />
      <Navbar />
      <main
        className={cn(
          'relative z-10 flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center',
          'mx-auto max-w-lg px-6 pb-16 pt-28 text-center',
        )}
      >
        <p
          className="mb-4 bg-gradient-to-r from-basic-blue via-basic-purple to-basic-pink bg-clip-text text-[clamp(4rem,15vw,8rem)] font-bold leading-none text-transparent"
          aria-hidden="true"
        >
          404
        </p>
        <Typography size="24" weight="semiBold" as="h1" className="mb-3 text-text-primary">
          This page does not exist
        </Typography>
        <Typography size="16" weight="regular" as="p" className="mb-10 text-text-secondary">
          The link may be broken or the page may have been removed. Head back to the portfolio home.
        </Typography>
        <Link
          href="/"
          className={cn(
            'inline-flex items-center justify-center rounded-xl border border-border px-6 py-3',
            'text-sm font-semibold text-text-primary no-underline transition-colors',
            'backdrop-blur-sm bg-white/5 hover:border-basic-blue hover:text-basic-blue dark:bg-black/5',
          )}
        >
          Back to home
        </Link>
      </main>
    </>
  );
};

export default Custom404;
