import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { ArticleDetails } from '../ArticleDetails';

jest.mock('../../../config/selectors', () => ({
  getArticleDetailsData: jest.fn().mockReturnValue(true),
  getArticleDetailsIsLoading: jest.fn().mockReturnValue(true),
  // @ts-ignore
  ...jest.requireActual('../../../config/selectors'),
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
    // jest.spyOn(Selectors, 'getArticleDetailsIsLoading').mockImplementation(() => false);
    // jest.spyOn(Selectors, 'getArticleDetailsData').mockImplementation(() => ArticleDetailsMock);
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
    // jest.spyOn(Selectors, 'getArticleDetailsIsLoading').mockImplementation(() => true);
    setup('1');
    const page = screen.getByTestId('ArticleDetailsSkeletonId');

    expect(page).toBeInTheDocument();
  });

  test('Если компонент загружен с ошибкой блок с ошибкой должен быть виден', () => {
    // jest.spyOn(Selectors, 'getArticleDetailsError').mockImplementation(() => 'error');
    // FIXME тс игнор из-за проверки гранничных ситуцаций
    // @ts-ignore
    setup();
    const page = screen.getByTestId('ArticleDetailsErrorId');

    expect(page).toBeInTheDocument();
  });

  test('Если данные не пришли блок не должен быть виден', () => {
    // jest.spyOn(Selectors, 'getArticleDetailsData').mockImplementation(() => undefined);
    const page = screen.queryByTestId('articleDetailsId');

    expect(page).not.toBeInTheDocument();
  });
});
