import { cn } from '@/lib/utils';
import { SectionTitle } from './SectionTitle';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading = ({
  title,
  description,
  className,
}: SectionHeadingProps): React.ReactElement => {
  return (
    <div className={cn('flex flex-col', className)}>
      <SectionTitle className={description ? 'mb-2 md:mb-3' : ''}>{title}</SectionTitle>
      {description && (
        <p className="text-text-secondary text-sm md:text-base max-w-sm m-0">{description}</p>
      )}
    </div>
  );
};
