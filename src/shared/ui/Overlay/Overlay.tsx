import React, { memo } from 'react';
import { OverlayProps } from './Overlay.types';
import cls from './Overlay.module.scss';
import { classNames } from '../../config/helpers/classNames';

export const Overlay = memo(({ children, onClick, testId, classname }: OverlayProps) => {
  return (
    <div data-testid={testId} onClick={onClick} className={classNames(cls.overlay, {}, [classname])}>
      {children}
    </div>
  );
});
