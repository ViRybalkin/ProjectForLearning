import {validateProfile} from "../ValidationErrors.service";

describe('Тестирование сервиса ValidationErrors', () => {
    test('Если не переданы имя или фамилия сервис должен вернуть корректные данные', () => {
        const profile = {
            id: '',
            first: '',
            lastname: '',
            currency: 'currency',
            country: 'country',
            city: 'city',
            username: 'username',
            avatar: 'avatar',
            age: 22,
        }

        const result = validateProfile(profile)

        expect(result).toEqual(['INCORRECT_USER_DATA'])
    })

    test('Если не переданы возраст сервис должен вернуть корректные данные', () => {
        const profile = {
            id: '1',
            first: 'first',
            lastname: 'lastname',
            currency: 'currency',
            country: 'country',
            city: 'city',
            username: 'username',
            avatar: 'avatar',
            age: undefined,
        }

        const result = validateProfile(profile)

        expect(result).toEqual(['INCORRECT_AGE'])
    })

    test('Если не переданы возраст сервис должен вернуть корректные данные', () => {
        const profile = {
            first: 'first',
            lastname: 'lastname',
            currency: 'currency',
            city: 'city',
            username: 'username',
            avatar: 'avatar',
            age: 22,
        }

        // @ts-ignore
        const result = validateProfile(profile)

        expect(result).toEqual(['INCORRECT_COUNTRY'])
    })

    test('Если не переданы профиль сервис должен вернуть корректные данные', () => {
        // @ts-ignore
        const result = validateProfile(undefined)

        expect(result).toEqual(["NO_DATA", "INCORRECT_USER_DATA", "INCORRECT_AGE", "INCORRECT_COUNTRY"])
    })
})
