import { render, screen } from '@testing-library/react';
import { articleListMocks } from 'app/__mocks__';
import { ArticleListView } from 'entities';
import { JestProvider } from 'app';
import { ArticleList } from '../ArticleList';

describe('Тестирование компонента ArticleList', () => {
  const setup = (isLoading?: boolean, view?: ArticleListView, error?: string, articles = articleListMocks) => {
    render(
      <JestProvider>
        <ArticleList articles={articles} isLoading={isLoading} error={error} view={view} />
      </JestProvider>
    );
  };

  test('Если isLoading true скелетон должен быть виден', () => {
    setup(true);

    const skeleton = screen.getByTestId('articleListSkeletonId');

    expect(skeleton).toBeInTheDocument();
  });

  test('Если error не пустая строка компонент с ошибкой должен быть виден', () => {
    setup(false, 'SMALL', 'rejected');

    const error = screen.getByTestId('articleListErrorId');

    expect(error).toBeInTheDocument();
  });

  test('блок с постами должен быть виден', () => {
    setup(false, 'SMALL');

    const block = screen.getByTestId('articleListId');

    expect(block).toBeInTheDocument();
  });

  test('если не переданы посты', () => {
    setup(false, 'SMALL', '', []);

    const block = screen.getByTestId('articleListId');

    expect(block.children).toHaveLength(0);
  });
});
