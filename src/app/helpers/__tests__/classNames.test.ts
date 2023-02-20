import { classNames } from '../classNames';

describe('Тестирование функции classNames', () => {
  test('функция должна вернуть корректный класс если передан один параметр', () => {
    const result = classNames('class');

    expect(result).toEqual('class');
  });

  test('Если передано 2 параметра функция должна вернуть корректные классы', () => {
    const result = classNames('class', { hovered: true });

    expect(result).toEqual('class hovered');
  });

  test('Если один из двух модов false функция должна вернуть 1 мод', () => {
    const result = classNames('class', { focused: true, active: false });

    expect(result).toEqual('class focused');
  });

  test('Если передано 3 параметра функция должна вернуть корректные классы', () => {
    const result = classNames('class', { focused: true, active: false }, ['hovered', 'some-class']);

    expect(result).toEqual('class focused hovered some-class');
  });
});
