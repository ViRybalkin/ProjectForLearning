import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { CommentList } from '../CommentList';
import { Comment } from '../../../config/types/Comment.types';

const commentList = [
  {
    id: '1',
    comment: 'коммент 1',
    user: {
      username: 'username 1',
      id: '1',
      avatar: 'avatar 1',
    },
  },
  {
    id: '2',
    comment: 'коммент 2',
    user: {
      username: 'username 2',
      id: '2',
      avatar: 'avatar 2',
    },
  },
  {
    id: '3',
    comment: 'коммент 3',
    user: {
      username: 'username 3',
      id: '3',
      avatar: 'avatar 3',
    },
  },
];

describe('Тестирование компонента CommentList', () => {
  const setup = (comments: Array<Comment>, isLoading?: boolean, error?: string) => {
    render(
      <JestProvider>
        <CommentList comments={comments} isLoading={isLoading} error={error} />
      </JestProvider>
    );
  };

  test('Комментарии должны отобразиться', () => {
    setup(commentList);

    const comment = screen.getByText('коммент 3');

    expect(comment).toBeInTheDocument();
  });

  test('Если комментарии не переданы not found текст должен быть виден', () => {
    setup([]);

    const notFoundText = screen.getByText('Comments not found');

    expect(notFoundText).toBeInTheDocument();
  });

  test('Если ошибка передана она должна быть видна', () => {
    const errorText = 'errorText';
    setup(commentList, false, errorText);

    const error = screen.getByText(errorText);

    expect(error).toBeInTheDocument();
  });

  test('Если статус загрузки равен тру она должна быть видна', () => {
    setup(commentList, true);

    const loadingBlock = screen.getByTestId('commentListLoading');

    expect(loadingBlock).toBeInTheDocument();
  });
});
