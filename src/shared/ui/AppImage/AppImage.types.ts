import { ImgHTMLAttributes, ReactElement } from 'react';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  classname?: string;
  errorFallback?: ReactElement;
  fallback?: ReactElement;
}
