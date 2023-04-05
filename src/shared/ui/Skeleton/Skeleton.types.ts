import { Property } from 'csstype';

export interface SkeletonProps {
  width: Property.Width<string | number>;
  height: Property.Height<string | number>;
  borderRadius?: Property.BorderRadius<string | number>;
  className?: string;
}
