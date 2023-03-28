import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicComponent, useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import {
  getError,
  getIsLoading,
  getProfile,
  getProfileData,
  getProfileReadOnly,
  ProfileCard,
  ProfileDataTypes,
  ProfileReducer,
  updateProfile,
} from 'entities';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const ProfilePage = () => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();
  const reducer = {
    profile: ProfileReducer,
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getIsLoading);
  const isReadOnly = useSelector(getProfileReadOnly);
  const error = useSelector(getError);

  const onSubmitHandler = (data: ProfileDataTypes) => {
    dispatch(updateProfile(data));
  };

  return (
    <DynamicComponent reducers={reducer}>
      <div data-testid='profilePageTestId'>{t('title')}</div>
      <ProfileHeader isEditDisabled={Boolean(error)} />
      <ProfileCard
        submitHandler={onSubmitHandler}
        isLoading={isLoading || false}
        error={error}
        readonly={isReadOnly}
        data={profile}
      />
    </DynamicComponent>
  );
};

export default ProfilePage;
