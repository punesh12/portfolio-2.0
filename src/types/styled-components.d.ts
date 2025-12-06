import 'styled-components';
import { Theme } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: Theme['colors'] & {
      mainBg?: string;
      hoverBg?: string;
      navBg?: string;
      border?: string;
      lightGray?: string;
      primaryText?: string;
      gray100?: string;
    };
  }
}
