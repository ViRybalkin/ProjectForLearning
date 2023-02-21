import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Proto: ComponentStory<typeof ThemeSwitcher> = () => (<ThemeSwitcher />);

export const Template = Proto.bind({});
