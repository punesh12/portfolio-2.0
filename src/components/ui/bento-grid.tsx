import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tags,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tags?: string[];
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border bg-bg-hover dark:bg-[#1a1a1d] p-4 transition duration-200 hover:shadow-xl hover:border-basic-blue',
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          {icon}
          {tags && tags.length > 0 && (
            <div className="flex flex-nowrap gap-1.5 overflow-x-auto">
              {tags.map((tag, index) => {
                const variants: Array<'blue' | 'purple' | 'yellow' | 'red' | 'green'> = [
                  'blue',
                  'purple',
                  'yellow',
                  'red',
                  'green',
                ];
                const variant = variants[index % variants.length];
                return (
                  <Badge key={index} variant={variant}>
                    {tag}
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-text-primary truncate">{title}</div>
        <div className="font-sans text-xs font-normal text-text-secondary line-clamp-3">
          {description}
        </div>
      </div>
    </div>
  );
};
