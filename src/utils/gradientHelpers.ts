import { GradientConfig } from '@/styles/gradients';

interface ExtendedGradientConfig extends GradientConfig {
  type?: 'linear' | 'radial';
}

/**
 * Converts gradient config to CSS gradient string (linear or radial)
 * @param config - Gradient configuration with colors and direction
 * @returns CSS gradient string
 */
export const getGradientString = (config: ExtendedGradientConfig): string => {
  const { colors, direction, type = 'linear' } = config;
  if (type === 'radial') {
    // For radial gradients, use ellipse at top for semicircle effect
    return `radial-gradient(${direction}, ${colors.join(', ')})`;
  }
  return `linear-gradient(${direction}, ${colors.join(', ')})`;
};

/**
 * Creates a CSS gradient string from color array and direction
 * @param colors - Array of color values (hex, rgb, etc.)
 * @param direction - Gradient direction (default: 'to right')
 * @returns CSS linear-gradient string
 */
export const createGradient = (
  colors: string[],
  direction: GradientConfig['direction'] = 'to right',
  type: 'linear' | 'radial' = 'linear',
): ExtendedGradientConfig => {
  return {
    colors,
    direction,
    type,
  };
};
