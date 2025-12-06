import { GradientConfig } from '@/styles/gradients';
import { getGradientString } from '@/utils/gradientHelpers';
import { StyledGradient } from './styles';

interface GradientProps {
  config: GradientConfig;
  children?: React.ReactNode;
  className?: string;
}

export const Gradient = ({ config, children, className }: GradientProps): React.ReactElement => {
  return (
    <StyledGradient className={className} $gradient={getGradientString(config)}>
      {children}
    </StyledGradient>
  );
};
