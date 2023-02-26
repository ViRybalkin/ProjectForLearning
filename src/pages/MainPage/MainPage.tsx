import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('mainPage');
  return <div data-testid="mainPageTestId">{t('title')}</div>;
};

export default MainPage;
