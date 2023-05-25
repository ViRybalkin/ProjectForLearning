import React from 'react';
import { classNames } from '@/shared/config/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widget/ui/Page';
import { ErrorPageProps } from './ErrorPage.types';
import cls from './errorPage.module.scss';

const ErrorPage = ({ errorName, errorMessage, errorInfo }: ErrorPageProps) => {
  const { t } = useTranslation('error');

  const onReload = () => window.location.reload();
  return (
    <Page classname={cls.errorPage}>
      <div className={classNames(cls.errorInfoWrapper)}>
        <h1 className={classNames(cls.errorText)}>{t('errorTitle')}</h1>
        <h2 className={classNames(cls.errorText)}>
          {t('errorName')} {errorName}
        </h2>
        <h3 className={classNames(cls.errorText)}>
          {t('errorMessage')} {errorMessage}
        </h3>
        <br />
        <h4 className={classNames(cls.errorText)}>{errorInfo}</h4>
        <button type='button' onClick={onReload}>
          {t('reloadBtn')}
        </button>
      </div>
    </Page>
  );
};

export default ErrorPage;
