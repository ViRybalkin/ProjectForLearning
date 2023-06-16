import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';

export default {
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    placeholder: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'radio' },
      defaultValue: 'text',
      options: ['text', 'number'],
    },
  },
  component: Input,
  title: 'shared/Input',
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
