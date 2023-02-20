import { FC } from 'react';
import { classNames } from 'app';
import cls from './button.module.scss';
import { ButtonProps } from './Button.types';

const Button:FC<ButtonProps> = ({
  className, theme, children, ...otherProps
}) => (
  <button
    data-testid="buttonTestId"
    type="button"
    className={classNames(cls.button, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);

export { Button };
