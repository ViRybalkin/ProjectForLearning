import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
  component: AppImage,
  title: 'shared/AppImage',
} as ComponentMeta<typeof AppImage>;

export const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;
