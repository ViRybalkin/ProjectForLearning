import React, { forwardRef } from 'react';
import { classNames } from 'app';
import { Typography } from 'shared';
import { SelectProps } from './Select.types';
import cls from './Select.module.scss';

const Select = forwardRef(
  ({ readonly, options, fullWidth, label, size = 'medium', ...otherProps }: SelectProps, ref) => {
    const classes = {
      [cls.fullWidth]: fullWidth,
    };

    return (
      <div className={classNames('', classes)}>
        {label ? <Typography>{label}</Typography> : null}
        <select className={classNames('', classes, [cls[size]])} disabled={readonly} {...otherProps}>
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.content}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export { Select };