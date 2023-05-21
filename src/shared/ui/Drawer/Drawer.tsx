import React, { memo, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DrawerProps } from './Drawer.types';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { classNames } from '../../config/helpers/classNames';
import { Overlay } from '../Overlay/Overlay';

export const Drawer = memo(
  ({ isOpen, onClose, children, onEscapeClose = true, onOverlayClose = true, lazy = false }: DrawerProps) => {
    const { t } = useTranslation();
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
