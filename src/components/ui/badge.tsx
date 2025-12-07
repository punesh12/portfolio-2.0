import { cn } from '@/lib/utils';

type BadgeVariant = 'blue' | 'purple' | 'yellow' | 'red' | 'green';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  blue: {
    backgroundColor: 'var(--badge-blue-bg)',
    borderColor: 'var(--badge-blue-border)',
    color: 'var(--badge-blue-text)',
  },
  purple: {
    backgroundColor: 'var(--badge-purple-bg)',
    borderColor: 'var(--badge-purple-border)',
    color: 'var(--badge-purple-text)',
  },
  yellow: {
    backgroundColor: 'var(--badge-yellow-bg)',
    borderColor: 'var(--badge-yellow-border)',
    color: 'var(--badge-yellow-text)',
  },
  red: {
    backgroundColor: 'var(--badge-red-bg)',
    borderColor: 'var(--badge-red-border)',
    color: 'var(--badge-red-text)',
  },
  green: {
    backgroundColor: 'var(--badge-green-bg)',
    borderColor: 'var(--badge-green-border)',
    color: 'var(--badge-green-text)',
  },
};

export const Badge = ({
  children,
  variant = 'blue',
  className,
}: BadgeProps): React.ReactElement => {
  return (
    <span
      className={cn(
        'px-2 py-0.5 text-[10px] font-medium rounded-md border whitespace-nowrap flex-shrink-0',
        className,
      )}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
};
