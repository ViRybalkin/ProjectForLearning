import React, { forwardRef } from 'react';
import { classNames } from 'app';
import { InputProps } from './Input.types';
import cls from './input.module.scss';

const Input = forwardRef(
  (
    { placeholder, type = 'text', size = 'small', fullWidth = false, className, readonly, ...otherProps }: InputProps,
    ref
  ) => {
    const classes = {
      [cls.fullWidth]: fullWidth,
    };

    return (
      <input
        readOnly={readonly}
        className={classNames(cls.input, classes, [cls[size], className && cls[className]])}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />
    );
  }
);

export { Input };
