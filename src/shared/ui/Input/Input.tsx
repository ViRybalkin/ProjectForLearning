import React, { forwardRef } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import { Typography } from '../Typography';
import { InputProps } from './Input.types';
import cls from './input.module.scss';

const Input = forwardRef(
  (
    {
      placeholder,
      type = 'text',
      size = 'small',
      fullWidth = false,
      className,
      readonly,
      label,
      ...otherProps
    }: InputProps,
    ref
  ) => {
    const classes = {
      [cls.fullWidth]: fullWidth,
    };

    return (
      <div className={classNames('', classes)}>
        {label ? <Typography>{label}</Typography> : null}
        <input
          readOnly={readonly}
          className={classNames(cls.input, { ...classes, [cls.readonly]: readonly }, [cls[size], className])}
          type={type}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    );
  }
);

export { Input };
