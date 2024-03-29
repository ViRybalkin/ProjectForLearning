import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { CurrencySelectProps } from './CurrencySelect.types';
import cls from './CurrencySelect.module.scss';

const CurrencySelect = forwardRef(({ onChange, readonly, value, ...otherProps }: CurrencySelectProps, ref) => {
  const { t } = useTranslation('profilePage');

  const options = [
    {
      id: 'RUB',
      value: 'RUB',
    },
    {
      id: 'USD',
      value: 'USD',
    },
    {
      id: 'EUR',
      value: 'EUR',
    },
  ];

  return (
    <div className={cls.select}>
      <ListBox
        onChange={onChange}
        label={t('currencyLabel')}
        options={options}
        fullWidth
        value={value}
        readonly={readonly}
        {...otherProps}
      />
    </div>
  );
});

export { CurrencySelect };
