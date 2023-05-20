const fs = require('fs');
const rootDir = require('../rootDir');
const publicApiTemplate = require('./publicApiTemplate');
const sliceTemplate = require('./sliceTemplate');
const typesTemplate = require('./typesTemplate');
const serviceTemplate = require('./serviceTemplate');
const selectorsTemplate = require('./selectorsTemplate');
const testTemplate = require('./testTemplate');

module.exports = (layer, slice) => {
  /**
   * @param {string} segments - Название папок и вложенности
   * @description Функция для генерации пути
   */
  const resolveConfigPath = (...segments) => rootDir('src', layer, slice, 'config', ...segments);

  /**
   * @description Создание структуры
   */
  const createConfigStructure = () => {
    try {
      fs.mkdirSync(resolveConfigPath());
      fs.mkdirSync(resolveConfigPath('selectors'));
      fs.mkdirSync(resolveConfigPath('service'));
      fs.mkdirSync(resolveConfigPath('slice'));
      fs.mkdirSync(resolveConfigPath('types'));
    } catch (e) {
      throw new Error(`Не удалось создать config для слоя ${slice}`);
    }
  };

  /**
   * @description Создание слайса
   */
  const createReduxSlice = () => {
    try {
      const sliceName = `${slice}Slice`;
      const sliceNameWithExtension = `${sliceName}.ts`;

      fs.writeFileSync(resolveConfigPath('slice', sliceNameWithExtension), sliceTemplate(slice));
      fs.mkdirSync(resolveConfigPath('slice', '__test__'));
      fs.writeFileSync(resolveConfigPath('slice', `__test__`, `${sliceName}.test.ts`), testTemplate(sliceName));
    } catch (e) {
      throw new Error(`Не удалось создать redux store для слайса ${slice}`);
    }
  };

  /**
   * @description Создание типов
   */
  const createTypes = () => {
    try {
      const typeName = `${slice}Types`;
      const typeNameWithExtension = `${typeName}.types.ts`;

      fs.writeFileSync(resolveConfigPath('types', typeNameWithExtension), typesTemplate(typeName));
    } catch (e) {
      throw new Error(`Не удалось создать типы redux store для слайса ${slice}`);
    }
  };

  const createService = () => {
    try {
      const serviceName = `get${slice}`;
      const serviceNameWithExtension = `${serviceName}.service.ts`;

      fs.writeFileSync(resolveConfigPath('service', serviceNameWithExtension), serviceTemplate(slice, serviceName));
      fs.mkdirSync(resolveConfigPath('service', '__test__'));
      fs.writeFileSync(
        resolveConfigPath('service', `__test__`, `${serviceName}.service.test.ts`),
        testTemplate(serviceName)
      );
    } catch (e) {
      throw new Error(`Не удалось создать сервис для redux store слайса ${slice}`);
    }
  };

  /**
   * @description Создание селектора
   */
  const createSelectors = () => {
    try {
      const selectorName = `get${slice}`;
      const selectorNameWithExtension = `${selectorName}.ts`;

      fs.writeFileSync(resolveConfigPath('selectors', selectorNameWithExtension), selectorsTemplate(selectorName));
      fs.mkdirSync(resolveConfigPath('selectors', '__test__'));
      fs.writeFileSync(
        resolveConfigPath('selectors', `__test__`, `${selectorName}.test.ts`),
        testTemplate(selectorName)
      );
    } catch (e) {
      throw new Error(`Не удалось создать селектор для redux store слайсе ${slice}`);
    }
  };

  createConfigStructure();
  createReduxSlice();
  createService();
  createTypes();
  createSelectors();
};
