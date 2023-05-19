export interface NotificationItemTypes {
  id: string;
  description: string;
  title: string;
  href?: string;
}

export interface NotificationItemProps {
  item: NotificationItemTypes;
  classname?: string;
}
