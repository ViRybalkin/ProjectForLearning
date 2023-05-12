import { classNames, useAppDispatch } from 'app';
import { Avatar, Button, CustomLink, Dropdown, HStack } from 'shared';
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

export const NavBar = memo(({ className }: NavBarProps) => {
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

  const { t } = useTranslation(['links', 'translation', 'profilePage']);

  return (
    <>
      <header data-testid='navBarId' className={classNames(cls.navBar, {}, [className])}>
        <ThemeSwitcher />
        <HStack data-testid='navTagNavBarId'>
          <CustomLink to='/' name={t('main')} />
          <CustomLink to='/about' name={t('about')} />
          {isAuth ? <CustomLink to='/articles' name={t('articles')} /> : null}
          {isAuth ? (
            <Dropdown
              buttonItem={<Avatar size={40} alt={user?.avatar} src={user?.avatar} />}
              items={[
                {
                  content: t('profileCardTitle', { ns: 'profilePage' }),
                  href: `profile/${user?.id}`,
                },
                {
                  content: t('logout', { ns: 'translation' }),
                  onClick: onLogout,
                },
              ]}
            />
          ) : (
            <Button data-testid='loginBtnId' onClick={onLogin}>
              {t('login', { ns: 'translation' })}
            </Button>
          )}
        </HStack>
      </header>
      {!isAuth ? <LoginModal isOpen={open} onClose={() => setOpen(false)} /> : null}
    </>
  );
});
