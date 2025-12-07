import { cn } from '@/lib/utils';
import { TypographyProps } from './types';

const getTypographyClasses = (size: string, weight: string): string => {
  const sizeClasses: Record<string, string> = {
    '9': 'text-[9px] leading-[12px]',
    '10': 'text-[10px] leading-[14px]',
    '11': 'text-[11px] leading-[14px]',
    '12': 'text-xs leading-4',
    '13': 'text-[13px] leading-[18px]',
    '14': 'text-sm leading-5',
    '15': 'text-[15px] leading-5',
    '16':
      weight === 'semiBold' || weight === 'bold'
        ? 'text-base leading-[22px]'
        : 'text-base leading-6',
    '18': 'text-lg leading-6',
    '20': 'text-xl leading-8',
    '24': 'text-2xl leading-8',
    '32': 'text-[32px] leading-10',
  };

  const weightClasses: Record<string, string> = {
    regular: 'font-normal',
    medium: 'font-medium',
    semiBold: 'font-semibold',
    bold: 'font-bold',
  };

  return cn(
    'font-primary m-0 p-0',
    sizeClasses[size] || sizeClasses['14'],
    weightClasses[weight] || weightClasses.regular,
  );
};

export const Typography = ({
  size = '14',
  weight = 'regular',
  as = 'p',
  children,
  className,
}: TypographyProps): React.ReactElement => {
  const Component = as as keyof JSX.IntrinsicElements;
  return (
    <Component className={cn(getTypographyClasses(size, weight), className)}>{children}</Component>
  );
};
