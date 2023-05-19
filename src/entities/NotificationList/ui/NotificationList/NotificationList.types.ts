import { NotificationItemTypes } from '../NotificationItem/NotificationItem.types';

export interface NotificationListProps {
  items: Array<NotificationItemTypes>;
  isLoading: boolean;
  classname?: string;
}
