import React from 'react';
import { classNames } from 'app';
import { InputProps } from './Input.types';
import cls from './input.module.scss';

const Input = ({
  placeholder,
  type = 'text',
  size = 'small',
  fullWidth = false,
  className,
  ...otherProps
}: InputProps) => {
  const classes = {
    [cls.fullWidth]: fullWidth,
  };

  return (
    <input
      className={classNames(cls.input, classes, [cls[size], cls[className]])}
      type={type}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export { Input };
