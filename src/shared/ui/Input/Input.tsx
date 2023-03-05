import React from 'react';
import { classNames } from 'app';
import { InputProps } from './Input.types';
import cls from './input.module.scss';

const Input = ({ placeholder, type = 'text', size = 'small', fullWidth = false }: InputProps) => {
  const classes = {
    [cls.fullWidth]: fullWidth,
  };

  return <input className={classNames(cls.input, classes, [cls[size]])} type={type} placeholder={placeholder} />;
};

export { Input };
