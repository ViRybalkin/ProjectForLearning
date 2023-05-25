import React, { memo, useCallback, useEffect } from 'react';
import { useAnimationContext } from '@/shared/providers/AnimationProvider';
import { DrawerProps } from './Drawer.types';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { classNames } from '../../config/helpers/classNames';
import { Overlay } from '../Overlay';

const height = window.innerHeight - 100;

export const DrawerContext = memo(({ isOpen, onClose, children }: DrawerProps) => {
  const { Spring, Gesture } = useAnimationContext();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

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
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
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
          <Spring.a.div
            style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            className={classNames(cls.content)}
            {...bind()}>
            {children}
          </Spring.a.div>
        </Overlay>
      </div>
    </Portal>
  );
});

export const Drawer = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationContext();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContext {...props} />;
});
