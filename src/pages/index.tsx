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
    title: '2023 - Present',
    startMonth: 'April 2023',
    endMonth: 'Present',
    position: 'Lead Engineer',
    companyName: 'Rapid Innovation LLP',
    location: 'Remote',
    content: (
      <div className="space-y-2 text-text-primary">
        <div>
          <Typography size="14" weight="regular" as="span">
            Architected large-scale React applications and frontend systems, reducing architecture
            inconsistencies by <strong className="font-bold text-text-primary">40%</strong> and
            improving long-term maintainability
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Led frontend engineering across design reviews, code reviews, architecture decisions,
            and developer mentoring, reducing UI bugs by{' '}
            <strong className="font-bold text-text-primary">45%</strong> and improving PR merge time
            by <strong className="font-bold text-text-primary">30%</strong>
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Implemented a <strong className="font-bold text-text-primary">Figma MCP</strong>–based
            design-to-code pipeline, enabling pixel-perfect UI and reducing design rework by{' '}
            <strong className="font-bold text-text-primary">35%</strong>
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Integrated AI tools (
            <strong className="font-bold text-text-primary">Cursor, Copilot, ChatGPT</strong>) into{' '}
            the development lifecycle, saving{' '}
            <strong className="font-bold text-text-primary">
              ~30–35 engineering hours per sprint
            </strong>
            , reducing test-writing time by{' '}
            <strong className="font-bold text-text-primary">90%</strong> and PR review time by{' '}
            <strong className="font-bold text-text-primary">60%</strong>
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
            Delivered highly interactive frontend features by collaborating with{' '}
            <strong className="font-bold text-text-primary">UI/UX teams</strong>, improving design
            consistency and user experience
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Built blockchain-enabled{' '}
            <strong className="font-bold text-text-primary">DApps and NFT platforms</strong> by
            integrating{' '}
            <strong className="font-bold text-text-primary">
              smart contracts, REST APIs, and GraphQL
            </strong>
            , enhancing data reliability and app performance
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Developed scalable, responsive, reusable components with an{' '}
            <strong className="font-bold text-text-primary">Agile mindset</strong>, improving
            developer velocity and reducing rework
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
            Engineered a{' '}
            <strong className="font-bold text-text-primary">
              no-code chatbot builder platform
            </strong>{' '}
            using <strong className="font-bold text-text-primary">React and Material UI</strong>,
            allowing businesses to build and deploy chatbots without technical expertise
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Implemented{' '}
            <strong className="font-bold text-text-primary">drag-and-drop workflows</strong> to
            simplify bot creation, reducing setup time for users
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Delivered end-to-end chatbot lifecycle features covering{' '}
            <strong className="font-bold text-text-primary">
              build, test, deployment, and performance analytics
            </strong>
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: '2019 - 2020',
    startMonth: 'June 2019',
    endMonth: 'May 2020',
    position: 'Web Developer (Internship)',
    companyName: 'Bitmap Technology',
    location: 'Pune, M.H.',
    content: (
      <div className="space-y-2 text-text-primary">
        <div>
          <Typography size="14" weight="regular" as="span">
            Built websites using{' '}
            <strong className="font-bold text-text-primary">React.js, HTML, and CSS</strong>
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Gained foundational experience in web development and{' '}
            <strong className="font-bold text-text-primary">modern frontend technologies</strong>
          </Typography>
        </div>
        <div>
          <Typography size="14" weight="regular" as="span">
            Worked on various client projects, learning{' '}
            <strong className="font-bold text-text-primary">
              best practices and industry standards
            </strong>{' '}
            for web development
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
