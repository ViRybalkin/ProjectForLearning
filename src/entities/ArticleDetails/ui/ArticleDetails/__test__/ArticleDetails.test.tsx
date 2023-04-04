import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import { ArticleDetails } from '../ArticleDetails';

describe('Тестирование компонента ArticleDetails', () => {
  const setup = (id?: string) => {
    render(
      <JestProvider>
        <ArticleDetails articleId={id} />
      </JestProvider>
    );
  };

  test('Компонент должен отрисоваться', async () => {
    setup('1');
    const text = `article details ${1}`;
    const page = screen.getByText(text);

    expect(page).toBeInTheDocument();
  });

  test('Если не передан id Компонент должен отрисоваться', () => {
    setup();
    const text = `article details`;
    const page = screen.getByText(text);

    expect(page).toBeInTheDocument();
  });
});
