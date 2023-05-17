import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { i18n } from 'shared/config/i18n/i18nConfig';

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
