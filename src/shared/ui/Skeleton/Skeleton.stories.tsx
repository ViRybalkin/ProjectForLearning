import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  argTypes: {
    borderRadius: {
      defaultValue: 50,
      type: 'number',
    },
    height: {
      defaultValue: 100,
      type: 'number',
    },
    width: {
      defaultValue: 100,
      type: 'number',
    },
  },
  component: Skeleton,
  title: 'shared/Skeleton',
} as ComponentMeta<typeof Skeleton>;

export const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;
