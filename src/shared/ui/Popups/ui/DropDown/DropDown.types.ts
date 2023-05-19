import { ReactNode } from 'react';
import { PopupsPosition } from '../../types/Popups.types';

export interface DropDownItem {
  content: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropDownProps {
  items: Array<DropDownItem>;
  buttonItem: ReactNode;
  position?: PopupsPosition;
}
