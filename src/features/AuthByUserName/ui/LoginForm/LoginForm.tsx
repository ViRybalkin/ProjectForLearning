import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { DynamicComponent } from '@/shared/providers/DynamicComponent';
import { Input } from '@/shared/ui/Input';
import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/helpers/classNames';
import { getIsLoading } from '../../config/selector/getIsLoading';
import { getError } from '../../config/selector/getError';
import { authActions, authByUserNameReducer } from '../../config/slice/AuthByUserNameSlice';
import cls from './LoginForm.module.scss';
import { LoginFormProps, LoginFormTypes } from './LoginForm.types';
import { authByUserNameThunk } from '../../config/services/LoginByUserName.service';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';

const LoginForm = ({ onClose }: LoginFormProps) => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm<LoginFormTypes>();
  const dispatch = useAppDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onSubmit = useCallback(
    async (data: LoginFormTypes) => {
      dispatch(
        authActions.setUserData({
          username: data.username,
          password: data.password,
        })
      );
      const res = await dispatch(authByUserNameThunk({ username: data.username, password: data.password }));
      if (res?.meta?.requestStatus === 'fulfilled') {
        onClose();
      }
    },
    [dispatch, onClose]
  );

  return (
    <DynamicComponent shouldRemoveAfterUnmount reducers={{ login: authByUserNameReducer }}>
      <form className={classNames(cls.form)} onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames(cls.inputsWrapper)}>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Input
                data-testid='usernameInputId'
                fullWidth
                className='mb10'
                placeholder={t('userNameLogin')}
                {...field}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Input
                type='password'
                data-testid='passwordInputId'
                fullWidth
                placeholder={t('userNamePassword')}
                {...field}
              />
            )}
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
    </DynamicComponent>
  );
};

export default LoginForm;
