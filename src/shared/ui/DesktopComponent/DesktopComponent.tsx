import React, { memo } from 'react';
import { DesktopComponentProps } from './DesktopComponent.types';

export const DesktopComponent = memo(({ children, classname }: DesktopComponentProps) => {
  const isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div className={classname}>{isDesktop ? <>{children}</> : null}</div>;
});
