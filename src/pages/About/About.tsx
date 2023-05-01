import { useTranslation } from 'react-i18next';
import { Page, Typography } from 'shared';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <Page testId="aboutTestId">
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default About;
