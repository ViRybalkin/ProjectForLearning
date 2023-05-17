import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography';
import { Page } from 'widget/ui/Page';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  return (
    <Page testId='mainPageTestId'>
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default MainPage;
