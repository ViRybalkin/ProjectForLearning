const fs = require('fs');
const rootDir = require('../rootDir');
const capitalizeFirstChar = require('../capitalizeFirstChar');
const createConfig = require('./createConfig');
const createUi = require('./createUi');
const publicApiTemplate = require('./publicApiTemplate');

module.exports = (layer, slice) => {
  try {
    if (!fs.existsSync(layer) && !fs.existsSync(slice)) {
      fs.mkdirSync(rootDir('src', layer, slice));
    }
  } catch (e) {
    throw new Error(`Слайс ${slice} уже существует`);
  }

  /**
   * @param {string} layer - Слой
   * @param {number} slice - Слайс
   * @description Создание сегмента Config
   */
  createConfig(layer, slice);

  /**
   * @param {string} layer - Слой
   * @param {number} slice - Слайс
   * @description Создание сегмента Ui
   */
  createUi(layer, slice);

  /**
   * @description Создание publicApi для слайса
   */
  fs.writeFileSync(rootDir('src', layer, slice, 'index.ts'), publicApiTemplate(['ui', 'config']));
  /**
   * @description Добавление слайса в publicApi слоя
   */
  fs.appendFile(rootDir('src', layer, 'index.ts'), publicApiTemplate([slice]), (err) => {
    if (err) {
      throw new Error(`Не удалось добавить слайс ${slice} в publicApi слоя ${layer}`);
    }
    console.log(`Cлайс ${slice} успешно добавлен в publicApi слоя ${layer}`);
  });
};
