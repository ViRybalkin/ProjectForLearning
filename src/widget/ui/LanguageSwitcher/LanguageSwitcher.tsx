import { Button, i18n } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const LanguageSwitcher = memo(() => {
  const { t } = useTranslation();

  const onChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button theme='clear' onClick={() => onChangeLanguage()}>
      {t('languageBtn')}
    </Button>
  );
});

export { LanguageSwitcher };
