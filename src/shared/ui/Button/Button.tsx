import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames';
import cls from './button.module.scss';
import { ButtonProps } from './Button.types';

const Button = memo(
  ({ children, className, disabled, form, size = 'medium', theme, type = 'button', ...otherProps }: ButtonProps) => (
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
