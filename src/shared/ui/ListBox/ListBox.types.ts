type ListBoxSize = 'small' | 'medium' | 'large';

export interface OptionType {
  value: string;
  id: string | number;
  unavailable?: boolean;
}

export interface ListBoxProps {
  options: Array<OptionType>;
  readonly?: boolean;
  label?: string;
  fullWidth?: boolean;
  size?: ListBoxSize;
  onChange: (e: string) => void;
}
