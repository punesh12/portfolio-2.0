import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components/Layout/Layout';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Typography } from '@/components/Typography';
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants';

const Home: NextPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <ThemeToggle />
        </div>
        <Typography size="32" weight="bold" as="h1">
          Welcome to My Portfolio
        </Typography>
        <Typography size="16" weight="regular" as="p">
          Frontend Engineer Portfolio
        </Typography>
      </Layout>
    </>
  );
};

export default Home;
