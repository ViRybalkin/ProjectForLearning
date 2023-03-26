import React, { memo } from 'react';
import { classNames } from 'app';
import { AvatarProps } from './Avatar.types';
import cls from './Avatar.module.scss';

const Avatar = memo(({ src, alt, size }: AvatarProps) => {
  const styles = {
    height: size,
    width: size,
  };
  return <img style={styles} className={classNames(cls.avatar)} src={src} alt={alt} />;
});

export { Avatar };
