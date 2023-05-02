import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetScrollPositionTypes} from "../types/getScrollPosition.types";

const initialState: GetScrollPositionTypes = {
    scrollPosition: {}
};

export const getScrollPositionSlice = createSlice({
    name: 'getScrollPosition',
    initialState,
    reducers: {
        setPosition(state: GetScrollPositionTypes, action: PayloadAction<{ path: string, position: number }>) {
            state.scrollPosition[action.payload.path] = action.payload.position
        },
    },
})

export const getScrollPositionAction = getScrollPositionSlice.actions;

export const {reducer: getScrollPositionReducer} = getScrollPositionSlice;
