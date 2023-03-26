import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicComponent, useAppDispatch } from 'app';
import { ProfileCard, ProfileReducer, profileThunk } from 'entities';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/config/selectors';

const ProfilePage = () => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();
  const reducer = {
    profile: ProfileReducer,
  };

  useEffect(() => {
    dispatch(profileThunk());
  }, [dispatch]);

  const profile = useSelector(getProfileData);

  return (
    <DynamicComponent reducers={reducer}>
      <div data-testid='profilePageTestId'>{t('title')}</div>
      <ProfileCard data={profile} />
    </DynamicComponent>
  );
};

export default ProfilePage;
