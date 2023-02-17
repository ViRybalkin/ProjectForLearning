import { classNames } from 'app';
import { CustomLink } from 'shared';
import { ThemeSwitcher } from 'widget';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

const NavBar = ({ className, links }:NavBarProps) => {
  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <ThemeSwitcher />
      <nav className={cls.btnWrapper}>
        {links.map((elem) => <CustomLink key={elem.path} to={elem.path} name={elem.name} />)}
      </nav>
    </header>
  );
};

export { NavBar };
