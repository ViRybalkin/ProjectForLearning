import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { NotificationButtonsMocks } from '@/__mocks__/NotificationButtons.mocks';

const url = window.location.origin;

export default {
  component: NotificationButton,
  parameters: {
    mockData: [
      {
        method: 'GET',
        response: () => {
          return NotificationButtonsMocks;
        },
        status: 200,
        url: `${url}/notifications`,
      },
    ],
  },
  title: 'features/NotificationButton',
} as ComponentMeta<typeof NotificationButton>;

export const Template: ComponentStory<typeof NotificationButton> = () => <NotificationButton />;
