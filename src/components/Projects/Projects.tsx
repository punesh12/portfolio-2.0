'use client';

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconCode,
  IconExternalLink,
  IconFileBroken,
  IconSignature,
  IconStars,
  IconTableColumn,
} from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import { SectionTitle } from '@/components/Typography/SectionTitle';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const Skeleton = (): React.ReactElement => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-bg-nav to-bg-hover" />
);

interface ProjectPreviewProps {
  imageUrl?: string;
  url?: string;
}

const ProjectPreview = ({ imageUrl, url }: ProjectPreviewProps): React.ReactElement => {
  const [imageError, setImageError] = React.useState(false);

  if (!imageUrl || imageError) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-bg-nav border border-border group">
      <div className="relative w-full h-full">
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
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 z-20 p-2 bg-bg-main/90 backdrop-blur-sm rounded-lg border border-border text-basic-white transition-all duration-200 opacity-70 group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-basic-blue group-hover:to-basic-purple group-hover:text-basic-white group-hover:border-transparent hover:scale-110 shadow-lg"
          aria-label="Visit live site"
        >
          <IconExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

const projects = [
  {
    title: 'stellar-galaxy',
    description:
      'A cosmic-inspired VS Code theme with soothing dark tones, sharp syntax highlighting, and a beautifully immersive coding experience.',
    url: 'https://marketplace.visualstudio.com/items?itemName=PuneshBorkar.stellar-galaxy',
    imageUrl: '/assets/projectImages/Stellar-galaxy-cover.png',
    tags: ['VS Code', 'Theme', 'Dark Mode'],
    header: (
      <ProjectPreview
        imageUrl="/assets/projectImages/Stellar-galaxy-cover.png"
        url="https://marketplace.visualstudio.com/items?itemName=PuneshBorkar.stellar-galaxy"
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
    imageUrl: '/assets/projectImages/mockhub.png',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'API'],
    header: (
      <ProjectPreview
        imageUrl="/assets/projectImages/mockhub.png"
        url="https://mockhubapp.vercel.app/"
      />
    ),
    icon: <IconCode className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
    tags: ['React', 'TypeScript', 'Stripe'],
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Interactive dashboard with real-time data visualization and customizable widgets.',
    tags: ['React', 'D3.js', 'GraphQL'],
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'Social Media App',
    description:
      'A social networking platform with real-time messaging and content sharing features.',
    tags: ['React', 'Node.js', 'Socket.io'],
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
  {
    title: 'Task Management Tool',
    description:
      'Collaborative task management application with team workspaces and project tracking.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-text-secondary" />,
    className: 'md:col-span-2',
  },
  {
    title: 'Portfolio Website',
    description:
      'A beautiful portfolio website showcasing projects and skills with smooth animations.',
    tags: ['Next.js', 'Framer Motion'],
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-text-secondary" />,
    className: '',
  },
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
