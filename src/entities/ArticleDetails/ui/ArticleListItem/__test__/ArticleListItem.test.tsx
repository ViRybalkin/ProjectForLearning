import { act, render, screen } from '@testing-library/react';
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

  test('Нажатие на читать далее должно вызвать функцию useNavigate с правильными данными', async () => {
    setup('BIG');

    const btn = screen.getByTestId('buttonTestId');

    await act(async () => {
      await user.click(btn);
    });

    expect(mockedUsedNavigate).toBeCalledWith(routerPath.articlesDetailsPage + articleListMocks[0].id);
  });

  test('Нажатие на пост должно вызвать функцию useNavigate с правильными данными', async () => {
    setup('SMALL');

    const btn = screen.getByTestId('articleListItemSmall');

    await act(async () => {
      await user.click(btn);
    });

    expect(mockedUsedNavigate).toBeCalledWith(routerPath.articlesDetailsPage + articleListMocks[0].id);
  });
});
