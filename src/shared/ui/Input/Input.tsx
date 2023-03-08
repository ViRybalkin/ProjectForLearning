import React, { useCallback } from 'react';
import { classNames } from 'app';
import { InputProps } from './Input.types';
import cls from './input.module.scss';

const Input = ({
  placeholder,
  type = 'text',
  size = 'small',
  fullWidth = false,
  onChange,
  className,
  ...otherProps
}: InputProps) => {
  const classes = {
    [cls.fullWidth]: fullWidth,
  };
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <input
      className={classNames(cls.input, classes, [cls[size], cls[className]])}
      type={type}
      onChange={(event) => onChangeHandler(event.target.value)}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export { Input };
