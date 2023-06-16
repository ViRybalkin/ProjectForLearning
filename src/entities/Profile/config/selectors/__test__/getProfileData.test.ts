import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getProfileData} from "../getProfileData";

describe('Тестирование селектора getIsLoading', () => {
    test('getIsLoading должен вернуть корректные данные', () => {
        const state = {
            profile: {
                data: {
                    age: 26,
                    avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
                    city: "Saint-Petersburg",
                    country: "Russia",
                    currency: "RUB",
                    first: "Виталий",
                    lastname: "Рыбалкин",
                    username: "admin"
                }
            }
        };
        const result = getProfileData({
            profile: {
                data: {
                    age: 26,
                    avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
                    city: "Saint-Petersburg",
                    country: "Russia",
                    currency: "RUB",
                    first: "Виталий",
                    lastname: "Рыбалкин",
                    username: "admin"
                }
            }
        } as AppStoreTypes);

        expect(result).toEqual(state.profile.data);
    });
})