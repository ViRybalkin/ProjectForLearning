import {ArticleListView} from "entities";
import React from "react";

export interface ViewSelectorProps {
    view?: ArticleListView;
    onViewClick: (view: ArticleListView) => void;
}

export interface ViewsList {
    view: ArticleListView,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}