import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const notificationItem = {
  description: 'Описание Описание Описание',
  id: '1',
  title: 'Заголовок',
};

export default {
  argTypes: {
    item: {
      defaultValue: notificationItem,
    },
  },
  component: NotificationItem,
  title: 'entities/NotificationItem',
} as ComponentMeta<typeof NotificationItem>;

export const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
