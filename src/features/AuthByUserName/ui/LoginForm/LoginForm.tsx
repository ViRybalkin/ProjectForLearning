import React, { useCallback } from 'react';
import { Button, Input } from 'shared';
import { classNames } from 'app';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from 'features';
import { getUserName, getUserPassword } from 'features/AuthByUserName/config/selector';
import cls from './LoginForm.module.scss';
import { LoginFormProps } from './LoginForm.types';

const LoginForm = ({ onClose }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userPassword = useSelector(getUserPassword);

  const onSubmit = useCallback(() => {
    onClose();
    // dispatch(authByUserNameThunk({ username: userName, password: userPassword }));
  }, [dispatch, userName, userPassword]);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(authActions.setUserName(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(authActions.setPassword(value));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.form)}>
      <div className={classNames(cls.inputsWrapper)}>
        <Input onChange={onChangeUserName} fullWidth className='mb10' placeholder={t('userNameLogin')} />
        <Input onChange={onChangePassword} fullWidth placeholder={t('userNamePassword')} />
      </div>
      <div className={classNames(cls.btnWrapper)}>
        <Button data-testid='saveBtnId' onClick={onSubmit} theme='contained' type='submit'>
          {t('save')}
        </Button>
        <Button data-testid='closeBtnId' theme='contained' onClick={onClose}>
          {t('close')}
        </Button>
      </div>
    </div>
  );
};

export { LoginForm };
