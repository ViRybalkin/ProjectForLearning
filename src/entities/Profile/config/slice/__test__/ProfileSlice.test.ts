import {updateProfile} from "../../service/UpdateProfile/UpdateProfile.service";
import {getProfile} from "../../service/GetProfile/Profile.service";
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
                error: undefined,
                isLoading: false,
                readonly: !state.readonly,
            })
    });

    test('onCancel должен вернуть корректные данные', () => {
        const state = {
            isLoading: false,
            readonly: false,
        };

        expect(ProfileReducer(state, ProfileAction.setReadonly())).toEqual(
            {
                data: undefined,
                error: undefined,
                isLoading: false,
                readonly: !state.readonly,
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
                error: undefined,
                isLoading: true,
                readonly: false,
            })
    });

    test('getProfile fulfilled должен изменить данные', () => {
        const action = {
            payload: 'some data',
            type: getProfile.fulfilled.type,
        };

        const state = {
            data: undefined,
            isLoading: true,
            readonly: false,
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
            payload: 'some error',
            type: getProfile.rejected.type,
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
            payload: 'some data',
            type: updateProfile.fulfilled.type,
        };

        const state = {
            data: undefined,
            isLoading: true,
            readonly: false,
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
            payload: 'some error',
            type: updateProfile.rejected.type,
        };

        const state = {
            isLoading: true,
            readonly: false,
        };

        expect(ProfileReducer(state, action)).toEqual(
            {
                isLoading: false,
                readonly: false,
                validationError: 'some error',
            })
    });

})