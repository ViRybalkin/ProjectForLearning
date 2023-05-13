const createTemplate = require('./templates/createTemplate');
const capitalizeFirstChar = require('./capitalizeFirstChar');

const layer = process.argv[2];
const slice = capitalizeFirstChar(process.argv[3]);
const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!slice) {
  throw new Error(`Название слайса для слоя ${layer}`);
}

try {
  createTemplate(layer, slice);
  console.info(`Слайс ${slice} успешно создан в слое ${layer}🎆🎆🎆🎆🎆🎆🎆`);
} catch (e) {
  throw new Error(e);
}
