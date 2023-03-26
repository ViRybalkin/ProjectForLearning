import { HTMLAttributes } from 'react';

export interface OptionType {
  content: string;
  value: string;
}

type SelectSize = 'small' | 'medium' | 'large';

type SelectAttr = HTMLAttributes<HTMLSelectElement>;

export interface SelectProps extends SelectAttr {
  options: Array<OptionType>;
  size?: SelectSize;
  readonly?: boolean;
  label?: string;
  fullWidth?: boolean;
}
