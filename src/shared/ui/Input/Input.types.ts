import { HTMLAttributes } from 'react';

type InputAttr = Omit<HTMLAttributes<HTMLInputElement>, 'placeholder'>;
type InputTypes = 'text' | 'number';
type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends InputAttr {
  type?: InputTypes;
  placeholder?: string;
  size?: InputSize;
  fullWidth?: boolean;
}
