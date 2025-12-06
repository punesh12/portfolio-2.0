import { StyledSectionTitle } from './styles';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const SectionTitle = ({ children, as = 'h2' }: SectionTitleProps): React.ReactElement => {
  return <StyledSectionTitle as={as}>{children}</StyledSectionTitle>;
};
