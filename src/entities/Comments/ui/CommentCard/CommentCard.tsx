import React, { memo } from 'react';
import { Avatar, Skeleton, Typography } from 'shared';
import { CommentCardProps } from './CommentCard.types';
import cls from './CommentCard.module.scss';

export const CommentCard = memo(({ comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={cls.commentWrapper}>
        <div className={cls.commentWrapper__userInfo}>
          <Skeleton width={50} height={50} borderRadius='50%' />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton width='100%' height={60} />
      </div>
    );
  }

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
