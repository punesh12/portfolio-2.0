export const gradients = {
  // Pattern Gradients
  pattern: {
    pattern1: {
      colors: ['#007AFF', '#FF2D55', '#AF52DE'],
      direction: 'to right',
    },
    pattern2: {
      colors: ['#34C759', '#FF2D55', '#AF52DE'],
      direction: 'to right',
    },
  },

  // Sky Gradients
  sky: {
    sky1: {
      colors: ['#AF52DE', '#007AFF'],
      direction: 'to right',
    },
    sky2: {
      colors: ['#003D82', '#007AFF'],
      direction: 'to right',
    },
    sky3: {
      colors: ['#007AFF', '#00D4FF'],
      direction: 'to right',
    },
  },

  // Sunset Gradients
  sunset: {
    sunset1: {
      colors: ['#00D4FF', '#34C759'],
      direction: 'to right',
    },
    sunset2: {
      colors: ['#FF2D55', '#FF9500'],
      direction: 'to right',
    },
    sunset3: {
      colors: ['#FF9500', '#FFD600'],
      direction: 'to right',
    },
  },

  // Rainbow Gradients
  rainbow: {
    rainbow1: {
      colors: ['#FF9500', '#FFD600'],
      direction: 'to right',
    },
    rainbow2: {
      colors: ['#FF3B30', '#FF9500'],
      direction: 'to right',
    },
  },

  // Rose Gradients
  rose: {
    rose1: {
      colors: ['#FF2D55', '#FF3B30'],
      direction: 'to right',
    },
    rose2: {
      colors: ['#FF2D55', '#AF52DE'],
      direction: 'to right',
    },
  },

  // Coffee Gradients
  coffee: {
    coffee1: {
      colors: ['#FF2D55', '#8B4513'],
      direction: 'to right',
    },
    coffee2: {
      colors: ['#8B4513', '#FF9500'],
      direction: 'to right',
    },
    coffee3: {
      colors: ['#FF9500', '#FF3B30'],
      direction: 'to right',
    },
  },

  // Floral Gradients
  floral: {
    floral1: {
      colors: ['#AF52DE', '#FF2D55'],
      direction: 'to right',
    },
    floral2: {
      colors: ['#007AFF', '#AF52DE'],
      direction: 'to right',
    },
  },

  // Dreamy Gradients
  dreamy: {
    dreamy1: {
      colors: ['#AF52DE', '#007AFF'],
      direction: 'to right',
    },
  },

  // Button Gradients
  button: {
    yellow: {
      colors: ['#FFE5CC', '#FFD600'],
      direction: 'to right',
    },
    orange: {
      colors: ['#FFE5ED', '#FF9500'],
      direction: 'to right',
    },
    purple: {
      colors: ['#E5E5FF', '#FF2D55'],
      direction: 'to right',
    },
    blue: {
      colors: ['#E5F2FF', '#AF52DE'],
      direction: 'to right',
    },
    teal: {
      colors: ['#D4F4DD', '#34C759'],
      direction: 'to right',
    },
    green: {
      colors: ['#FFF9C4', '#34C759'],
      direction: 'to right',
    },
  },

  // Background Gradients (soft, subtle - matching design)
  background: {
    top: {
      colors: ['#99FFF3', '#0038FF', '#FF0099', '#FFD600', '#FFE8C7', '#FFCD1B'],
      direction: 'to right',
      type: 'linear',
    },
    bottom: {
      colors: ['#5FECFF', '#0085FF', '#FFB951', '#F90068'],
      direction: 'to right',
      type: 'linear',
    },
  },
} as const;

export type GradientCategory = keyof typeof gradients;
export type PatternGradient = keyof typeof gradients.pattern;
export type SkyGradient = keyof typeof gradients.sky;
export type SunsetGradient = keyof typeof gradients.sunset;
export type RainbowGradient = keyof typeof gradients.rainbow;
export type RoseGradient = keyof typeof gradients.rose;
export type CoffeeGradient = keyof typeof gradients.coffee;
export type FloralGradient = keyof typeof gradients.floral;
export type DreamyGradient = keyof typeof gradients.dreamy;
export type ButtonGradient = keyof typeof gradients.button;

export interface GradientConfig {
  colors: readonly string[] | string[];
  direction:
    | 'to right'
    | 'to left'
    | 'to top'
    | 'to bottom'
    | 'to top right'
    | 'to top left'
    | 'to bottom right'
    | 'to bottom left';
}
