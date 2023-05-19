import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

export const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
