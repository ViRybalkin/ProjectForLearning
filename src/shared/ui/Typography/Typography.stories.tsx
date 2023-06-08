import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './Typography';

export default {
  title: 'shared/Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'someText',
    },
  },
} as ComponentMeta<typeof Typography>;

export const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
