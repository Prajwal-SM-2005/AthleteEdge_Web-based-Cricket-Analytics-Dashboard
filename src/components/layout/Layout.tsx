import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen scan-line">
      <Navigation />
      <main className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
};
