import {$api} from "shared/config/api/api";
import * as Selectors from 'entities/ArticleDetails/config/selectors'
import {ArticleDetailsMock} from "app/__mocks__";
import * as ErrorHelper from "shared/config/helpers/error";
import * as Service from '../../service'
import {addCommentFormService} from "../AddCommentForm.service";

const errorResponse = {data: {message: 'error'}}
const mockedAxios = jest.mocked($api, true)
jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    // @ts-ignore
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
}));

jest.mock('entities/ArticleDetails/config/selectors', () => ({
    getArticleDetailsData: jest.fn(),
    // @ts-ignore
    ...jest.requireActual('entities/ArticleDetails/config/selectors'),
    __esModule: true,
}));

jest.mock('pages/ArticlesDetailsPage/config/service', () => ({
    getCommentsByArticleId: jest.fn(),
}));

describe('Тестирование сервиса addCommentFormService', () => {

    const extraData = {
        api: mockedAxios,
        navigate: jest.fn()
    }

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('статус запроса должен быть корректным', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data: 'data'}))
        const action = addCommentFormService('comment')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data: 'somedata'}))
        const action = addCommentFormService('comment')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    })
    test('если запрос вернул 200 getCommentsByArticleId должен быть вызван', async () => {
        jest.spyOn(Service, 'getCommentsByArticleId').mockImplementation(() => jest.fn())
        jest.spyOn(Selectors, 'getArticleDetailsData').mockImplementation(() => ArticleDetailsMock)
        mockedAxios.post.mockReturnValue(Promise.resolve({data: 'somedata'}))
        const action = addCommentFormService('comment')

        await action(dispatch, getState, extraData);

        expect(Service.getCommentsByArticleId).toHaveBeenCalledWith(ArticleDetailsMock.id)
    })

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject(Error('some reason')))
        const action = addCommentFormService('comment')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если запрос вернул 500 handleError Error должен быть вызван', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.post.mockReturnValue(Promise.reject(errorResponse))
        const action = addCommentFormService('comment')

        await action(dispatch, getState, extraData);

        expect(ErrorHelper.handleError).toBeCalled()
    });
})