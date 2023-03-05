import { classNames } from 'app';
import { Button, CustomLink } from 'shared';
import { ThemeSwitcher } from 'widget';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/ui/AuthForm';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

const NavBar = ({ className }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onLogin = useCallback(() => {
    setOpen(true);
  }, []);
  const { t } = useTranslation(['links', 'translation']);

  return (
    <>
      <header data-testid='navBarId' className={classNames(cls.navBar, {}, [className])}>
        <ThemeSwitcher />
        <div className={classNames(cls.btnWrapper)}>
          <nav data-testid='navTagNavBarId' className={cls.btnWrapper}>
            <CustomLink to='/' name={t('main')} />
            <CustomLink to='/about' name={t('about')} />
          </nav>
          <Button onClick={onLogin}>{t('login', { ns: 'translation' })}</Button>
        </div>
      </header>
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export {NavBar};
