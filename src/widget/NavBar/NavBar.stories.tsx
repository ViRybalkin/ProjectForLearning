import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
  component: NavBar,
  title: 'widget/NavBar',
} as ComponentMeta<typeof NavBar>;

const Proto: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Template = Proto.bind({});
