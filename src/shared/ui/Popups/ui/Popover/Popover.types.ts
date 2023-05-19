import { ReactNode } from 'react';
import { PopupsPosition } from '../../types/Popups.types';

export interface PopoverProps {
  item: ReactNode;
  buttonItem: ReactNode;
  position?: PopupsPosition;
}
