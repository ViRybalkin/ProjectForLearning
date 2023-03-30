import { ReactNode } from 'react';

type VariantsTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type alignTypes = 'center' | 'left' | 'right';

export interface TypographyProps {
  children: ReactNode;
  error?: boolean;
  variant?: VariantsTypes;
  align?: alignTypes;
}
