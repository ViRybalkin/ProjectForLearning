import { ArticleListView } from 'entities/ArticleDetails';
import React from 'react';

export interface ViewSelectorProps {
  view?: ArticleListView;
  onViewClick: (view: ArticleListView) => void;
}

export interface ViewsList {
  view: ArticleListView;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
