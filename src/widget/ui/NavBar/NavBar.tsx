import { classNames } from 'app';
import { Button, CustomLink } from 'shared';
import { ThemeSwitcher } from 'widget';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, userAction } from 'entities';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

const NavBar = ({ className }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    setOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userAction.logout());
  }, [dispatch]);

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
          {!isAuth ? (
            <Button data-testid='loginBtnId' onClick={onLogin}>
              {t('login', { ns: 'translation' })}
            </Button>
          ) : (
            <Button data-testid='logoutBtnId' onClick={onLogout}>
              {t('logout', { ns: 'translation' })}
            </Button>
          )}
        </div>
      </header>

      {!isAuth ? <LoginModal isOpen={open} onClose={() => setOpen(false)} /> : null}
    </>
  );
};

export { NavBar };
