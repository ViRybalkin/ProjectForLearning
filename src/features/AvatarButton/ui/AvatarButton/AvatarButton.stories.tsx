import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarButton } from './AvatarButton';

export default {
  component: AvatarButton,
  title: 'features/AvatarButton',
} as ComponentMeta<typeof AvatarButton>;

export const Template: ComponentStory<typeof AvatarButton> = () => <AvatarButton />;
