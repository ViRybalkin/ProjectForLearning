import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

export const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;
