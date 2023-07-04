import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { ArticleDetails } from '../ArticleDetails';
import * as Selector from '../../../config/service/getArticleDetails/getArticleDetails.service';
import { ArticleDetailsMock } from '@/__mocks__';

jest.mock('../../../config/service/getArticleDetails/getArticleDetails.service', () => ({
  useGetArticleDetailsCommentsQuery: jest.fn(),
  // @ts-ignore
  ...jest.requireActual('../../../config/service/getArticleDetails/getArticleDetails.service'),
  __esModule: true,
}));

describe('Тестирование компонента ArticleDetails', () => {
  const setup = (id: string) => {
    render(
      <JestProvider>
        <ArticleDetails articleId={id} />
      </JestProvider>
    );
  };

  test('Компонент должен отрисоваться', async () => {
    // @ts-ignore
    jest.spyOn(Selector, 'useGetArticleDetailsQuery').mockImplementation(() => {
      return {
        data: ArticleDetailsMock,
        error: undefined,
        isError: false,
        isLoading: false,
        isSuccess: true,
      };
    });
    setup('1');
    const page = screen.getByTestId('articleDetailsId');

    expect(page).toBeInTheDocument();
  });

  test('Если не передан id Компонент должен отрисоваться', () => {
    // FIXME тс игнор из-за проверки гранничных ситуцаций
    // @ts-ignore
    setup();
    const page = screen.getByTestId('articleDetailsId');

    expect(page).toBeInTheDocument();
  });

  test('Если компонент в состоянии загрузки скелетон должен быть виден', () => {
    // @ts-ignore
    jest.spyOn(Selector, 'useGetArticleDetailsQuery').mockImplementation(() => {
      return {
        data: ArticleDetailsMock,
        error: undefined,
        isError: false,
        isLoading: true,
        isSuccess: true,
      };
    });
    setup('1');
    const page = screen.getByTestId('ArticleDetailsSkeletonId');

    expect(page).toBeInTheDocument();
  });

  test('Если компонент загружен с ошибкой блок с ошибкой должен быть виден', () => {
    // @ts-ignore
    jest.spyOn(Selector, 'useGetArticleDetailsQuery').mockImplementation(() => {
      return {
        data: ArticleDetailsMock,
        error: 'some Error',
        isError: true,
        isLoading: true,
        isSuccess: true,
      };
    });
    setup('1');
    const page = screen.getByTestId('ArticleDetailsErrorId');

    expect(page).toBeInTheDocument();
  });

  test('Если данные не пришли блок не должен быть виден', () => {
    // jest.spyOn(Selectors, 'getArticleDetailsData').mockImplementation(() => undefined);
    const page = screen.queryByTestId('articleDetailsId');

    expect(page).not.toBeInTheDocument();
  });
});
