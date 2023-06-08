import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecommendationList } from './RecommendationList';

export default {
  title: 'features/RecommendationList',
  component: RecommendationList,
} as ComponentMeta<typeof RecommendationList>;

export const Template: ComponentStory<typeof RecommendationList> = () => <RecommendationList />;
