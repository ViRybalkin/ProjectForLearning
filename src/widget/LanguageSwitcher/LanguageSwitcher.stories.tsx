import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';

export default {
  title: 'widget/LanguageSwitcher',
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

const Proto: ComponentStory<typeof LanguageSwitcher> = () => <LanguageSwitcher />;

export const Template = Proto.bind({});
