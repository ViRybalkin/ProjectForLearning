import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
  component: ForbiddenPage,
  title: 'pages/ForbiddenPage',
} as ComponentMeta<typeof ForbiddenPage>;

export const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;
