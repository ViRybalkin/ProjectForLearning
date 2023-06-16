import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'text',
    },
    theme: {
      control: { type: 'radio' },
      defaultValue: 'clear',
      options: ['clear', 'outlined', 'contained'],
    },
  },
  component: Button,
  title: 'shared/Button',
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
