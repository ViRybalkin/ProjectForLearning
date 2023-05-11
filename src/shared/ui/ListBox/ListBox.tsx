import React, { forwardRef, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'app';
import { Typography } from 'shared';
import cls from './ListBox.module.scss';
import { ListBoxProps } from './ListBox.types';

export const ListBox = forwardRef(
  ({ onChange, options, label, readonly, fullWidth, size = 'medium' }: ListBoxProps, ref) => {
    const [selectedPerson, setSelectedPerson] = useState(options[0]);

    const classes = {
      [cls.fullWidth]: fullWidth,
    };

    return (
      <HListBox
        disabled={readonly}
        as='div'
        className={classNames(cls.listBox)}
        value={selectedPerson}
        onChange={(e) => {
          onChange(e.value);
          setSelectedPerson(e);
        }}>
        {label ? <Typography>{label}</Typography> : null}
        <HListBox.Button className={classNames(cls.button, { [cls.fullWidth]: fullWidth }, [cls[size]])}>
          {selectedPerson.value}
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options)}>
          {options.map((item) => (
            <HListBox.Option className={cls.item} key={item.id} value={item} disabled={item.unavailable}>
              {({ active, selected }) => (
                <div className={classNames('', { [cls.active]: active, ...classes })}>
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
