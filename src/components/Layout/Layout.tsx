'use client';
import { StyledContainer } from './styles';
import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return <StyledContainer>{children}</StyledContainer>;
};
