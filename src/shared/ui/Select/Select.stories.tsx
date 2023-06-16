import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

const options = [
  {
    content: 'first',
    value: 'first',
  },
  {
    content: 'second',
    value: 'second',
  },
  {
    content: 'third',
    value: 'third',
  },
];
export default {
  argTypes: {
    fullWidth: {
      defaultValue: false,
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    options: {
      defaultValue: options,
    },
    readonly: {
      defaultValue: false,
      type: 'boolean',
    },
    size: {
      control: { type: 'radio' },
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
    },
  },
  component: Select,
  title: 'shared/Select',
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
