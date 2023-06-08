import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    code: {
      defaultValue: 'some code',
    },
  },
} as ComponentMeta<typeof Code>;

export const Template: ComponentStory<typeof Code> = ({ ...args }) => <Code {...args} />;
