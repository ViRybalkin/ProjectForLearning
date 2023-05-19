import { NotificationItemTypes } from '../NotificationItem/NotificationItem.types';

export interface NotificationListProps {
  isLoading: boolean;
  items?: Array<NotificationItemTypes>;
  classname?: string;
}
