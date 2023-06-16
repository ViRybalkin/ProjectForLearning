import { Link } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '../../helpers/classNames';
import cls from './AppLink.module.scss';
import { AppLinkProps } from './AppLink.types';

export const AppLink = memo((props: AppLinkProps) => {
  const { children, className, theme = 'primary', to, ...otherProps } = props;

  return (
    <Link
      data-testid='appLinkId'
      to={to}
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
      {...otherProps}>
      {children}
    </Link>
  );
});
