'use client';

import {
  IconArrowWaveRightUp,
  IconBrandGithub,
  IconCode,
  IconExternalLink,
  IconLink,
  IconStars,
} from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import stellarGalaxyCover from '@/assets/projectImages/Stellar-galaxy-cover.png';
import bharatlinksImage from '@/assets/projectImages/bharatlinks.png';
import mockhubImage from '@/assets/projectImages/mockhub.png';
import portfolioImage from '@/assets/projectImages/portfolio.png';
import { SectionTitle } from '@/components/Typography/SectionTitle';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const Skeleton = (): React.ReactElement => (
  <div className="w-full h-[200px] rounded-xl bg-gradient-to-br from-bg-nav to-bg-hover" />
);

interface ProjectPreviewProps {
  imageUrl?: string;
  url?: string;
  githubUrl?: string;
}

const ProjectPreview = ({ imageUrl, url, githubUrl }: ProjectPreviewProps): React.ReactElement => {
  const [imageError, setImageError] = React.useState(false);

  if (!imageUrl || imageError) {
    return <Skeleton />;
  }

  return (
    <div className="w-full h-[200px] rounded-xl overflow-hidden relative bg-bg-nav border border-border group">
      <div className="relative w-full h-[200px]">
        <Image
          src={imageUrl}
          alt="Project preview"
          fill
          className="object-cover"
          unoptimized
          onError={() => {
            setImageError(true);
          }}
        />
      </div>
      <div className="absolute top-2 right-2 z-20 flex items-center gap-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-black/85 backdrop-blur-md rounded-lg border border-white/30 transition-all duration-200 opacity-90 group-hover:opacity-100 hover:bg-black hover:border-transparent hover:scale-110 shadow-2xl"
            aria-label="View on GitHub"
          >
            <IconBrandGithub className="w-4 h-4 text-white stroke-[2.5]" />
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-black/85 backdrop-blur-md rounded-lg border border-white/30 transition-all duration-200 opacity-90 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-basic-blue group-hover:to-basic-purple group-hover:border-transparent hover:scale-110 shadow-2xl"
            aria-label="Visit live site"
          >
            <IconExternalLink className="w-4 h-4 text-white stroke-[2.5]" />
          </a>
        )}
      </div>
    </div>
  );
};

const projects = [
  {
    title: 'BharatLinks',
    description:
      'Smart link management platform for Indian businesses with link shortening, analytics, team collaboration, and UPI Express links.',
    url: 'https://bharatlinks.vercel.app/',
    githubUrl: 'https://github.com/punesh12/bharatlinks',
    imageUrl: bharatlinksImage.src,
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Clerk', 'Tailwind CSS'],
    header: (
      <ProjectPreview
        imageUrl={bharatlinksImage.src}
        url="https://bharatlinks.vercel.app/"
        githubUrl="https://github.com/punesh12/bharatlinks"
      />
    ),
    icon: <IconLink className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'stellar-galaxy',
    description:
      'A cosmic-inspired VS Code theme with soothing dark tones, sharp syntax highlighting, and a beautifully immersive coding experience.',
    url: 'https://marketplace.visualstudio.com/items?itemName=PuneshBorkar.stellar-galaxy',
    githubUrl: 'https://github.com/punesh12/stellar-galaxy',
    imageUrl: stellarGalaxyCover.src,
    tags: ['VS Code', 'Theme', 'Dark Mode'],
    header: (
      <ProjectPreview
        imageUrl={stellarGalaxyCover.src}
        url="https://marketplace.visualstudio.com/items?itemName=PuneshBorkar.stellar-galaxy"
        githubUrl="https://github.com/punesh12/stellar-galaxy"
      />
    ),
    icon: <IconStars className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'mockhub',
    description:
      'A modern, developer-friendly dashboard to create, mock, and test APIs built with Next.js, TypeScript & Supabase.',
    url: 'https://mockhubapp.vercel.app/',
    githubUrl: 'https://github.com/punesh12/mockhub',
    imageUrl: mockhubImage.src,
    tags: ['Next.js', 'TypeScript', 'Supabase', 'API'],
    header: (
      <ProjectPreview
        imageUrl={mockhubImage.src}
        url="https://mockhubapp.vercel.app/"
        githubUrl="https://github.com/punesh12/mockhub"
      />
    ),
    icon: <IconCode className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website featuring smooth scroll animations, dynamic navbar visibility, dark mode support, and an elegant bento grid layout. Built with Next.js and TypeScript for optimal performance and type safety.',
    url: 'https://puneshborkar.vercel.app/',
    githubUrl: 'https://github.com/punesh12/portfolio-2.0',
    imageUrl: portfolioImage.src,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    header: (
      <ProjectPreview
        imageUrl={portfolioImage.src}
        url="https://puneshborkar.vercel.app/"
        githubUrl="https://github.com/punesh12/portfolio-2.0-1"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  // {
  //   title: 'E-Commerce Platform',
  //   description:
  //     'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
  //   tags: ['React', 'TypeScript', 'Stripe'],
  //   header: <Skeleton />,
  //   icon: <IconClipboardCopy className="h-4 w-4 text-text-secondary" />,
  //   className: '',
  // },
  // {
  //   title: 'Dashboard Analytics',
  //   description:
  //     'Interactive dashboard with real-time data visualization and customizable widgets.',
  //   tags: ['React', 'D3.js', 'GraphQL'],
  //   header: <Skeleton />,
  //   icon: <IconFileBroken className="h-4 w-4 text-text-secondary" />,
  //   className: '',
  // },
  // {
  //   title: 'Social Media App',
  //   description:
  //     'A social networking platform with real-time messaging and content sharing features.',
  //   tags: ['React', 'Node.js', 'Socket.io'],
  //   header: <Skeleton />,
  //   icon: <IconSignature className="h-4 w-4 text-text-secondary" />,
  //   className: '',
  // },
  // {
  //   title: 'Task Management Tool',
  //   description:
  //     'Collaborative task management application with team workspaces and project tracking.',
  //   tags: ['Vue.js', 'Firebase', 'Tailwind'],
  //   header: <Skeleton />,
  //   icon: <IconTableColumn className="h-4 w-4 text-text-secondary" />,
  //   className: 'md:col-span-2',
  // },
];

export const Projects = (): React.ReactElement => {
  return (
    <section id="work" className="py-12 relative">
      <div className="mb-8">
        <SectionTitle>Featured Projects</SectionTitle>
      </div>

      <BentoGrid className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            icon={project.icon}
            tags={project.tags}
            className={project.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
