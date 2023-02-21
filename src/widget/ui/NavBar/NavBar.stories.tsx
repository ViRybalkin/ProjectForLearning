import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
  title: 'widget/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Proto: ComponentStory<typeof NavBar> = (args) => (<NavBar {...args} />);

export const Template = Proto.bind({});
