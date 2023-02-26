import { classNames } from 'app';
import { CustomLink } from 'shared';
import { ThemeSwitcher } from 'widget';
import { useTranslation } from 'react-i18next';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation('links');
  return (
    <header data-testid="navBarId" className={classNames(cls.navBar, {}, [className])}>
      <ThemeSwitcher />
      <nav data-testid="navTagNavBarId" className={cls.btnWrapper}>
        <CustomLink to="/" name={t('main')} />
        <CustomLink to="/about" name={t('about')} />
      </nav>
    </header>
  );
};

export { NavBar };
