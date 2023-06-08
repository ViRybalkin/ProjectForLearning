import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['clear', 'outlined', 'contained'],
      control: { type: 'radio' },
      defaultValue: 'clear',
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'text',
    },
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
