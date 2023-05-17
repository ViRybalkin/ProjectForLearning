import {AppStoreTypes} from "app/providers/StoreProvider";
import {getProfileData} from "../getProfileData";

describe('Тестирование селектора getIsLoading', () => {
    test('getIsLoading должен вернуть корректные данные', () => {
        const state = {
            profile: {
                data: {
                    first: "Виталий",
                    lastname: "Рыбалкин",
                    age: 26,
                    currency: "RUB",
                    country: "Russia",
                    city: "Saint-Petersburg",
                    username: "admin",
                    avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
                }
            }
        };
        const result = getProfileData({
            profile: {
                data: {
                    first: "Виталий",
                    lastname: "Рыбалкин",
                    age: 26,
                    currency: "RUB",
                    country: "Russia",
                    city: "Saint-Petersburg",
                    username: "admin",
                    avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
                }
            }
        } as AppStoreTypes);

        expect(result).toEqual(state.profile.data);
    });
})