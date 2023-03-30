import React, { memo, useCallback } from 'react';
import { classNames, useAppDispatch } from 'app';
import { Button, Typography } from 'shared';
import { useTranslation } from 'react-i18next';
import { ProfileAction } from 'entities';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile/config/selectors';
import cls from './ProfileHeader.module.scss';
import { ProfileHeaderProps } from './ProfileHeader.types';

export const ProfileHeader = memo(({ isEditDisabled }: ProfileHeaderProps) => {
  const { t } = useTranslation('profilePage');

  const dispatch = useAppDispatch();
  const isReadOnly = useSelector(getProfileReadOnly);

  const onEditHandler = useCallback(() => {
    dispatch(ProfileAction.setReadonly());
  }, [dispatch]);

  const onCancelHandler = useCallback(() => {
    dispatch(ProfileAction.onCancel());
  }, [dispatch]);

  return (
    <div className={classNames(cls.title)}>
      <Typography variant='h1'>{t('profileCardTitle')}</Typography>
      {isReadOnly ? (
        <Button theme='contained' disabled={isEditDisabled} onClick={onEditHandler}>
          {t('editBtn')}
        </Button>
      ) : (
        <div>
          <Button type='submit' form='hook-form' theme='contained'>
            {t('save')}
          </Button>
          <Button theme='contained' onClick={onCancelHandler}>
            {t('cancel')}
          </Button>
        </div>
      )}
    </div>
  );
});