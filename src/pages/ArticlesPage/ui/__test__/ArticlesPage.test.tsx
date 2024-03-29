import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JestProvider } from '@/app/providers/JestProvider';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import { setFeatureFlag } from '@/shared/featureFlag';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

const mockArticlePageInitialEffect = jest.fn();
jest.mock('../../config/service/articlePageInitialEffect.service', () => ({
  // @ts-ignore
  ...jest.requireActual('../../config/service/articlePageInitialEffect.service'),
  articlePageInitialEffect: () => mockArticlePageInitialEffect,
}));

describe('Тестирование страницы articlePage', () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
  });

  setFeatureFlag({
    isFiltersEnable: false,
    isSearchEnable: false,
  });

  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

  const user = userEvent.setup();
  const setup = () => {
    render(
      <JestProvider>
        <ArticlesPage />
      </JestProvider>
    );
  };

  test('рендер должен сделать вызов экшенов', () => {
    setup();

    expect(mockDispatch).toHaveBeenCalledWith(mockArticlePageInitialEffect);
  });

  test('нажатие на иконку вида постов должно вызвать функцию setArticleListView', async () => {
    setup();

    const buttons = screen.getAllByTestId('svgIconId');

    await user.click(buttons[1]);

    expect(mockDispatch).toBeCalledWith({
      payload: 'BIG',
      type: 'articleComments/setArticleListView',
    });
  });
});
