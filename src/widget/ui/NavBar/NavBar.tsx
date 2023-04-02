import { classNames, useAppDispatch } from 'app';
import { Button, CustomLink } from 'shared';
import { ThemeSwitcher } from 'widget';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getIsAuth, userAction } from 'entities';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'shared/config/routes/Routes';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

const NavBar = memo(({ className }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);
  const dispatch = useAppDispatch();

  const onLogin = useCallback(() => {
    setOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userAction.logout());
    navigate(routerPath.main);
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
            {isAuth ? <CustomLink to='/profile' name={t('profile')} /> : null}
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
});

export { NavBar };
