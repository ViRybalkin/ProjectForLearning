import { ToggleFeatureOptions } from '@/shared/types';
import { getFeatureFlag } from '../featureFlag/featureFlagHelpers';

export const toggleFeature = <T>({ name, off, on }: ToggleFeatureOptions<T>): T => {
  if (getFeatureFlag(name)) {
    return on();
  }
  return off();
};
