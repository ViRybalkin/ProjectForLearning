import { useTranslation } from 'react-i18next';
import { Page } from 'src/widget/Page';
import { Typography } from '@/shared/ui/Typography';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  return (
    <Page testId='mainPageTestId'>
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default MainPage;
