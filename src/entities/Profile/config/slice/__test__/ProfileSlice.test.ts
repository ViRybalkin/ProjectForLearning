import {getProfile, updateProfile} from "entities";
import {ProfileAction, ProfileReducer} from "../ProfileSlice";

describe('Тестирование слайса Profile', () => {
  test('должен вернуть начальное состояние', () => {
    expect(ProfileReducer(undefined, {type: undefined})).toEqual(
      {
        data: undefined,
        error: undefined,
        isLoading: false,
        readonly: true,
      }
    )
  });

  test('onCancel должен вернуть корректные данные', () => {
    const state = {
      isLoading: false,
      readonly: false,
    }
    expect(ProfileReducer(state, ProfileAction.onCancel())).toEqual(
      {
        data: undefined,
        isLoading: false,
        readonly: !state.readonly,
        error: undefined,
      })
  });

  test('onCancel должен вернуть корректные данные', () => {
    const state = {
      readonly: false,
      isLoading: false,
    };

    expect(ProfileReducer(state, ProfileAction.setReadonly())).toEqual(
      {
        data: undefined,
        isLoading: false,
        readonly: !state.readonly,
        error: undefined,
      })
  });

  test('getProfile pending должен изменить isLoading на true', () => {
    const action = {
      type: getProfile.pending.type,
    };

    const state = {
      isLoading: false,
      readonly: false,
    };

    expect(ProfileReducer(state, action)).toEqual(
      {
        data: undefined,
        isLoading: true,
        readonly: false,
        error: undefined,
      })
  });

  test('getProfile fulfilled должен изменить данные', () => {
    const action = {
      type: getProfile.fulfilled.type,
      payload: 'some data',
    };

    const state = {
      isLoading: true,
      readonly: false,
      data: undefined,
    };

    expect(ProfileReducer(state, action)).toEqual(
      {
        data: 'some data',
        isLoading: false,
        readonly: true,
      })
  });

  test('getProfile rejected должен изменить данные', () => {
    const action = {
      type: getProfile.rejected.type,
      payload: 'some error',
    };

    const state = {
      isLoading: false,
      readonly: false,
    };

    expect(ProfileReducer(state, action)).toEqual(
      {
        error: 'some error',
        isLoading: false,
        readonly: false,
      })
  });

  test('updateProfile pending должен изменить isLoading на true', () => {
    const action = {
      type: updateProfile.pending.type,
    };

    const state = {
      isLoading: false,
      readonly: false,
    };

    expect(ProfileReducer(state, action)).toEqual(
      {
        isLoading: true,
        readonly: false,
      })
  });

  test('updateProfile fulfilled должен изменить данные', () => {
    const action = {
      type: updateProfile.fulfilled.type,
      payload: 'some data',
    };

    const state = {
      isLoading: true,
      readonly: false,
      data: undefined,
    };

    expect(ProfileReducer(state, action)).toEqual(
      {
        data: 'some data',
        isLoading: false,
        readonly: true,
      })
  });

  test('updateProfile rejected должен изменить данные', () => {
    const action = {
      type: updateProfile.rejected.type,
      payload: 'some error',
    };

    const state = {
      isLoading: true,
      readonly: false,
    };

    expect(ProfileReducer(state, action)).toEqual(
      {
        validationError: 'some error',
        isLoading: false,
        readonly: false,
      })
  });

})