export type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export type FontSize =
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '18'
  | '20'
  | '24'
  | '32';

export interface TypographyProps {
  size?: FontSize;
  weight?: FontWeight;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}
