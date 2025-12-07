'use client';
import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return <div className="max-w-[1440px] mx-auto">{children}</div>;
};
