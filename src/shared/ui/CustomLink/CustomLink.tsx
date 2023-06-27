import { Link } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import cls from './customLink.module.scss';
import { CustomLinkProps } from './CustomLink.types';

const CustomLink = memo(({ className, name, to }: CustomLinkProps) => {
  return (
    <div>
      <Link
        data-testid='customLinkTestId'
        to={to}
        className={classNames(cls.link, {}, [className])}>
        {name}
      </Link>
    </div>
  );
});

export { CustomLink };
