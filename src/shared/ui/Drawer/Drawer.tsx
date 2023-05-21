import React, { memo } from 'react';
import { useModal } from 'shared/config/helpers/useModal';
import { DrawerProps } from './Drawer.types';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { classNames } from '../../config/helpers/classNames';
import { Overlay } from '../Overlay';

export const Drawer = memo(
  ({ isOpen, onClose, children, onEscapeClose = true, onOverlayClose = true, lazy = false }: DrawerProps) => {
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
        <div data-testid='modalTestId' className={classNames(cls.drawer, { [cls.opened]: isOpen })}>
          <Overlay testId='overlayTestId' onClick={onOverlayClick} classname={cls.overlay}>
            <div onClick={onContentClick} className={classNames(cls.content)}>
              {children}
            </div>
          </Overlay>
        </div>
      </Portal>
    );
  }
);
