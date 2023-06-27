import { memo, useCallback, useEffect } from 'react';
import { DrawerProps } from './Drawer.types';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { classNames } from '@/shared/helpers/classNames';
import { Overlay } from '../Overlay';
import { AnimationProvider, useAnimationContext } from '../../providers/AnimationProvider';

const height = window.innerHeight - 100;

const DrawerContext = ({ children, isOpen, onClose }: DrawerProps) => {
  const { Gesture, Spring } = useAnimationContext();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ immediate: false, y: 0 });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      config: { ...Spring.config.stiff, velocity },
      immediate: false,
      onResolve: onClose,
      y: height,
    });
  };

  const bind = Gesture.useDrag(
    ({ cancel, direction: [, dy], last, movement: [, my], velocity: [, vy] }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ immediate: true, y: my });
      }
    },
    {
      bounds: { top: 0 },
      filterTaps: true,
      from: () => [0, y.get()],
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid='modalTestId'
        className={classNames(cls.drawer, { [cls.opened]: isOpen })}>
        <Overlay
          testId='overlayTestId'
          onClick={() => close()}
          classname={cls.overlay}>
          <Spring.a.div
            style={{ bottom: `calc(-100vh + ${height - 100}px)`, display, y }}
            className={classNames(cls.content)}
            {...bind()}>
            {children}
          </Spring.a.div>
        </Overlay>
      </div>
    </Portal>
  );
};

const DrawerProto = (props: DrawerProps) => {
  const { isLoaded } = useAnimationContext();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContext {...props} />;
};

export const Drawer = memo((props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerProto {...props} />
    </AnimationProvider>
  );
});
