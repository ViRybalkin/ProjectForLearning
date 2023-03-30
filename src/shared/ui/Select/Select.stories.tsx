import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

const options = [
  {
    value: 'first',
    content: 'first',
  },
  {
    value: 'second',
    content: 'second',
  },
  {
    value: 'third',
    content: 'third',
  },
];
export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    fullWidth: {
      type: 'boolean',
      defaultValue: false,
    },
    readonly: {
      type: 'boolean',
      defaultValue: false,
    },
    label: {
      type: 'string',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    options: {
      defaultValue: options,
    },
  },
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
