import React, { useEffect } from 'react';
import { Button, Input, Typography } from 'shared';
import { useTranslation } from 'react-i18next';
import { classNames } from 'app';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import cls from './profileCard.module.scss';
import { ProfileDataTypes } from '../../config';
import { getError, getIsLoading } from '../../config/selectors';
import { ProfileCardProps } from './ProfileCard.types';

export const ProfileCard = ({ data, readonly }: ProfileCardProps) => {
  const { handleSubmit, control, setValue } = useForm<ProfileDataTypes>();
  const { t } = useTranslation('profilePage');

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    setValue('first', data?.first || '');
    setValue('lastname', data?.lastname || '');
  }, [data, setValue]);

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
          render={({ field }) => <Input fullWidth readonly={readonly} placeholder={t('firstNameLabel')} {...field} />}
        />
        <Controller
          name='lastname'
          defaultValue=''
          control={control}
          render={({ field }) => <Input fullWidth readonly={readonly} placeholder={t('lastNameLabel')} {...field} />}
        />
      </form>
    </div>
  );
};
