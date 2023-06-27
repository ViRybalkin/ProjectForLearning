import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack } from '@/shared/ui/HStack';
import { Typography } from '@/shared/ui/Typography';
import { VStack } from '@/shared/ui/VStack';
import { Button } from '@/shared/ui/Button';
import { Avatar } from '@/shared/ui/Avatar';
import { CommentCardProps } from './CommentCard.types';
import cls from './CommentCard.module.scss';
import { generateRoute } from '@/shared/constants';

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  const navigate = useNavigate();

  const onUserClick = useCallback(() => {
    navigate(generateRoute.profile(comment.user?.id));
  }, [comment.user?.id, navigate]);

  return (
    <VStack
      fullWidth
      gap='20'
      align='start'
      classname={cls.commentWrapper}>
      <Button
        onClick={onUserClick}
        className={cls.buttonColor}
        theme='clear'>
        <HStack
          fullWidth
          gap='10'>
          {comment.user?.avatar ? (
            <Avatar
              src={comment.user?.avatar}
              alt={comment.user?.avatar}
              size={30}
            />
          ) : null}
          <Typography>{comment.user?.username}</Typography>
        </HStack>
      </Button>
      <Typography>{comment.comment}</Typography>
    </VStack>
  );
});
