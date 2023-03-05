import React, { FormEvent, useCallback } from 'react';
import { Button, Input } from 'shared';
import { classNames } from 'app';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { LoginFormProps } from './LoginForm.types';

const LoginForm = ({ onClose }: LoginFormProps) => {
  const { t } = useTranslation();

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      onClose();
      event.preventDefault();
      console.log(event.target);
    },
    [onClose]
  );

  return (
    <form className={classNames(cls.form)} name='login' onSubmit={onSubmit}>
      <Input placeholder='user name' />
      <Input placeholder='password' />
      <div className={classNames(cls.btnWrapper)}>
        <Button theme='contained' type='submit'>
          {t('save')}
        </Button>
        <Button theme='contained' onClick={onClose}>
          {t('close')}
        </Button>
      </div>
    </form>
  );
};

export {LoginForm};
