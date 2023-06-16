import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  component: ThemeSwitcher,
  title: 'widget/ThemeSwitcher',
} as ComponentMeta<typeof ThemeSwitcher>;

const Proto: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const Template = Proto.bind({});
