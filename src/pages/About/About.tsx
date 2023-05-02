import { useTranslation } from 'react-i18next';
import { Typography } from 'shared';
import { Page } from 'widget';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <Page testId='aboutTestId'>
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default About;
