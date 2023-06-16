import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPage from './AdminPage';

export default {
  component: AdminPage,
  title: 'pages/AdminPage',
} as ComponentMeta<typeof AdminPage>;

export const Template: ComponentStory<typeof AdminPage> = () => <AdminPage />;
