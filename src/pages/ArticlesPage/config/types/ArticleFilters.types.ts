import {TabItem} from "shared";

export interface ArticleFiltersProps {
    onDirectionChange: (value: string) => void;
    onFieldChange: (value: string) => void;
    onSearchChange: (value: string) => void;
    onTabChange: (value: TabItem) => void;
}