import React, { memo, useCallback } from 'react';
import { Avatar, Button, Typography } from 'shared';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'shared/config/routes/Routes';
import { CommentCardProps } from './CommentCard.types';
import cls from './CommentCard.module.scss';

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  const navigate = useNavigate();

  const onUserClick = useCallback(() => {
    navigate(`${routerPath.profile}${comment.user?.id}`);
  }, [comment.user?.id, navigate]);

  return (
    <div className={cls.commentWrapper}>
      <Button onClick={onUserClick} className={cls.buttonColor} theme='clear'>
        <div className={cls.commentWrapper__userInfo}>
          {comment.user?.avatar ? <Avatar src={comment.user?.avatar} alt={comment.user?.avatar} size={30} /> : null}
          <Typography>{comment.user?.username}</Typography>
        </div>
      </Button>
      <Typography>{comment.comment}</Typography>
    </div>
  );
});
