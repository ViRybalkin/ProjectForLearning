import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectProps } from '../Select.types';
import { Select } from '../Select';

type SizeType = SelectProps['size'];

describe('Тестирование компонента Select', () => {
  const options = [
    {
      content: '1',
      value: '1',
    },
    {
      content: '2',
      value: '2',
    },
    {
      content: '3',
      value: '3',
    },
  ];

  const user = userEvent.setup();

  const setup = (label?: string, readOnly?: boolean, fullWidth?: boolean, size?: SizeType) => {
    render(
      <Select
        options={options}
        label={label}
        readonly={readOnly}
        fullWidth={fullWidth}
        size={size}
      />
    );
  };

  test('Если передан label он должен быть виден', () => {
    const label = 'label';
    setup(label);

    const labelText = screen.getByText(label);

    expect(labelText).toBeInTheDocument();
  });

  test('Если не передан label он не должен быть виден', () => {
    const label = 'label';
    setup();

    const labelText = screen.queryByText(label);

    expect(labelText).toBeNull();
  });

  test('Изменения опции должно поменять значение селекта', async () => {
    setup();
    const select = screen.getByTestId('selectId');

    await user.selectOptions(select, '2');

    expect(select).toHaveValue('2');
  });

  test('Если передан readOnly селект должен быть заблокирован', async () => {
    setup('', true);
    const select = screen.getByTestId('selectId');

    expect(select).toBeDisabled();
  });

  test('Если передан fullWidth селект должен содержать корректный стиль', async () => {
    setup('', true, true);
    const select = screen.getByTestId('selectId');

    expect(select).toHaveClass('fullWidth');
  });

  test('Если передан size селект должен содержать корректный стиль', async () => {
    setup('', true, true, 'small');
    const select = screen.getByTestId('selectId');

    expect(select).toHaveClass('small');
  });
});
