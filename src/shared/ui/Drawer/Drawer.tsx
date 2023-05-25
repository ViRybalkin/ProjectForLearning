import React, { memo, useCallback, useEffect } from 'react';
import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { DrawerProps } from './Drawer.types';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { classNames } from '../../config/helpers/classNames';
import { Overlay } from '../Overlay';

const height = window.innerHeight - 100;

export const Drawer = memo(({ isOpen, onClose, children }: DrawerProps) => {
  const [{ y }, api] = useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div data-testid='modalTestId' className={classNames(cls.drawer, { [cls.opened]: isOpen })}>
        <Overlay testId='overlayTestId' onClick={() => close()} classname={cls.overlay}>
          <a.div
            style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            className={classNames(cls.content)}
            {...bind()}>
            {children}
          </a.div>
        </Overlay>
      </div>
    </Portal>
  );
});
