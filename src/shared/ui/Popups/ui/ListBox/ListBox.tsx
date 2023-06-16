import { forwardRef } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/helpers/classNames';
import { Typography } from '../../../Typography';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/Popups.module.scss';
import { ListBoxProps } from './ListBox.types';

export const ListBox = forwardRef(
  ({ fullWidth, label, onChange, options, readonly, size = 'medium', value }: ListBoxProps, ref) => {
    const classes = {
      [cls.fullWidth]: fullWidth,
    };

    const selectedOption = options.find((el) => el.value === value);

    return (
      <HListBox
        disabled={readonly}
        as='div'
        className={classNames(popupsCls.popups)}
        value={selectedOption}
        onChange={(e) => onChange(String(e.id))}>
        {label ? <Typography>{label}</Typography> : null}
        <HListBox.Button className={classNames(cls.button, classes, [cls[size]])}>{value}</HListBox.Button>
        <HListBox.Options className={classNames(popupsCls.items, classes, [cls.options])}>
          {options.map((item) => (
            <HListBox.Option className={cls.item} key={item.id} value={item} disabled={item.unavailable}>
              {({ active, selected }) => (
                <div
                  className={classNames('', {
                    [cls.unavailable]: item.unavailable,
                    [popupsCls.active]: active,
                    ...classes,
                  })}>
                  {selected && '!!!'}
                  {item.value}
                </div>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    );
  }
);
