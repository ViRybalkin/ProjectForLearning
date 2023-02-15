import React, {useCallback} from 'react';
import {Button, i18n} from "shared";
import {useTranslation} from "react-i18next";

const LanguageSwitcher = () => {
    const { t } = useTranslation();

    const onChangeLanguage =()=> {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru');
    };
    return (
        <Button theme={"clear"} onClick={() => onChangeLanguage()}>
            {t('languageBtn')}
        </Button>
    );
};

export {LanguageSwitcher};