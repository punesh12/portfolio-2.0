import { FontSize, FontWeight } from '@/types/typography';

export interface TypographyProps {
  size?: FontSize;
  weight?: FontWeight;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}
