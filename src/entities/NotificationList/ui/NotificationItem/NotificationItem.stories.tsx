import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
  component: NotificationItem,
  title: 'entities/NotificationItem',
} as ComponentMeta<typeof NotificationItem>;

export const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
