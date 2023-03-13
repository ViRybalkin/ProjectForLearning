import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const DefaultButton: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
