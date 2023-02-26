import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onEscapeClose?: boolean;
  onOverlayClose?: boolean;
}
