import React, { memo, useCallback } from 'react';
import { useAppDispatch } from 'app';
import { Button, HStack, Typography } from 'shared';
import { useTranslation } from 'react-i18next';
import { getUser, ProfileAction } from 'entities';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadOnly } from 'entities/Profile/config/selectors';
import cls from './ProfileHeader.module.scss';
import { ProfileHeaderProps } from './ProfileHeader.types';

export const ProfileHeader = memo(({ isEditDisabled }: ProfileHeaderProps) => {
  const { t } = useTranslation('profilePage');

  const dispatch = useAppDispatch();
  const isReadOnly = useSelector(getProfileReadOnly);
  const user = useSelector(getUser);
  const profile = useSelector(getProfileData);

  const isCanEdit = user?.id === profile?.id;

  const onEditHandler = useCallback(() => {
    dispatch(ProfileAction.setReadonly());
  }, [dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(ProfileAction.onCancel());
  }, [dispatch]);

  return (
    <HStack justify='between' classname={cls.title}>
      <Typography variant='h1'>{t('profileCardTitle')}</Typography>
      {isCanEdit ? (
        <div>
          {isReadOnly ? (
            <Button theme='contained' disabled={isEditDisabled} onClick={onEditHandler}>
              {t('editBtn')}
            </Button>
          ) : (
            <HStack gap="10">
              <Button type='submit' form='hook-form' theme='contained'>
                {t('save')}
              </Button>
              <Button theme='contained' onClick={onCancelHandler}>
                {t('cancel')}
              </Button>
            </HStack>
          )}
        </div>
      ) : null}
    </HStack>
  );
});
