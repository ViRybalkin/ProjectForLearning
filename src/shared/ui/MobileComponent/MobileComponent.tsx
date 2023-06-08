import { memo } from 'react';
import { MobileComponentProps } from './MobileComponent.types';

export const MobileComponent = memo(({ children, classname }: MobileComponentProps) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div className={classname}>{isMobile ? <>{children}</> : null}</div>;
});
