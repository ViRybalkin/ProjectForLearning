import { render, screen } from '@testing-library/react';
import { Input, InputProps } from 'shared';

describe('тестирование компонента Input', () => {
  const setup = (fullWidth?: boolean, size?: InputProps['size'], placeholder?: string, type?: InputProps['type']) => {
    render(<Input fullWidth={fullWidth} size={size} placeholder={placeholder} type={type} />);
  };

  test('если передан проп fullWidth Input должен содержать корректный класс', () => {
    setup(true);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('fullWidth');
  });

  test('если не передан проп fullWidth Input должен содержать корректный классы', () => {
    setup();

    const input = screen.getByRole('textbox');

    expect(input).not.toHaveClass('fullWidth');
  });

  test('если передан размер small Input должен содержать корректный классы', () => {
    setup(undefined, 'small');

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('small');
  });

  test('если передан размер medium Input должен содержать корректный классы', () => {
    setup(undefined, 'medium');

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('medium');
  });

  test('если передан размер large Input должен содержать корректный классы', () => {
    setup(undefined, 'large');

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('large');
  });

  test('если размер не передан  Input должен содержать дефолтный размер', () => {
    setup(undefined, undefined);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('small');
  });

  test('если передан placeholder Input должен содержать корректный placeholder', () => {
    setup(undefined, undefined, 'somePlaceholder');

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('placeholder', 'somePlaceholder');
  });

  test('если не передан placeholder Input не должен содержать  placeholder', () => {
    setup(undefined, undefined, undefined);

    const input = screen.getByRole('textbox');

    expect(input).not.toHaveAttribute('placeholder');
  });

  test('если передан type text Input не должен содержать корректный аттрибут', () => {
    setup(undefined, undefined, undefined, 'text');

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'text');
  });

  test('если передан type number Input не должен содержать корректный аттрибут', () => {
    setup(undefined, undefined, undefined, 'number');

    const input = screen.getByRole('spinbutton');

    expect(input).toHaveAttribute('type', 'number');
  });

  test('если не передан type Input не должен содержать дефолтный аттрибут', () => {
    setup(undefined, undefined, undefined, undefined);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'text');
  });
});
