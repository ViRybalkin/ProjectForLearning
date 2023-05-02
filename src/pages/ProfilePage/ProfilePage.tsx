import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicComponent, useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getError,
  getIsLoading,
  getProfile,
  getProfileData,
  getProfileReadOnly,
  getValidationErrors,
  ProfileCard,
  ProfileDataTypes,
  ProfileReducer,
  updateProfile,
} from 'entities';
import { Page, Typography, useInitialEffect } from 'shared';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const ProfilePage = () => {
  const { profileId } = useParams();
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();
  const reducer = {
    profile: ProfileReducer,
  };

  useInitialEffect(() => {
    if (profileId) {
      dispatch(getProfile(profileId));
    }
  });

  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getIsLoading);
  const isReadOnly = useSelector(getProfileReadOnly);
  const error = useSelector(getError);
  const validationError = useSelector(getValidationErrors);
  const onSubmitHandler = (data: ProfileDataTypes) => {
    dispatch(updateProfile(data));
  };

  return (
    <DynamicComponent reducers={reducer}>
      <Page>
        <div data-testid='profilePageTestId'>{t('title')}</div>
        <ProfileHeader isEditDisabled={Boolean(error)} />
        {validationError?.map((errorText) => {
          return (
            <Typography key={errorText} variant='h2' align='center'>
              {t(errorText)}
            </Typography>
          );
        })}
        <ProfileCard
          submitHandler={onSubmitHandler}
          isLoading={isLoading || false}
          error={error}
          readonly={isReadOnly}
          data={profile}
        />
      </Page>
    </DynamicComponent>
  );
};

export default ProfilePage;
