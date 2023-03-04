import {counterReducer, decrement, increment, incrementByAmount} from "../CounterSlice";

describe('тестирование CounterSlice', () => {

  test('counterSlice должен содержать дефолтные значение', () => {
    const reducer = counterReducer(undefined, {type: undefined});

    expect(reducer).toEqual({value: 0})
  })

  test('increment должен увеличить value если state равен undefined', () => {
    const reducer = counterReducer(undefined, increment());

    expect(reducer).toEqual({value: 1})
  })

  test('decrement должен уменьшить value если state равен undefined', () => {
    const reducer = counterReducer(undefined, decrement());

    expect(reducer).toEqual({value: -1})
  })

  test('increment by amount должен увеличить value если state равен undefined', () => {
    const reducer = counterReducer(undefined, incrementByAmount(12));

    expect(reducer).toEqual({value: 12})
  })

  test('increment должен увеличить value', () => {
    const state = {
      value: 10
    }
    const reducer = counterReducer(state, increment());

    expect(reducer).toEqual({value: 11})
  })

  test('decrement должен уменьшить value', () => {
    const state = {
      value: 10
    }
    const reducer = counterReducer(state, decrement());

    expect(reducer).toEqual({value: 9})
  })

  test('increment by amount должен увеличить value', () => {
    const state = {
      value: 10
    }
    const reducer = counterReducer(state, incrementByAmount(12));

    expect(reducer).toEqual({value: 22})
  })
});
