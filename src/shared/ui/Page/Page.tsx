import React, { memo, MutableRefObject, useRef } from 'react';
import { classNames } from 'app';
import { useInfinityScroll } from 'shared';
import cls from './Page.module.scss';
import { PageProps } from './Page.types';

export const Page = memo(({ classname, children, onScrollEnd, testId }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useInfinityScroll({ wrapperRef, triggerRef, callback: onScrollEnd });
  return (
    <section data-testid={testId} ref={wrapperRef} className={classNames(cls.page, {}, [classname])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
