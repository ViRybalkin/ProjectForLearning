import { memo } from 'react';
import { classNames } from '../../config/helpers/classNames';
import cls from './button.module.scss';
import { ButtonProps } from './Button.types';

const Button = memo(
  ({ className, theme, children, size = 'medium', type = 'button', disabled, form, ...otherProps }: ButtonProps) => (
    <button
      form={form}
      disabled={disabled}
      data-testid='buttonTestId'
      type={type}
      className={classNames(cls.button, {}, [className, theme && cls[theme], cls[size]])}
      {...otherProps}>
      {children}
    </button>
  )
);

export { Button };
