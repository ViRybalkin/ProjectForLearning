import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  return <div data-testid="aboutTestId">{t('title')}</div>;
};

export default About;
