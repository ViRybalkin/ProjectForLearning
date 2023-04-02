import {handleError} from "shared/config/helpers/error";

describe('Тестирование функции handleError', () => {
  test('функция error должна вернуть корректные данные', () => {
    const error = {
      response: {
        data: {
          message: 'some error',
        },
        status: 100
      }
    }
    const result = handleError(error)

    expect(result).toEqual({
      data: {
        message: 'some error',
      },
      status: 100
    })
  })
});