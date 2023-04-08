import { Comment } from '../../config/types/Comment.types';

export interface CommentListProps {
  comments: Array<Comment>;
  isLoading?: boolean;
  error?: string;
}
