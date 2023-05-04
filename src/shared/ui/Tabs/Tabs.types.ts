import { ReactNode } from 'react';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Array<TabItem>;
  value?: string;
  onTabChange: (tab: TabItem) => void;
}
