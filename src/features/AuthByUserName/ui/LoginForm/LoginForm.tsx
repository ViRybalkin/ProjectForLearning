import React, { useCallback } from 'react';
import { Button, Input, Typography } from 'shared';
import { classNames } from 'app';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { authActions, authByUserNameThunk } from 'features';
import { getError, getIsLoading } from '../../config/selector';
import cls from './LoginForm.module.scss';
import { LoginFormProps, LoginFormTypes } from './LoginForm.types';

const LoginForm = ({ onClose }: LoginFormProps) => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm();

  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onSubmit = useCallback(
    (data: LoginFormTypes) => {
      dispatch(
        authActions.setUserData({
          username: data.username,
          password: data.password,
        })
      );
      dispatch(authByUserNameThunk({ username: data.username, password: data.password }));
    },
    [dispatch]
  );

  return (
    <form className={classNames(cls.form)} onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(cls.inputsWrapper)}>
        <Controller
          name='username'
          control={control}
          defaultValue=''
          render={({ field }) => <Input fullWidth className='mb10' placeholder={t('userNameLogin')} {...field} />}
        />
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => <Input type='password' fullWidth placeholder={t('userNamePassword')} {...field} />}
        />
      </div>
      {error ? <Typography error>{error}</Typography> : null}
      <div className={classNames(cls.btnWrapper)}>
        <Button disabled={isLoading} data-testid='saveBtnId' theme='contained' type='submit'>
          {t('save')}
        </Button>
        <Button data-testid='closeBtnId' theme='contained' onClick={onClose}>
          {t('close')}
        </Button>
      </div>
    </form>
  );
};

export { LoginForm };
