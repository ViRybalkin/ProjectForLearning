import { ReactNode } from 'react';
import { PopupsPosition } from '../../types/Popups.types';

export interface PopoverProps {
  children: ReactNode;
  buttonItem: ReactNode;
  position?: PopupsPosition;
  classname?: string;
  childrenLength?: string;
}
