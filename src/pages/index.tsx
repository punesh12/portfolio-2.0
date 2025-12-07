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
  companyName?: string;
  position?: string;
  content: React.ReactNode;
}

const timelineData: TimelineEntry[] = [
  {
    title: '2023 - Present',
    position: 'Lead Engineer',
    companyName: 'Rapid Innovation LLP',
    content: (
      <div>
        <Typography size="14" weight="regular" as="p">
          Design complex, robust, responsive components and write test cases to guarantee software
          reliability. Document and optimize code quality while collaborating with design teams to
          improve guidelines for the frontend department.
        </Typography>
        <Typography size="14" weight="regular" as="p">
          Built structured workflows and rules with Cursor to maintain code quality and consistency.
          By integrating AI tools, I&apos;ve reduced test-writing time by up to 90%, cut down code
          review time by 80%, and saved 8-10 hours per sprint on debugging and research.
        </Typography>
      </div>
    ),
  },
  {
    title: '2021 - 2023',
    position: 'Software Engineer',
    companyName: 'Rapid Innovation LLP',
    content: (
      <div>
        <Typography size="14" weight="regular" as="p">
          Collaborated with UI/UX teams to create engaging interfaces. Communicated with smart
          contracts for blockchain DApps and integrated REST and GraphQL APIs.
        </Typography>
        <Typography size="14" weight="regular" as="p">
          Maintained an agile development mindset with a focus on designing reusable and responsive
          components for scalable applications.
        </Typography>
      </div>
    ),
  },
  {
    title: '2021',
    position: 'Frontend Developer',
    companyName: 'Alnitek Innovative Solutions',
    content: (
      <div>
        <Typography size="14" weight="regular" as="p">
          Worked on a chatbot builder application using React and Material UI for businesses and
          enterprises to integrate on their websites/apps.
        </Typography>
        <Typography size="14" weight="regular" as="p">
          Built a simple drag-and-drop interface allowing users to build, test, deploy, and analyze
          the behavior of integrated bots.
        </Typography>
      </div>
    ),
  },
  {
    title: '2019 - 2020',
    position: 'Web Developer (Internship)',
    companyName: 'Bitmap Technology',
    content: (
      <div>
        <Typography size="14" weight="regular" as="p">
          Built websites using React JS, HTML, and CSS. Gained foundational experience in web
          development and modern frontend technologies.
        </Typography>
        <Typography size="14" weight="regular" as="p">
          Worked on various client projects, learning best practices and industry standards for web
          development.
        </Typography>
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
        <link rel="icon" href="/favicon.ico" />
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
