import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecommendationList } from './RecommendationList';

export default {
  component: RecommendationList,
  title: 'features/RecommendationList',
} as ComponentMeta<typeof RecommendationList>;

export const Template: ComponentStory<typeof RecommendationList> = () => <RecommendationList />;
