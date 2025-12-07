'use client';

import Image from 'next/image';
import { Typography } from '@/components/Typography';
import { SectionTitle } from '@/components/Typography/SectionTitle';

interface SkillIconProps {
  name: string;
}

const SkillIcon = ({ name }: SkillIconProps): React.ReactElement => {
  const iconUrls: Record<string, string> = {
    React: 'https://img.icons8.com/color/48/react-native.png',
    'Next.js': 'https://img.icons8.com/color/48/nextjs.png',
    TypeScript: 'https://img.icons8.com/color/48/typescript.png',
    JavaScript: 'https://img.icons8.com/color/48/javascript.png',
    Redux: 'https://img.icons8.com/color/48/redux.png',
    'HTML/CSS': 'https://img.icons8.com/color/48/html-5.png',
    GraphQL: 'https://img.icons8.com/color/48/graphql.png',
    'Node.js': 'https://img.icons8.com/color/48/nodejs.png',
    Express: 'https://img.icons8.com/color/48/express-js.png',
    Git: 'https://img.icons8.com/color/48/git.png',
    Figma: 'https://img.icons8.com/color/48/figma.png',
    Firebase: 'https://img.icons8.com/color/48/firebase.png',
    Supabase: 'https://img.icons8.com/color/48/supabase.png',
    Jira: 'https://img.icons8.com/color/48/jira.png',
    Netlify: 'https://img.icons8.com/color/48/netlify.png',
    Render: 'https://img.icons8.com/color/48/render.png',
  };

  const iconUrl = iconUrls[name];

  if (!iconUrl) {
    return <div className="w-10 h-10 bg-gray-300 rounded" />;
  }

  return (
    <Image
      src={iconUrl}
      alt={`${name} icon`}
      width={40}
      height={40}
      className="w-10 h-10 object-contain"
      unoptimized
    />
  );
};

// Most important tech skills
const techSkills = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Redux' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'GraphQL' },
  { name: 'HTML/CSS' },
];

// Non-tech / Miscellaneous skills
const miscSkills = [
  { name: 'Figma' },
  { name: 'Firebase' },
  { name: 'Supabase' },
  { name: 'Git' },
  { name: 'Jira' },
  { name: 'Netlify' },
  { name: 'Render' },
];

// Duplicate skills for seamless marquee loop
const marqueeTechSkills = [...techSkills, ...techSkills];
const marqueeMiscSkills = [...miscSkills, ...miscSkills];

export const Skills = (): React.ReactElement => {
  return (
    <section id="skills" className="py-12 relative">
      <div>
        <SectionTitle>Skills & Technologies</SectionTitle>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {/* First row - Most important tech skills */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {marqueeTechSkills.map((skill, index) => (
              <div
                key={`tech-${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-row items-center justify-center gap-3 px-4 py-3 rounded-lg bg-bg-hover dark:bg-[#2a2a2d] border border-border"
              >
                <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                  <SkillIcon name={skill.name} />
                </div>
                <Typography
                  size="14"
                  weight="medium"
                  as="span"
                  className="text-text-primary whitespace-nowrap"
                >
                  {skill.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - Non-tech / Miscellaneous */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
            {marqueeMiscSkills.map((skill, index) => (
              <div
                key={`misc-${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-row items-center justify-center gap-3 px-4 py-3 rounded-lg bg-bg-hover dark:bg-[#2a2a2d] border border-border"
              >
                <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                  <SkillIcon name={skill.name} />
                </div>
                <Typography
                  size="14"
                  weight="medium"
                  as="span"
                  className="text-text-primary whitespace-nowrap"
                >
                  {skill.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
