import { Link } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '../../config/helpers/classNames';
import cls from './customLink.module.scss';
import { CustomLinkProps } from './CustomLink.types';

const CustomLink = memo(({ className, to, name }: CustomLinkProps) => {
  return (
    <div>
      <Link data-testid='customLinkTestId' to={to} className={classNames(cls.link, {}, [className])}>
        {name}
      </Link>
    </div>
  );
});

export { CustomLink };
