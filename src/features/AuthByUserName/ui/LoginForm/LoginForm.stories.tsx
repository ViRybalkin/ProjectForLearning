import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  component: LoginForm,
  title: 'features/LoginForm',
} as ComponentMeta<typeof LoginForm>;

export const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
