import { ComponentMeta, ComponentStory } from '@storybook/react';

import ErrorPage from './ErrorPage';

export default {
  argTypes: {
    errorInfo: {
      control: { type: 'text' },
      defaultValue: 'errorInfo',
    },
    errorMessage: {
      control: { type: 'text' },
      defaultValue: 'errorMessage',
    },
    errorName: {
      control: { type: 'text' },
      defaultValue: 'errorName',
    },
  },
  component: ErrorPage,
  title: 'pages/ErrorPage',
} as ComponentMeta<typeof ErrorPage>;

export const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;
