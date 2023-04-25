import {ArticleDetailsCommentsReducer} from "../ArticleDetailsCommentsSlice";
import {getCommentsByArticleId} from "../../service/ArticleDetailsComments.service";

const response = [
    {
        id: "1",
        comment: "some comment",
        postId: "1",
        userId: "1",
        user: {
            username: "admin",
            password: "123123",
            id: "1",
            userId: "1",
            avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg"
        }
    }
]

describe('Тестирование слайса ArticleDetailsCommentsSlice', () => {
    test('должен вернуть начальное состояние', () => {
        expect(ArticleDetailsCommentsReducer(undefined, {type: undefined})).toEqual(
            {
                isLoading: false,
                error: '',
                ids: [],
                entities: {},
            }
        )
    });

    test('ArticleDetailsCommentsSlice pending должен изменить isLoading на true', () => {
        const action = {
            type: getCommentsByArticleId.pending.type,
        };

        const state = {
            isLoading: false,
        };

        // @ts-ignore
        expect(ArticleDetailsCommentsReducer(state, action)).toEqual(
            {
                isLoading: true,
                error: undefined,
            })
    });

    test('ArticleDetailsCommentsSlice fulfilled должен изменить данные', () => {
        const action = {
            type: getCommentsByArticleId.fulfilled.type,
            payload: response
        };

        const state = {
            isLoading: true,
            data: undefined,
        };

        // @ts-ignore
        expect(ArticleDetailsCommentsReducer(state, action)).toEqual(
            {
               entities: {
                   "1": response[0]
               },
                ids: ['1'],
                isLoading: false,
            })
    });

    test('ArticleDetailsCommentsSlice rejected должен изменить данные', () => {
        const action = {
            type: getCommentsByArticleId.rejected.type,
            error: {
                    message: 'error'
                }
        };

        const state = {
            isLoading: false,
        };

        // @ts-ignore
        expect(ArticleDetailsCommentsReducer(state, action)).toEqual(
            {
                error: 'error',
                isLoading: false,
            })
    });

})