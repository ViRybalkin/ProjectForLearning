import { act, render, screen } from '@testing-library/react';
import { JestProvider, StoreProvider } from 'app';
import * as Selectors from 'entities/Profile/config/selectors';
import userEvent from '@testing-library/user-event';
import { ProfileHeader } from '../ProfileHeader';

jest.mock('entities/Profile/config/selectors', () => ({
  // @ts-ignore
  ...jest.requireActual('entities/Profile/config/selectors'),
  __esModule: true,
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Тестирование компонента ProfileHeader', () => {
  const user = userEvent.setup();
  const setup = (isEditDisabled = false) => {
    render(
      <JestProvider>
        <StoreProvider>
          <ProfileHeader isEditDisabled={isEditDisabled} />
        </StoreProvider>
      </JestProvider>
    );
  };

  test('Если isReadOnly то кнопка редактирования должна быть видна', () => {
    jest.spyOn(Selectors, 'getProfileReadOnly').mockImplementation(() => true);
    setup();

    const editBtn = screen.getByRole('button');
    const saveBtn = screen.queryByText('Save');
    const cancelBtn = screen.queryByText('Cancel');

    expect(saveBtn).not.toBeInTheDocument();
    expect(cancelBtn).not.toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
  });

  test('Если не isReadOnly то кнопка сохранить и отменить должна быть видна', () => {
    jest.spyOn(Selectors, 'getProfileReadOnly').mockImplementation(() => false);
    setup();

    const saveBtn = screen.getByText('Save');
    const cancelBtn = screen.getByText('Cancel');
    const editBtn = screen.queryByText('Edit');

    expect(saveBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
    expect(editBtn).not.toBeInTheDocument();
  });

  test('Если isEditDisabled равен true, кнопка редактировать должна быть заблокирована', () => {
    jest.spyOn(Selectors, 'getProfileReadOnly').mockImplementation(() => true);
    setup(true);

    const editBtn = screen.getByText('Edit');

    expect(editBtn).toBeDisabled();
  });

  test('Нажатие на редактировать должна вызвать функцию setReadonly', async () => {
    jest.spyOn(Selectors, 'getProfileReadOnly').mockImplementation(() => true);
    setup();

    const editBtn = screen.getByText('Edit');

    await act(async () => {
      await user.click(editBtn);
    });

    expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'profile/setReadonly' });
  });

  test('Нажатие на отменить должна вызвать функцию onCancel', async () => {
    jest.spyOn(Selectors, 'getProfileReadOnly').mockImplementation(() => false);
    setup();

    const cancelBtn = screen.getByText('Cancel');

    await act(async () => {
      await user.click(cancelBtn);
    });

    expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'profile/onCancel' });
  });

  test('Нажатие на сохранить должна вызвать функцию setReadonly', async () => {
    jest.spyOn(Selectors, 'getProfileReadOnly').mockImplementation(() => false);
    setup();

    const saveBtn = screen.getByText('Save');

    await act(async () => {
      await user.click(saveBtn);
    });

    expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'profile/setReadonly' });
  });
});
