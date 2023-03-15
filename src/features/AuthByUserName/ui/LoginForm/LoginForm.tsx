import React, { useCallback } from 'react';
import { Button, Input, Typography } from 'shared';
import { classNames, DynamicComponent } from 'app';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { authByUserNameThunk } from 'features';
import { authActions, authByUserNameReducer } from 'features/AuthByUserName/config/slice/AuthByUserNameSlice';
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
    <DynamicComponent shouldRemoveAfterUnmount reducers={{ login: authByUserNameReducer }}>
      <form className={classNames(cls.form)} onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames(cls.inputsWrapper)}>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Input
                data-testid="usernameInputId"
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
                data-testid="passwordInputId"
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
