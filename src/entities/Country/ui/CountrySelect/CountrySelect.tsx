import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { CountrySelectProps } from './CountrySelect.types';
import cls from './CountrySelect.module.scss';

const CountrySelect = forwardRef(({ onChange, readonly, value, ...otherProps }: CountrySelectProps, ref) => {
  const { t } = useTranslation('profilePage');
  const options = [
    {
      id: 'Russia',
      value: 'Russia',
    },
    {
      id: 'Belarus',
      value: 'Belarus',
    },
    {
      id: 'Ukraine',
      value: 'Ukraine',
    },
    {
      id: 'Kazahstan',
      value: 'Kazahstan',
    },
    {
      id: 'Armenia',
      value: 'Armenia',
    },
  ];

  return (
    <div className={cls.select}>
      <ListBox
        onChange={onChange}
        label={t('countryLabel')}
        options={options}
        value={value}
        fullWidth
        readonly={readonly}
        {...otherProps}
      />
    </div>
  );
});

export { CountrySelect };
