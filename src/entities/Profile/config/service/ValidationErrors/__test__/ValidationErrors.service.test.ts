import {validateProfile} from "../ValidationErrors.service";

describe('Тестирование сервиса ValidationErrors', () => {
    test('Если не переданы имя или фамилия сервис должен вернуть корректные данные', () => {
        const profile = {
            age: 22,
            avatar: 'avatar',
            city: 'city',
            country: 'country',
            currency: 'currency',
            first: '',
            id: '',
            lastname: '',
            username: 'username',
        }

        const result = validateProfile(profile)

        expect(result).toEqual(['INCORRECT_USER_DATA'])
    })

    test('Если не переданы возраст сервис должен вернуть корректные данные', () => {
        const profile = {
            age: undefined,
            avatar: 'avatar',
            city: 'city',
            country: 'country',
            currency: 'currency',
            first: 'first',
            id: '1',
            lastname: 'lastname',
            username: 'username',
        }

        const result = validateProfile(profile)

        expect(result).toEqual(['INCORRECT_AGE'])
    })

    test('Если не переданы возраст сервис должен вернуть корректные данные', () => {
        const profile = {
            age: 22,
            avatar: 'avatar',
            city: 'city',
            currency: 'currency',
            first: 'first',
            lastname: 'lastname',
            username: 'username',
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
