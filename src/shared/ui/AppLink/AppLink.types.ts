import { LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

export type AppLinkTheme = 'primary' | 'secondary' | 'red';

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}
