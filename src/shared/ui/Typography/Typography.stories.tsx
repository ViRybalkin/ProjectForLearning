import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './Typography';

export default {
  argTypes: {
    children: {
      defaultValue: 'someText',
      type: 'string',
    },
  },
  component: Typography,
  title: 'shared/Typography',
} as ComponentMeta<typeof Typography>;

export const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
