import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';

export default {
  component: NotificationList,
  title: 'entities/NotificationList',
} as ComponentMeta<typeof NotificationList>;

export const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;
