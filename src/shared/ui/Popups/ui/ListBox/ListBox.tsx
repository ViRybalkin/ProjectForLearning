import React, { forwardRef } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '../../../../config/helpers/classNames';
import { Typography } from '../../../Typography';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/Popups.module.scss';
import { ListBoxProps } from './ListBox.types';

export const ListBox = forwardRef(
  ({ onChange, options, value, label, readonly, fullWidth, size = 'medium' }: ListBoxProps, ref) => {
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
                    [popupsCls.active]: active,
                    [cls.unavailable]: item.unavailable,
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
