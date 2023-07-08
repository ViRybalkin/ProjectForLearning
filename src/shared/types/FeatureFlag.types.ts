export interface FeatureFlagTypes {
  isSearchEnable?: boolean;
  isFiltersEnable?: boolean;
}

export interface ToggleFeatureOptions<T> {
  name: keyof FeatureFlagTypes;
  on: () => T;
  off: () => T;
}
