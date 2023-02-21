import { HTMLAttributes } from 'react';

export type BtnThemes = 'clear' | 'outlined'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: BtnThemes;
}
