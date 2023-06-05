import { classNames } from '@/shared/helpers/classNames';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useModal } from '@/shared/helpers/useModal';
import cls from './Modal.module.scss';
import { ModalProps } from './Modal.types';

const Modal = ({
  isOpen,
  onClose,
  children,
  onEscapeClose = true,
  onOverlayClose = true,
  lazy = false,
}: ModalProps) => {
  const { onOverlayClick, onContentClick, isMounted } = useModal({
    onClose,
    isOpen,
    onEscapeClose,
    onOverlayClose,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div data-testid='modalTestId' className={classNames(cls.modal, { [cls.opened]: isOpen })}>
        <Overlay testId='overlayTestId' onClick={onOverlayClick}>
          <div onClick={onContentClick} className={classNames(cls.content)}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  );
};

export { Modal };
