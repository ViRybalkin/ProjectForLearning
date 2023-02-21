import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Primary = Template.bind({});
