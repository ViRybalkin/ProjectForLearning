import { Link } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from 'app';
import cls from './AppLink.module.scss';
import { AppLinkProps } from './AppLink.types';

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, theme = 'primary', ...otherProps } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])} {...otherProps}>
      {children}
    </Link>
  );
});
