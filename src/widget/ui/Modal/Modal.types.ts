import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
  onEscapeClose?: boolean;
  onOverlayClose?: boolean;
}
