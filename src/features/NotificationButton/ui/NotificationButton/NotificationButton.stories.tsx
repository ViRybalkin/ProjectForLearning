import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

export default {
  component: NotificationButton,
  title: 'features/NotificationButton',
} as ComponentMeta<typeof NotificationButton>;

export const Template: ComponentStory<typeof NotificationButton> = () => <NotificationButton />;
