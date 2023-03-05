import { FC } from 'react';
import { classNames } from 'app';
import cls from './button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ className, theme, children, size = 'medium', type = 'button', ...otherProps }) => (
  <button
    data-testid='buttonTestId'
    type={type}
    className={classNames(cls.button, {}, [className, cls[theme], cls[size]])}
    {...otherProps}>
    {children}
  </button>
);

export { Button };
