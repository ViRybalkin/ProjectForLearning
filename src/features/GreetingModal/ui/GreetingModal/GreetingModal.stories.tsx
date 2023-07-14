import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GreetingModal } from './GreetingModal';

export default {
  component: GreetingModal,
  title: 'features/GreetingModal',
} as ComponentMeta<typeof GreetingModal>;

export const Template: ComponentStory<typeof GreetingModal> = () => <GreetingModal />;
