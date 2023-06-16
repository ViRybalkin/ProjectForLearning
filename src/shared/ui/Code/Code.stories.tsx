import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
  argTypes: {
    code: {
      defaultValue: 'some code',
    },
  },
  component: Code,
  title: 'shared/Code',
} as ComponentMeta<typeof Code>;

export const Template: ComponentStory<typeof Code> = ({ ...args }) => <Code {...args} />;
