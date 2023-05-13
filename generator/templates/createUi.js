const fs = require('fs');
const rootDir = require('../rootDir');
const publicApiTemplate = require('./publicApiTemplate');
const typesTemplate = require('./typesTemplate');
const componentTemplate = require('./componentTemplate');
const storiesTemplate = require('./stroriesTemplate');
const testTemplate = require('./testTemplate');

module.exports = (layer, slice) => {
  /**
   * @param {string} segments - Название папок и вложенности
   * @description Функция для генерации пути
   */
  const resolveUiPath = (...segments) => rootDir('src', layer, slice, 'ui', ...segments);

  /**
   * @description Создание структуры
   */
  const createUIStructure = () => {
    try {
      fs.mkdirSync(resolveUiPath());
    } catch (e) {
      throw new Error(`Не удалось создать ui для слоя ${slice}`);
    }
  };

  /**
   * @description Создание компонента
   */
  const createComponent = () => {
    try {
      const componentNameWithExtension = `${slice}.tsx`;

      fs.mkdirSync(resolveUiPath(slice));
      fs.writeFileSync(resolveUiPath(slice, componentNameWithExtension), componentTemplate(slice));

      fs.writeFileSync(resolveUiPath(slice, `index.ts`), publicApiTemplate([slice]));
    } catch (e) {
      throw new Error(`Не удалось создать компонент для слайса ${slice}`);
    }
  };

  /**
   * @description Создание типов компонента
   */
  const createComponentTypes = () => {
    try {
      const typesNameWithExtension = `${slice}.types.ts`;
      fs.writeFileSync(resolveUiPath(slice, typesNameWithExtension), typesTemplate(`${slice}Props`));
    } catch (e) {
      throw new Error(`Не удалось создать типы для компонента ${slice}`);
    }
  };

  /**
   * @description Создание стилей для компонента
   */
  const createComponentStyle = () => {
    try {
      const styleNameWithExtension = `${slice}.module.scss`;
      fs.writeFileSync(resolveUiPath(slice, styleNameWithExtension), '');
    } catch (e) {
      throw new Error(`Не удалось создать стили для компонента ${slice}`);
    }
  };

  /**
   * @description Создание сториса для компонента
   */
  const createComponentStories = () => {
    try {
      const storiesNameWithExtension = `${slice}.stories.tsx`;
      fs.writeFileSync(resolveUiPath(slice, storiesNameWithExtension), storiesTemplate(layer, slice));
    } catch (e) {
      throw new Error(`Не удалось создать сторис для компонента ${slice}`);
    }
  };

  /**
   * @description Создание тестов для компонента
   */
  const createComponentTest = () => {
    try {
      fs.mkdirSync(resolveUiPath(slice, '__test__'));
      fs.writeFileSync(resolveUiPath(slice, `__test__`, `${slice}.test.tsx`), testTemplate(slice));
    } catch (e) {
      throw new Error(`Не удалось создать тесты для компонента ${slice}`);
    }
  };

  createUIStructure();
  createComponent();
  createComponentStyle();
  createComponentTypes();
  createComponentStories();
  createComponentTest();

  /**
   * @description Создание publicApi для сегмента ui
   */
  fs.writeFileSync(resolveUiPath(`index.ts`), publicApiTemplate([slice]));
};
