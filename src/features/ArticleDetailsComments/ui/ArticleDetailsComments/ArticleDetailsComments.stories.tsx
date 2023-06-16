import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  component: ArticleDetailsComments,
  title: 'features/ArticleDetailsComments',
} as ComponentMeta<typeof ArticleDetailsComments>;

export const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;