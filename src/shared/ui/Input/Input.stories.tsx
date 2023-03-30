import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    type: {
      options: ['text', 'number'],
      control: { type: 'radio' },
      defaultValue: 'text',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
