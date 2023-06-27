import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomLink } from '@/shared/ui/CustomLink';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/HStack';
import { LoginModal } from '@/features/AuthByUserName';
import { getIsAuth } from '@/entities/User';
import { classNames } from '@/shared/helpers/classNames';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarButton } from '@/features/AvatarButton';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { NavBarProps } from './NavBar.types';
import cls from './navBar.module.scss';

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation(['links', 'translation', 'profilePage']);
  const [open, setOpen] = useState<boolean>(false);
  const isAuth = useSelector(getIsAuth);

  const onLogin = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <header
      data-testid='navBarId'
      className={classNames(cls.navBar, {}, [className])}>
      <ThemeSwitcher />
      <HStack data-testid='navTagNavBarId'>
        <CustomLink
          to='/'
          name={t('main')}
        />
        <CustomLink
          to='/about'
          name={t('about')}
        />
        {isAuth ? (
          <HStack gap='10'>
            <CustomLink
              to='/articles'
              name={t('articles')}
            />
            <NotificationButton />
            <AvatarButton />
          </HStack>
        ) : (
          <>
            <Button
              data-testid='loginBtnId'
              onClick={onLogin}>
              {t('login', { ns: 'translation' })}
            </Button>
            <LoginModal
              isOpen={open}
              onClose={() => setOpen(false)}
            />
          </>
        )}
      </HStack>
    </header>
  );
});
