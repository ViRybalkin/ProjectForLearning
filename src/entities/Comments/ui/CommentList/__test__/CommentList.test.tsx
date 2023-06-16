import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { CommentList } from '../CommentList';
import { Comment } from '../../../config/types/Comment.types';

const commentList = [
  {
    comment: 'коммент 1',
    id: '1',
    user: {
      avatar: 'avatar 1',
      id: '1',
      username: 'username 1',
    },
  },
  {
    comment: 'коммент 2',
    id: '2',
    user: {
      avatar: 'avatar 2',
      id: '2',
      username: 'username 2',
    },
  },
  {
    comment: 'коммент 3',
    id: '3',
    user: {
      avatar: 'avatar 3',
      id: '3',
      username: 'username 3',
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
