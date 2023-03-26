import React, { useEffect } from 'react';
import { Button, Input, Typography } from 'shared';
import { useTranslation } from 'react-i18next';
import { classNames } from 'app';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect } from '../../../Country/ui/CountrySelect';
import cls from './profileCard.module.scss';
import { ProfileDataTypes } from '../../config';
import { getError, getIsLoading } from '../../config/selectors';
import { ProfileCardProps } from './ProfileCard.types';
import { CurrencySelect } from '../../../Currency/ui/CurrencySelect';

export const ProfileCard = ({ data, readonly }: ProfileCardProps) => {
  const { handleSubmit, control, setValue, watch } = useForm<ProfileDataTypes>();
  const { t } = useTranslation('profilePage');

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const avatar = watch('avatar');

  useEffect(() => {
    setValue('first', data?.first || '');
    setValue('lastname', data?.lastname || '');
    setValue('city', data?.city || '');
    setValue('age', data?.age || undefined);
    setValue('username', data?.username || '');
    setValue('avatar', data?.avatar || '');
    setValue('country', data?.country || '');
    setValue('currency', data?.currency || '');
  }, [data, setValue]);

  return (
    <div className={classNames(cls.profileCard)}>
      <div className={classNames(cls.title)}>
        <Typography variant='h3'>{t('profileCardTitle')}</Typography>
        <Button theme='contained'>{t('editBtn')}</Button>
      </div>
      <form>
        {data?.avatar ? (
          <div className={classNames(cls.avatarWrapper)}>
            <Avatar size={150} src={avatar} alt={t('avatarAlt')} />
          </div>
        ) : null}
        <div className={classNames(cls.inputsWrapper)}>
          <Controller
            name='first'
            defaultValue=''
            control={control}
            render={({ field }) => (
              <Input
                label={t('firstNameLabel')}
                fullWidth
                readonly={readonly}
                placeholder={t('firstNameLabel')}
                {...field}
              />
            )}
          />
          <Controller
            name='lastname'
            defaultValue=''
            control={control}
            render={({ field }) => (
              <Input
                label={t('lastNameLabel')}
                fullWidth
                readonly={readonly}
                placeholder={t('lastNameLabel')}
                {...field}
              />
            )}
          />
        </div>
        <div className={classNames(cls.inputsWrapper)}>
          <Controller
            name='age'
            control={control}
            render={({ field }) => (
              <Input
                label={t('ageLabel')}
                fullWidth
                type='number'
                readonly={readonly}
                placeholder={t('ageLabel')}
                {...field}
              />
            )}
          />
          <Controller
            name='city'
            defaultValue=''
            control={control}
            render={({ field }) => (
              <Input label={t('cityLabel')} fullWidth readonly={readonly} placeholder={t('cityLabel')} {...field} />
            )}
          />
        </div>
        <div className={classNames(cls.inputsWrapper)}>
          <Controller
            name='username'
            defaultValue=''
            control={control}
            render={({ field }) => (
              <Input
                label={t('usernameLabel')}
                fullWidth
                readonly={readonly}
                placeholder={t('usernameLabel')}
                {...field}
              />
            )}
          />
          <Controller
            name='avatar'
            defaultValue=''
            control={control}
            render={({ field }) => (
              <Input label={t('avatarLabel')} fullWidth readonly={readonly} placeholder={t('avatarLabel')} {...field} />
            )}
          />
        </div>
        <div className={classNames(cls.inputsWrapper)}>
          <Controller
            name='country'
            defaultValue=''
            control={control}
            render={({ field }) => <CountrySelect readonly={readonly} {...field} />}
          />
          <Controller
            name='currency'
            defaultValue=''
            control={control}
            render={({ field }) => <CurrencySelect readonly={readonly} {...field} />}
          />
        </div>
      </form>
    </div>
  );
};
