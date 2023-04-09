import React, { memo } from 'react';
import { Avatar, Typography } from 'shared';
import { CommentCardProps } from './CommentCard.types';
import cls from './CommentCard.module.scss';

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  return (
    <div className={cls.commentWrapper}>
      <div className={cls.commentWrapper__userInfo}>
        {comment.user?.avatar ? <Avatar src={comment.user?.avatar} alt={comment.user?.avatar} size={30} /> : null}
        <Typography>{comment.user?.username}</Typography>
      </div>
      <Typography>{comment.comment}</Typography>
    </div>
  );
});
