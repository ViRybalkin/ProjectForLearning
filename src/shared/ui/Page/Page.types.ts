import { ReactNode } from 'react';

export interface PageProps {
  children: ReactNode | Array<ReactNode>;
  classname?: string;
  onScrollEnd?: () => void;
  testId?: string;
}
