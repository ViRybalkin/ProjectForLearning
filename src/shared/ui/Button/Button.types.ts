import { HTMLAttributes } from 'react';

type BtnThemes = 'clear'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: BtnThemes;
}
