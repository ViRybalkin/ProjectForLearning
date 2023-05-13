const fs = require('fs');
const rootDir = require('../rootDir');
const publicApiTemplate = require('./publicApiTemplate');
const typesTemplate = require('./typesTemplate');
const componentTemplate = require('./componentTemplate');
const storiesTemplate = require('./stroriesTemplate');
const testTemplate = require('./testTemplate');

module.exports = (layer, slice) => {
  const resolveUiPath = (...segments) => rootDir('src', layer, slice, 'ui', ...segments);

  const createUIStructure = () => {
    try {
      fs.mkdirSync(resolveUiPath());
    } catch (e) {
      throw new Error(`Не удалось создать ui для слоя ${slice}`);
    }
  };

  const createComponent = () => {
    try {
      const componentNameWithExtension = `${slice}.tsx`;
      const typesNameWithExtension = `${slice}.types.ts`;
      const styleNameWithExtension = `${slice}.module.scss`;
      const storiesNameWithExtension = `${slice}.stories.tsx`;

      fs.mkdirSync(resolveUiPath(slice));

      fs.writeFileSync(resolveUiPath(slice, componentNameWithExtension), componentTemplate(slice));
      fs.writeFileSync(resolveUiPath(slice, typesNameWithExtension), typesTemplate(`${slice}Props`));
      fs.writeFileSync(resolveUiPath(slice, styleNameWithExtension), '');
      fs.writeFileSync(resolveUiPath(slice, storiesNameWithExtension), storiesTemplate(layer, slice));
      fs.writeFileSync(resolveUiPath(slice, `index.ts`), publicApiTemplate([slice]));
      fs.writeFileSync(resolveUiPath(`index.ts`), publicApiTemplate([slice]));

      fs.mkdirSync(resolveUiPath(slice, '__test__'));
      fs.writeFileSync(resolveUiPath(slice, `__test__`, `${slice}.test.tsx`), testTemplate(slice));
    } catch (e) {
      throw new Error(`Не удалось создать компонент для слайса ${slice}`);
    }
  };

  createUIStructure();
  createComponent();
};
