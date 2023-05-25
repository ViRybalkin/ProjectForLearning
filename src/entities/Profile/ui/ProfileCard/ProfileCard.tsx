import React, { memo, useEffect } from 'react';
import { Loader } from '@/shared/ui/Loader';
import { Typography } from '@/shared/ui/Typography';
import { VStack } from '@/shared/ui/VStack';
import { HStack } from '@/shared/ui/HStack';
import { Input } from '@/shared/ui/Input';
import { Avatar } from '@/shared/ui/Avatar';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/helpers/classNames';
import { Controller, useForm } from 'react-hook-form';
import { CountrySelect } from '../../../Country/ui/CountrySelect/CountrySelect';
import cls from './profileCard.module.scss';
import { ProfileDataTypes } from '../../config/types/Profile.types';
import { ProfileCardProps } from './ProfileCard.types';
import { CurrencySelect } from '../../../Currency/ui/CurrencySelect';

export const ProfileCard = memo(({ data, readonly, isLoading, error, submitHandler }: ProfileCardProps) => {
  const { handleSubmit, control, setValue, watch, getValues } = useForm<ProfileDataTypes>();
  const { t } = useTranslation('profilePage');

  const onSubmit = (formData: ProfileDataTypes) => {
    if (data?.id) {
      const editData = {
        ...formData,
        id: data.id,
      };
      submitHandler(editData);
    }
  };

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

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [cls.isLoading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [cls.error])}>
        <VStack gap='10'>
          <Typography variant='h1'>Произошла ошибка</Typography>
          <Typography variant='h3'>Попробуйте перезагузить страницу</Typography>
        </VStack>
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard)}>
      <form id='hook-form' onSubmit={handleSubmit(onSubmit)}>
        {data?.avatar ? (
          <HStack classname={classNames(cls.avatarWrapper)}>
            <Avatar size={150} src={avatar} alt={t('avatarAlt')} />
          </HStack>
        ) : null}
        <HStack justify='between' gap='10' classname={cls.inputsWrapper}>
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
        </HStack>
        <HStack justify='between' gap='10' classname={cls.inputsWrapper}>
          <Controller
            name='age'
            defaultValue={0}
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
        </HStack>
        <HStack justify='between' gap='10' classname={cls.inputsWrapper}>
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
        </HStack>
        <HStack justify='between' gap='10' classname={cls.inputsWrapper}>
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
        </HStack>
      </form>
    </div>
  );
});
