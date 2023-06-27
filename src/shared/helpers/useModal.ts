import { MouseEvent, useCallback, useEffect, useState } from 'react';

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEscapeClose?: boolean;
  onOverlayClose?: boolean;
}

interface ReturnTypes {
  onOverlayClick: (e: MouseEvent) => void;
  onContentClick: (e: MouseEvent) => void;
  isMounted: boolean;
}

export const useModal = ({ isOpen, onClose, onEscapeClose, onOverlayClose }: UseModalProps): ReturnTypes => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const closeHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  const onEscapePress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && onEscapeClose) {
      window.addEventListener('keydown', onEscapePress);
    }
    return () => window.removeEventListener('keydown', onEscapePress);
  }, [isOpen, onEscapeClose, onEscapePress]);

  const onOverlayClick = useCallback(
    (e: MouseEvent) => {
      if (onOverlayClose) {
        e.preventDefault();
        closeHandler();
      }
    },
    [closeHandler, onOverlayClose]
  );

  const onContentClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  return {
    isMounted,
    onContentClick,
    onOverlayClick,
  };
};
