import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation('profilePage');
  return <div data-testid='profilePageTestId'>{t('title')}</div>;
};

export default ProfilePage;
