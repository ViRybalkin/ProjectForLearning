import { HTMLAttributes } from 'react';

export type BtnThemes = 'clear' | 'outlined' | 'contained';
export type BtnSizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: BtnThemes;
  size?: BtnSizes;
}
