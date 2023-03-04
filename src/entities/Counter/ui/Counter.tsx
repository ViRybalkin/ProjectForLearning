import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared';
import { classNames } from 'app';
import { getCounterValue } from '../selectors';
import { decrement, increment, incrementByAmount } from '../config/CounterSlice';
import cls from './counter.module.scss';

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const onIncrement = useCallback(() => {
    dispatch(incrementByAmount(value));
  }, [dispatch, value]);

  return (
    <div className={classNames(cls.counterWrapper)}>
      <h1 data-testid="countId">{count}</h1>
      <div>
        <Button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
      <div>
        <Button aria-label='Decrement value' onClick={() => onIncrement()}>
          increment By Amount
        </Button>
        <input type='number' onChange={(e) => setValue(+e.target.value)} />
      </div>
    </div>
  );
};

export { Counter };
