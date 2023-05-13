const capitalizeFirstChar = require('./capitalizeFirstChar');
const createSharedComponent = require('./templates/createSharedComponent');

const sharedComponent = capitalizeFirstChar(process.argv[2]);

if (!sharedComponent) {
  throw new Error('Укажите название компонента');
}

try {
  createSharedComponent(sharedComponent);
  console.info(`Компонент ${sharedComponent} успешно создан в слое shared`);
} catch (e) {
  throw new Error(e);
}
