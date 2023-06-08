import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPage from './AdminPage';

export default {
  title: 'pages/AdminPage',
  component: AdminPage,
} as ComponentMeta<typeof AdminPage>;

export const Template: ComponentStory<typeof AdminPage> = () => <AdminPage />;
