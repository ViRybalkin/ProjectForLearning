import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
  title: 'shared/AppImage',
  component: AppImage,
} as ComponentMeta<typeof AppImage>;

export const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;
