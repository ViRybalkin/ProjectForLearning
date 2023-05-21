import { ReactNode } from 'react';

export interface DrawerProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
  onEscapeClose?: boolean;
  onOverlayClose?: boolean;
  lazy?: boolean;
}
