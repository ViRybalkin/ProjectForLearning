import { memo, MutableRefObject, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppStoreTypes } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/helpers/useThrottle';
import { useInitialEffect } from '@/shared/helpers/useInitialEffect';
import { useInfinityScroll } from '@/shared/helpers/useInfinityScroll';
import { getScroll, getScrollPositionAction } from '@/features/getScrollPosition';
import { classNames } from '@/shared/helpers/classNames';
import cls from './Page.module.scss';
import { PageProps } from './Page.types';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';

export const Page = memo(({ classname, children, onScrollEnd, testId }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scroll = useSelector((state: AppStoreTypes) => getScroll(state, pathname));

  useInfinityScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scroll;
  });

  const onScrollHandler = useThrottle((event: UIEvent<HTMLElement>) => {
    const position = event.currentTarget.scrollTop;
    dispatch(getScrollPositionAction.setPosition({ path: pathname, position }));
  }, 500);

  return (
    <section
      onScroll={(e) => onScrollHandler(e)}
      data-testid={testId}
      ref={wrapperRef}
      className={classNames(cls.page, {}, [classname])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
