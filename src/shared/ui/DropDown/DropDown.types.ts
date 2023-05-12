import { ReactNode } from 'react';

export type MenuPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'center';

export interface DropDownItem {
  content: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropDownProps {
  items: Array<DropDownItem>;
  buttonItem: ReactNode;
  position?: MenuPosition;
}
