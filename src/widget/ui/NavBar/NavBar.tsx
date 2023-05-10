import { classNames, useAppDispatch } from 'app';
import { Button, CustomLink, HStack } from 'shared';
import { ThemeSwitcher } from 'widget';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getIsAuth, getUser, userAction } from 'entities';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'shared/config/routes/Routes';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

const NavBar = memo(({ className }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();

  const onLogin = useCallback(() => {
    setOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userAction.logout());
    navigate(routerPath.main);
  }, [dispatch, navigate]);

  const { t } = useTranslation(['links', 'translation']);

  return (
    <>
      <header data-testid='navBarId' className={classNames(cls.navBar, {}, [className])}>
        <ThemeSwitcher />
        <HStack>
          <HStack data-testid='navTagNavBarId'>
            <CustomLink to='/' name={t('main')} />
            <CustomLink to='/about' name={t('about')} />
            {isAuth ? <CustomLink to={`profile/${user?.id}`} name={t('profile')} /> : null}
            {isAuth ? <CustomLink to='/articles' name={t('articles')} /> : null}
          </HStack>
          {!isAuth ? (
            <Button data-testid='loginBtnId' onClick={onLogin}>
              {t('login', { ns: 'translation' })}
            </Button>
          ) : (
            <Button data-testid='logoutBtnId' onClick={onLogout}>
              {t('logout', { ns: 'translation' })}
            </Button>
          )}
        </HStack>
      </header>

      {!isAuth ? <LoginModal isOpen={open} onClose={() => setOpen(false)} /> : null}
    </>
  );
});

export { NavBar };
