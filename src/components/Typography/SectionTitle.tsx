import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const SectionTitle = ({
  children,
  as = 'h2',
  className,
}: SectionTitleProps): React.ReactElement => {
  const Component = as as keyof JSX.IntrinsicElements;
  return (
    <Component
      className={cn(
        'font-primary m-0 p-0 text-xs md:text-sm font-semibold uppercase tracking-[1.5px] text-text-secondary mb-8 md:mb-12',
        className,
      )}
    >
      {children}
    </Component>
  );
};
