import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';

export default {
  component: ProfilePage,
  title: 'pages/ProfilePage',
} as ComponentMeta<typeof ProfilePage>;

export const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;
