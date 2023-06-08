import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
} as ComponentMeta<typeof ForbiddenPage>;

export const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;
