import { Link } from 'react-router-dom';
import { classNames } from 'app';
import cls from './customLink.module.scss';
import { CustomLinkProps } from './CustomLink.types';

const CustomLink = ({ className, to, name }:CustomLinkProps) => {
  return (
    <div>
      <Link to={to} className={classNames(cls.link, {}, [className])}>{name}</Link>
    </div>
  );
};

export { CustomLink };
