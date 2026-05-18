import { NextPage } from 'next';
import Head from 'next/head';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ParallaxBackground } from '@/components/Parallax';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Typography } from '@/components/Typography';
import { Timeline } from '@/components/ui/timeline';
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants';

interface TimelineEntry {
  title: string;
  startMonth?: string;
  endMonth?: string;
  companyName?: string;
  location?: string;
  position?: string;
  content: React.ReactNode;
}

const timelineData: TimelineEntry[] = [
  {
    title: '2023 - 2026',
    startMonth: 'April 2023',
    endMonth: 'January 2026',
    position: 'Lead Engineer',
    companyName: 'Rapid Innovation LLP',
    location: 'Remote',
    content: (
      <div className="space-y-2 text-text-primary">

        <div>
          <Typography size="14" weight="regular" as="span">
            Architected a reusable component system —{' '}
            <strong className="font-bold text-text-primary">40%</strong> fewer architecture
            inconsistencies and <strong className="font-bold text-text-primary">40%</strong> less
            repetitive development effort across product workstreams.
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Drove a{' '}
            <strong className="font-bold text-text-primary">45% reduction in UI bugs</strong>{' '}
            through proactive monitoring, pattern-level debugging, and systematic component audits.
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Established <strong className="font-bold text-text-primary">Jest & RTL</strong>{' '}
            standards and <strong className="font-bold text-text-primary">WCAG 2.1</strong>{' '}
            accessibility; recovered{' '}
            <strong className="font-bold text-text-primary">30–35 hours per sprint</strong> with
            AI-assisted workflows (Copilot, Cursor, Claude) and cut PR merge time by{' '}
            <strong className="font-bold text-text-primary">30%</strong> through mentorship of 3
            junior engineers.
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: '2021 - 2023',
    startMonth: 'June 2021',
    endMonth: 'April 2023',
    position: 'Software Engineer',
    companyName: 'Rapid Innovation LLP',
    location: 'Remote',
    content: (
      <div className="space-y-2 text-text-primary">
        <div>
          <Typography size="14" weight="regular" as="span">
            Designed and shipped composable{' '}
            <strong className="font-bold text-text-primary">React & TypeScript</strong> UI
            components — several became foundational to the later team component system.
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Owned end-to-end <strong className="font-bold text-text-primary">GraphQL & REST</strong>{' '}
            integration — query design, error handling, loading states, and client-side caching.
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Introduced <strong className="font-bold text-text-primary">Redux Toolkit</strong>{' '}
            patterns adopted team-wide; contributed Jest & RTL tests and resolved production
            incidents with architectural fixes.
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: '2021',
    startMonth: 'April 2021',
    endMonth: 'May 2021',
    position: 'Frontend Developer',
    companyName: 'Alnitek Innovative Solutions',
    location: 'Remote',
    content: (
      <div className="space-y-2 text-text-primary">
        <div>
          <Typography size="14" weight="regular" as="span">
            Built a{' '}
            <strong className="font-bold text-text-primary">
              drag-and-drop chatbot workflow builder
            </strong>{' '}
            in React and Material UI — zero-code interactions for non-technical users, reducing
            setup time and improving onboarding.
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: '2019 - 2020',
    startMonth: 'June 2019',
    endMonth: 'May 2020',
    position: 'Web Developer · Internship',
    companyName: 'Bitmap Technology',
    location: 'Pune, M.H.',
    content: (
      <div className="space-y-2 text-text-primary">
        <div>
          <Typography size="14" weight="regular" as="span">
            Developed responsive, cross-browser websites with{' '}
            <strong className="font-bold text-text-primary">
              React.js, HTML5, CSS3, and JavaScript
            </strong>{' '}
            — establishing component thinking and responsive design fundamentals used throughout
            later roles.
          </Typography>
        </div>
      </div>
    ),
  },
];

const Home: NextPage = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <ParallaxBackground />
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Hero />
        <About />
        <Timeline data={timelineData} />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
