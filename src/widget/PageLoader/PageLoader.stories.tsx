import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageLoader } from './PageLoader';

export default {
  title: 'widget/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Proto: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Template = Proto.bind({});
