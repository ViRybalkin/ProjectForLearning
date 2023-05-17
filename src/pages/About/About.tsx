import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography';
import { Page } from 'widget/ui/Page';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <Page testId='aboutTestId'>
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default About;
