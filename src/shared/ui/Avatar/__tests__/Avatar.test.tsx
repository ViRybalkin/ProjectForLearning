import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';

describe('Тестирование компонента Avatar', () => {
  const setup = (size?: number) => {
    render(
      <Avatar
        src=''
        alt='altText'
        size={size}
      />
    );
  };

  test('Аватар должен содержать корректный alt', () => {
    setup();

    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('alt', 'altText');
  });

  test('Аватар должен содержать корректные стили если изменен size', () => {
    const size = 150;
    setup(size);

    const avatar = screen.getByRole('img');

    expect(avatar).toHaveStyle(`height: ${size}px; width: ${size}px;`);
  });
});
