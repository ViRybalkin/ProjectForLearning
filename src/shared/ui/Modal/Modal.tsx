import { classNames } from '@/shared/helpers/classNames';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useModal } from '@/shared/helpers/useModal';
import cls from './Modal.module.scss';
import { ModalProps } from './Modal.types';

const Modal = ({
  children,
  isOpen,
  lazy = false,
  onClose,
  onEscapeClose = true,
  onOverlayClose = true,
}: ModalProps) => {
  const { isMounted, onContentClick, onOverlayClick } = useModal({
    isOpen,
    onClose,
    onEscapeClose,
    onOverlayClose,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid='modalTestId'
        className={classNames(cls.modal, { [cls.opened]: isOpen })}>
        <Overlay
          testId='overlayTestId'
          onClick={onOverlayClick}>
          <div
            onClick={onContentClick}
            className={classNames(cls.content)}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  );
};

export { Modal };
