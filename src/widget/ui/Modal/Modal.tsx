import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { classNames } from 'app';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './modal.module.scss';
import { ModalProps } from './Modal.types';

const Modal = ({
  isOpen,
  onClose,
  children,
  onEscapeClose = true,
  onOverlayClose = true,
  lazy = false,
}: ModalProps) => {
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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div data-testid='modalTestId' className={classNames(cls.modal, { [cls.opened]: isOpen })}>
        <div data-testid='overlayTestId' onClick={onOverlayClick} className={classNames(cls.overlay)}>
          <div onClick={onContentClick} className={classNames(cls.content)}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
