import { render, screen } from '@testing-library/react';
import { Typography } from 'shared';
import { TypographyProps } from 'shared/ui/Typography/Typography.types';

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

describe('Тестирование компонента Typography', () => {
  const setup = (variant?: TypographyProps['variant'], error = false) => {
    render(
      <Typography error={error} variant={variant}>
        some Text
      </Typography>
    );
  };

  test('Если не передан вариант компонент должен вернуть дефолтный тэг', () => {
    setup();

    const typo = screen.getByTestId('typographyId');

    expect(typo.tagName.toLowerCase()).toEqual('p');
  });

  test('Если переда error компонент должен вернуть корректный тэг', () => {
    setup('h1', true);

    const typo = screen.getByTestId('typographyId');

    expect(typo.tagName.toLowerCase()).toEqual('p');
  });

  test('Если переда error компонент должен иметь корректный класс', () => {
    setup('h1', true);

    const typo = screen.getByTestId('typographyId');

    expect(typo).toHaveClass('error');
  });

  describe.each(variants)('Тестирование вариантов', (value) => {
    it(`Если передан вариант ${value} компонент должен вернуть корректный тэг`, () => {
      const variant = value as TypographyProps['variant'];
      setup(variant);

      const typo = screen.getByTestId('typographyId');

      expect(typo.tagName.toLowerCase()).toEqual(variant);
    });
  });
});
