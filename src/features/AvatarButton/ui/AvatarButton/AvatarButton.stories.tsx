import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarButton } from './AvatarButton';

export default {
  title: 'features/AvatarButton',
  component: AvatarButton,
} as ComponentMeta<typeof AvatarButton>;

export const Template: ComponentStory<typeof AvatarButton> = () => <AvatarButton />;
