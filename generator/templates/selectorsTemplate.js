module.exports = (selector) => {
  return `import {AppStoreTypes} from "app/providers/StoreProvider";
  
export const ${selector} = (state: AppStoreTypes) => state`;
};
