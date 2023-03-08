import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    isOpen: {
      type: 'boolean',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof LoginModal>;

export const DefaultLoginModal: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;
