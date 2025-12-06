import { StyledTypography } from './styles';
import { TypographyProps } from './types';

export const Typography = ({
  size = '14',
  weight = 'regular',
  as,
  children,
}: TypographyProps): React.ReactElement => {
  return (
    <StyledTypography as={as} $size={size} $weight={weight}>
      {children}
    </StyledTypography>
  );
};
