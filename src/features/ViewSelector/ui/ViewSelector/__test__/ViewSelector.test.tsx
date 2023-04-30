import { render, screen } from '@testing-library/react';
import { ViewSelector } from 'features';
import { ArticleListView } from 'entities';
import userEvent from '@testing-library/user-event';

describe('Тестирования компонента VIewSelector', () => {
  const onViewClick = jest.fn();
  const user = userEvent.setup();
  const setup = (view?: ArticleListView) => {
    render(<ViewSelector onViewClick={onViewClick} view={view} />);
  };
  test('Нажатие на иконку должно вызвать onViewClick с правильными аргументами', async () => {
    setup();

    const buttons = screen.getAllByRole('button');

    await user.click(buttons[0]);

    expect(onViewClick).toBeCalledWith('SMALL');
  });

  test('Если передано дефолтное значение данная кнопка должна иметь корректный класс', () => {
    setup('SMALL');

    const buttons = screen.getAllByTestId('svgIconId');

    expect(buttons[1]).toHaveClass('notSelected');
  });
});
