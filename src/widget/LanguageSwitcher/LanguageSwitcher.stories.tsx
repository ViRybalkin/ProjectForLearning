import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';

export default {
  component: LanguageSwitcher,
  title: 'widget/LanguageSwitcher',
} as ComponentMeta<typeof LanguageSwitcher>;

const Proto: ComponentStory<typeof LanguageSwitcher> = () => <LanguageSwitcher />;

export const Template = Proto.bind({});
