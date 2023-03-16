import React, { useEffect } from 'react';
import { Button, Input, Typography } from 'shared';
import { useTranslation } from 'react-i18next';
import { classNames } from 'app';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import cls from './profileCard.module.scss';
import { ProfileDataTypes } from '../../config';
import { getError, getIsLoading, getProfileData } from '../../config/selectors';

export const ProfileCard = () => {
  const { handleSubmit, control, setValue } = useForm<ProfileDataTypes>();
  const { t } = useTranslation('profilePage');

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const profile = useSelector(getProfileData);

  useEffect(() => {
    setValue('first', profile?.first || '');
    setValue('lastname', profile?.lastname || '');
  }, [profile, setValue]);

  return (
    <div className={classNames(cls.profileCard)}>
      <div className={classNames(cls.title)}>
        <Typography variant='h3'>{t('profileCardTitle')}</Typography>
        <Button theme='contained'>{t('editBtn')}</Button>
      </div>
      <form>
        <Controller
          name='first'
          defaultValue=''
          control={control}
          render={({ field }) => <Input fullWidth placeholder={t('firstNameLabel')} {...field} />}
        />
        <Controller
          name='lastname'
          defaultValue=''
          control={control}
          render={({ field }) => <Input fullWidth placeholder={t('lastNameLabel')} {...field} />}
        />
      </form>
    </div>
  );
};
