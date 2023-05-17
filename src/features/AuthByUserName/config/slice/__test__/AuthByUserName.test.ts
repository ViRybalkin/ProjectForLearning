import {authByUserNameThunk} from "../../services/LoginByUserName.service";
import {authActions, authByUserNameReducer} from "../AuthByUserNameSlice";

describe('Тестирование слайса authByUserName', () => {
    test('должен вернуть начальное состояние', () => {
        expect(authByUserNameReducer(undefined, {type: undefined})).toEqual(
            {
                username: '',
                password: '',
                error: undefined,
                isLoading: false,
            }
        )
    })

    test('стейт должен содержать корректные данные', () => {
        const data = {
            username: 'name',
            password: 'password',
            isLoading: false,
            error: undefined,
        }
        expect(authByUserNameReducer(undefined, authActions.setUserData(data))).toEqual(
            {
                ...data,
                error: undefined,
                isLoading: false,
            }
        )
    });

    test('authByUserNameThunk rejected должен изменить данные', () => {
        const action = {
            type: authByUserNameThunk.rejected.type,
            payload: 'some error',
        };

        const state = {
            username: '',
            password: '',
            error: undefined,
            isLoading: true,
        };

        expect(authByUserNameReducer(state, action)).toEqual(
            {
                ...state,
                error: 'some error',
                isLoading: false,
            })
    });

    test('authByUserNameThunk fulfilled должен изменить данные', () => {
        const action = {
            type: authByUserNameThunk.fulfilled.type,
            payload: 'some data',
        };

        const state = {
            username: '',
            password: '',
            error: undefined,
            isLoading: true,
        };

        expect(authByUserNameReducer(state, action)).toEqual(
            {
                ...state,
                isLoading: false,
            })
    });

    test('authByUserNameThunk pending должен изменить данные', () => {
        const action = {
            type: authByUserNameThunk.pending.type,
        };

        const state = {
            username: '',
            password: '',
            error: undefined,
            isLoading: false,
        };

        expect(authByUserNameReducer(state, action)).toEqual(
            {
                ...state,
                isLoading: true,
            })
    });
})