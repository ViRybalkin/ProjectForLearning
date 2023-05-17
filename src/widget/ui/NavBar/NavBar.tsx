import { useAppDispatch } from 'app/providers/StoreProvider';
import { CustomLink } from 'shared/ui/CustomLink';
import { Dropdown } from 'shared/ui/DropDown';
import { Button } from 'shared/ui/Button';
import { Avatar } from 'shared/ui/Avatar';
import { HStack } from 'shared/ui/HStack';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getIsAdmin, getIsAuth, getIsManager, getUser, userAction } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'shared/config/routes/Routes';
import { classNames } from 'shared/config/helpers/classNames';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

export const NavBar = memo(({ className }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);
  const user = useSelector(getUser);
  const isAdmin = useSelector(getIsAdmin);
  const isManager = useSelector(getIsManager);
  const dispatch = useAppDispatch();

  const onLogin = useCallback(() => {
    setOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userAction.logout());
    navigate(routerPath.main);
  }, [dispatch, navigate]);

  const { t } = useTranslation(['links', 'translation', 'profilePage']);

  const adminPageEnable = isAdmin || isManager;

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
                ...(adminPageEnable
                  ? [
                      {
                        content: t('admin', { ns: 'links' }),
                        href: routerPath.adminPage,
                      },
                    ]
                  : []),
                {
                  content: t('profile', { ns: 'links' }),
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
