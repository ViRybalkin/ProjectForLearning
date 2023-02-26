import { useTranslation } from 'react-i18next';
import { classNames } from 'app';
import cls from './notFound.module.scss';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFound)}>
      <h1>{t('notFound')}</h1>
    </div>
  );
};

export default NotFound;
