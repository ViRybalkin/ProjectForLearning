module.exports = (selector) => {
  return `import {AppStoreTypes} from "app";
  
export const ${selector} = (state: AppStoreTypes) => state`;
};
