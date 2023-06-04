import { useTranslation } from 'react-i18next';
import { Page } from '@/widget/Page';
import { Typography } from '@/shared/ui/Typography';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <Page testId='aboutTestId'>
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default About;
