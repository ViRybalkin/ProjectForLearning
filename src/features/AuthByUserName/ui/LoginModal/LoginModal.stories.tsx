import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginModal } from './LoginModal';

export default {
  argTypes: {
    isOpen: {
      defaultValue: true,
      type: 'boolean',
    },
  },
  component: LoginModal,
  title: 'features/LoginModal',
} as ComponentMeta<typeof LoginModal>;

export const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;
