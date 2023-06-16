import {authByUserNameThunk} from "../../services/LoginByUserName.service";
import {authActions, authByUserNameReducer} from "../AuthByUserNameSlice";

describe('Тестирование слайса authByUserName', () => {
    test('должен вернуть начальное состояние', () => {
        expect(authByUserNameReducer(undefined, {type: undefined})).toEqual(
            {
                error: undefined,
                isLoading: false,
                password: '',
                username: '',
            }
        )
    })

    test('стейт должен содержать корректные данные', () => {
        const data = {
            error: undefined,
            isLoading: false,
            password: 'password',
            username: 'name',
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
            payload: 'some error',
            type: authByUserNameThunk.rejected.type,
        };

        const state = {
            error: undefined,
            isLoading: true,
            password: '',
            username: '',
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
            payload: 'some data',
            type: authByUserNameThunk.fulfilled.type,
        };

        const state = {
            error: undefined,
            isLoading: true,
            password: '',
            username: '',
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
            error: undefined,
            isLoading: false,
            password: '',
            username: '',
        };

        expect(authByUserNameReducer(state, action)).toEqual(
            {
                ...state,
                isLoading: true,
            })
    });
})