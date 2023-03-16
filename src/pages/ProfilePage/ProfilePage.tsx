import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicComponent, useAppDispatch } from 'app';
import { ProfileCard, ProfileReducer, profileThunk } from 'entities';

const ProfilePage = () => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();
  const reducer = {
    profile: ProfileReducer,
  };

  useEffect(() => {
    dispatch(profileThunk());
  }, [dispatch]);

  return (
    <DynamicComponent reducers={reducer}>
      <div data-testid='profilePageTestId'>{t('title')}</div>
      <ProfileCard />
    </DynamicComponent>
  );
};

export default ProfilePage;
