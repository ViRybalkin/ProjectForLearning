import { act, render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import ArticlesDetailsPage from '../ArticlesDetailsPage';
import * as Selector from '../../../../features/ArticleDetailsComments/config/service/getArticleDetailsComments.service';

jest.mock('../../../../features/ArticleDetailsComments/config/service/getArticleDetailsComments.service', () => ({
  useGetArticleDetailsCommentsQuery: jest.fn(),
  // @ts-ignore
  ...jest.requireActual('../../../../features/ArticleDetailsComments/config/service/getArticleDetailsComments.service'),
  __esModule: true,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Тестирование страницы ArticleDetailsPage', () => {
  const setup = () => {
    render(
      <JestProvider>
        <ArticlesDetailsPage />
      </JestProvider>
    );
  };

  test('Тайтл должен отобразится', async () => {
    // @ts-ignore
    jest.spyOn(Selector, 'useGetArticleDetailsCommentsQuery').mockImplementation(() => {
      return {
        data: [],
        error: null,
        isError: false,
        isLoading: true,
        isSuccess: true,
      };
    });
    await act(() => {
      setup();
    });

    const title = screen.getByText('Comments');

    expect(title).toBeInTheDocument();
  });
});
