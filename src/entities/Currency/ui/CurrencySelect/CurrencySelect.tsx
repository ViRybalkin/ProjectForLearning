import React, { forwardRef } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { CurrencySelectProps } from '../../config';

const CurrencySelect = forwardRef(({ readonly, ...otherProps }: CurrencySelectProps, ref) => {
  const { t } = useTranslation('profilePage');

  const options = [
    {
      value: 'RUB',
      content: 'RUB',
    },
    {
      value: 'USD',
      content: 'USD',
    },
    {
      value: 'EUR',
      content: 'EUR',
    },
  ];

  return <Select label={t('currencyLabel')} options={options} fullWidth readonly={readonly} {...otherProps} />;
});

export { CurrencySelect };
