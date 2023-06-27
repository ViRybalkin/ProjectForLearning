import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { BtnThemes } from '../Button.types';
import { Button } from '../Button';

describe('Тестирование компонента Button', () => {
  const setup = (theme?: BtnThemes, className?: string, children?: ReactNode | string) => {
    render(
      <Button
        theme={theme}
        className={className}>
        {children}
      </Button>
    );
  };

  test('Кнопка должна быть отрендерена', () => {
    setup();

    const button = screen.getByTestId('buttonTestId');
    expect(button).toBeInTheDocument();
  });

  test('Если передана тема кнопка должна содержать корректный класс', () => {
    setup('clear');

    const button = screen.getByTestId('buttonTestId');

    expect(button).toHaveClass('clear');
  });

  test('Если передана класс кнопка должна содержать корректный класс', () => {
    setup(undefined, 'someClass');

    const button = screen.getByTestId('buttonTestId');

    expect(button).toHaveClass('someClass');
  });

  test('Если передана компонент кнопка должна содержать компонент', () => {
    const children = <div data-testid='btnChild' />;
    setup(undefined, 'someClass', children);

    const buttonChild = screen.getByTestId('btnChild');

    expect(buttonChild).toBeInTheDocument();
  });
});
