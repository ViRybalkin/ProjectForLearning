import {ProfileReducer} from "../ProfileSlice";

describe('Тестирование слайса Profile', () => {
  test('должен вернуть начальное состояние', () => {
    expect(ProfileReducer(undefined, {type: undefined})).toEqual(
      {
        data: undefined,
        error: '',
        isLoading: false,
        readonly: true,
      }
    )
  })

})