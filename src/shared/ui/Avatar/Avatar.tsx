import { memo } from 'react';
import { AvatarProps } from './Avatar.types';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

const Avatar = memo(({ alt, size, src }: AvatarProps) => {
  const styles = {
    height: size,
    width: size,
  };

  const fallback = (
    <Skeleton
      width={Number(size)}
      height={Number(size)}
      borderRadius={50}
    />
  );

  return (
    <AppImage
      style={styles}
      classname={cls.avatar}
      fallback={fallback}
      src={src}
      alt={alt}
    />
  );
});

export { Avatar };
