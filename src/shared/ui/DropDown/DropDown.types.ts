import { ReactNode } from 'react';

export interface DropDownItem {
  content: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropDownProps {
  items: Array<DropDownItem>;
  buttonItem: ReactNode;
}
