type ListBoxSize = 'small' | 'medium' | 'large';

export interface OptionType {
  value: string;
  id: string | number;
  unavailable?: boolean;
}

export interface ListBoxProps {
  options: Array<OptionType>;
  onChange: (e: string) => void;
  value: string;
  readonly?: boolean;
  label?: string;
  fullWidth?: boolean;
  size?: ListBoxSize;
}
