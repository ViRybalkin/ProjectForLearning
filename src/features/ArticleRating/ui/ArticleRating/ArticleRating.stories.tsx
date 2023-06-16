import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRating } from './ArticleRating';

export default {
  component: ArticleRating,
  title: 'features/ArticleRating',
} as ComponentMeta<typeof ArticleRating>;

export const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;
