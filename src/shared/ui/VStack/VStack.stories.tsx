import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VStack } from './VStack';

export default {
  component: VStack,
  title: 'shared/VStack',
} as ComponentMeta<typeof VStack>;

export const Template: ComponentStory<typeof VStack> = (args) => (
  <VStack {...args}>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
  </VStack>
);
