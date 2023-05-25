import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import ArticlesDetailsPage from '../ArticlesDetailsPage';

describe('Тестирование страницы ArticleDetailsPage', () => {
  const setup = () => {
    render(
      <JestProvider>
        <ArticlesDetailsPage />
      </JestProvider>
    );
  };

  test('Тайтл должен отобразится', () => {
    setup();

    const title = screen.getByText('Comments');

    expect(title).toBeInTheDocument();
  });
});
