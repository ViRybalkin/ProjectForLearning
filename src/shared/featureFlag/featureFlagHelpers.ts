import { FeatureFlagTypes } from '@/shared/types';

let featureFlag: FeatureFlagTypes;
export const setFeatureFlag = (flag?: FeatureFlagTypes) => {
  if (flag) {
    featureFlag = flag;
  }
};

export const getFeatureFlag = (flag: keyof FeatureFlagTypes) => {
  return featureFlag[flag];
};
