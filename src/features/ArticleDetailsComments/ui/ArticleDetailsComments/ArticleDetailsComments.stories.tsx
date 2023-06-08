import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  title: 'features/ArticleDetailsComments',
  component: ArticleDetailsComments,
} as ComponentMeta<typeof ArticleDetailsComments>;

export const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;