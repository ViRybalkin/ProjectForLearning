const fs = require('fs');
const rootDir = require('../rootDir');
const publicApiTemplate = require('./publicApiTemplate');
const componentTemplate = require('./componentTemplate');
const typesTemplate = require('./typesTemplate');
const storiesTemplate = require('./stroriesTemplate');
const testTemplate = require('./testTemplate');

module.exports = (componentName) => {
  try {
    if (!fs.existsSync(componentName)) {
      fs.mkdirSync(rootDir('src', 'shared', 'ui', componentName));
    }
  } catch (e) {
    throw new Error(`Компонент ${componentName} уже существует`);
  }

  const resolveUiPath = (...segments) => rootDir('src', 'shared', 'ui', componentName, ...segments);

  /**
   * @description Создание компонента
   */
  const createComponent = () => {
    try {
      const componentNameWithExtension = `${componentName}.tsx`;

      fs.writeFileSync(resolveUiPath(componentNameWithExtension), componentTemplate(componentName));

      fs.writeFileSync(resolveUiPath(`index.ts`), publicApiTemplate([componentName]));
    } catch (e) {
      throw new Error(`Не удалось создать компонент ${componentName}`);
    }
  };
  //
  /**
   * @description Создание типов компонента
   */
  const createComponentTypes = () => {
    try {
      const typesNameWithExtension = `${componentName}.types.ts`;
      fs.writeFileSync(resolveUiPath(typesNameWithExtension), typesTemplate(`${componentName}Props`));
    } catch (e) {
      throw new Error(`Не удалось создать типы для компонента ${componentName}`);
    }
  };

  /**
   * @description Создание стилей для компонента
   */
  const createComponentStyle = () => {
    try {
      const styleNameWithExtension = `${componentName}.module.scss`;
      fs.writeFileSync(resolveUiPath(styleNameWithExtension), '');
    } catch (e) {
      throw new Error(`Не удалось создать стили для компонента ${componentName}`);
    }
  };

  /**
   * @description Создание сториса для компонента
   */
  const createComponentStories = () => {
    try {
      const storiesNameWithExtension = `${componentName}.stories.tsx`;
      fs.writeFileSync(resolveUiPath(storiesNameWithExtension), storiesTemplate('shared', componentName));
    } catch (e) {
      throw new Error(`Не удалось создать сторис для компонента ${componentName}`);
    }
  };

  /**
   * @description Создание тестов для компонента
   */
  const createComponentTest = () => {
    try {
      fs.mkdirSync(resolveUiPath('__test__'));
      fs.writeFileSync(resolveUiPath(`__test__`, `${componentName}.test.tsx`), testTemplate(componentName));
    } catch (e) {
      throw new Error(`Не удалось создать тесты для компонента ${componentName}`);
    }
  };

  createComponent();
  createComponentTypes();
  createComponentStyle();
  createComponentStories();
  createComponentTest();
};
