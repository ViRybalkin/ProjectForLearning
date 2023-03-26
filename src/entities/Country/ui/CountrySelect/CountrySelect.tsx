import React, { forwardRef } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { CountrySelectProps } from '../../config';

const CountrySelect = forwardRef(({ readonly, ...otherProps }: CountrySelectProps, ref) => {
  const { t } = useTranslation('profilePage');
  const options = [
    {
      value: 'Russia',
      content: 'Russia',
    },
    {
      value: 'Belarus',
      content: 'Belarus',
    },
    {
      value: 'Ukraine',
      content: 'Ukraine',
    },
    {
      value: 'Kazahstan',
      content: 'Kazahstan',
    },
    {
      value: 'Armenia',
      content: 'Armenia',
    },
  ];

  return <Select label={t('countryLabel')} options={options} fullWidth readonly={readonly} {...otherProps} />;
});

export { CountrySelect };
