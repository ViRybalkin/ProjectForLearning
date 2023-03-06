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
    },
    [onClose]
  );

  return (
    <form className={classNames(cls.form)} name='login' onSubmit={onSubmit}>
      <div className={classNames(cls.inputsWrapper)}>
        <Input fullWidth className='mb10' placeholder={t('userNameLogin')} />
        <Input fullWidth placeholder={t('userNamePassword')} />
      </div>
      <div className={classNames(cls.btnWrapper)}>
        <Button data-testid='saveBtnId' theme='contained' type='submit'>
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
