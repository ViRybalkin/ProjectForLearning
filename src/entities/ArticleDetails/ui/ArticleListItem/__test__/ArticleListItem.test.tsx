import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { articleListMocks } from '@/__mocks__';
import { ArticleListView } from '../../../config/types/article.types';
import { JestProvider } from '@/app/providers/JestProvider';
import { ArticleListItem } from '../ArticleListItem';
import { routerPath } from '@/shared/constants';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Тестирование компонента ArticleList', () => {
  const user = userEvent.setup();
  const setup = (view: ArticleListView, article = articleListMocks[0]) => {
    render(
      <JestProvider>
        <ArticleListItem article={article} view={view} />
      </JestProvider>
    );
  };

  test('Если передан view Small блок должен быть виден', () => {
    setup('SMALL');

    const block = screen.getByTestId('articleListItemSmall');

    expect(block).toBeInTheDocument();
  });

  test('Если передан view Big блок должен быть виден', () => {
    setup('BIG');

    const block = screen.getByTestId('articleListItemBig');

    expect(block).toBeInTheDocument();
  });

  test('Кнопка читать далее должна иметь корректный урл', async () => {
    setup('BIG');

    const link = screen.getAllByTestId('appLinkId')[0];

    expect(link).toHaveAttribute('href', routerPath.articlesDetailsPage + articleListMocks[0].id);
  });

  test('Пост должен иметь корректный урл', () => {
    setup('SMALL');

    const link = screen.getAllByTestId('appLinkId')[0];

    expect(link).toHaveAttribute('href', routerPath.articlesDetailsPage + articleListMocks[0].id);
  });
});
