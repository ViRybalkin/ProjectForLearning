import { createSelector } from '@reduxjs/toolkit';
import { CounterState } from 'entities';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (state: CounterState) => state.value);
