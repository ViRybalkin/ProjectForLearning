import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { getIsAdmin, getIsManager, getUser, userAction } from '@/entities/User';
import { generateRoute } from '@/shared/constants';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';

export const AvatarButton = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector(getUser);
  const isAdmin = useSelector(getIsAdmin);
  const isManager = useSelector(getIsManager);
  const adminPageEnable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userAction.logout());
    navigate(generateRoute.main());
  }, [dispatch, navigate]);

  return (
    <Dropdown
      buttonItem={
        <Avatar
          size={40}
          alt={user?.avatar}
          src={user?.avatar}
        />
      }
      items={[
        ...(adminPageEnable
          ? [
              {
                content: t('admin', { ns: 'links' }),
                href: generateRoute.adminPage(),
              },
            ]
          : []),
        {
          content: t('profile', { ns: 'links' }),
          href: generateRoute.profile(user?.id),
        },
        {
          content: t('logout', { ns: 'translation' }),
          onClick: onLogout,
        },
      ]}
    />
  );
});
