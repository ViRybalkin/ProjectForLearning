import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

type InputAttr = Omit<HTMLAttributes<HTMLInputElement>, 'placeholder'>;
type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends InputAttr {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  size?: InputSize;
  fullWidth?: boolean;
  className?: string;
}
