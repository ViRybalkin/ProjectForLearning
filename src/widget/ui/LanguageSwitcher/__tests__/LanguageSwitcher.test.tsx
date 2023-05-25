import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { LanguageSwitcher } from '../LanguageSwitcher';

describe('Тестирование компонента LanguageSwitcher', () => {
  const setup = () => {
    render(
      <JestProvider>
        <LanguageSwitcher />
      </JestProvider>
    );
  };

  test('Компонент должна отрендериться', () => {
    setup();

    const btn = screen.getByTestId('buttonTestId');

    expect(btn).toBeInTheDocument();
  });
});
