import { memo, useLayoutEffect, useState } from 'react';
import { AppImageProps } from './AppImage.types';
import { classNames } from '@/shared/helpers/classNames';

export const AppImage = memo(
  ({ alt = 'image', classname, errorFallback, fallback, src, ...otherProps }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';
      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setIsLoading(false);
        setIsError(true);
      };
    }, [src]);

    if (isLoading && fallback) {
      return fallback;
    }

    if (isError && errorFallback) {
      return errorFallback;
    }

    return (
      <img
        className={classNames('', {}, [classname])}
        src={src}
        alt={alt}
        {...otherProps}
      />
    );
  }
);
