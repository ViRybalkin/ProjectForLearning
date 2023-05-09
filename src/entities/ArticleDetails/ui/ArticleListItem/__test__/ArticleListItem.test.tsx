import { render, screen } from '@testing-library/react';
import { articleListMocks } from 'app/__mocks__';
import { ArticleListView } from 'entities';
import { JestProvider } from 'app';
import userEvent from '@testing-library/user-event';
import { routerPath } from 'shared/config/routes/Routes';
import { ArticleListItem } from '../ArticleListItem';

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
