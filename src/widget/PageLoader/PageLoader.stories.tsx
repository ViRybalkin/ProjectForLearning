import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageLoader } from './PageLoader';

export default {
  component: PageLoader,
  title: 'widget/PageLoader',
} as ComponentMeta<typeof PageLoader>;

const Proto: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Template = Proto.bind({});
