const createTemplate = require('./templates/createTemplate');
const capitalizeFirstChar = require('./capitalizeFirstChar');

const layer = process.argv[2];
const slice = capitalizeFirstChar(process.argv[3]);
const layers = ['features', 'entities', 'pages'];

if (!layer && !layers[layer]) {
  throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!slice) {
  throw new Error(`Название слайса для слоя ${layer}`);
}

createTemplate(layer, slice);
