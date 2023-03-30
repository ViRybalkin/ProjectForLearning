import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ErrorPage from './ErrorPage';

export default {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  argTypes: {
    errorName: {
      control: { type: 'text' },
      defaultValue: 'errorName',
    },
    errorMessage: {
      control: { type: 'text' },
      defaultValue: 'errorMessage',
    },
    errorInfo: {
      control: { type: 'text' },
      defaultValue: 'errorInfo',
    },
  },
} as ComponentMeta<typeof ErrorPage>;

export const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;
