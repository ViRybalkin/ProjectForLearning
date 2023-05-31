const inquirer = require('inquirer');
const createTemplate = require('./templates/createTemplate');
const capitalizeFirstChar = require('./capitalizeFirstChar');

try {
  inquirer
    .prompt([
      {
        name: 'layer',
        message: 'Выберите слой',
        type: 'list',
        choices: ['entities', 'features', 'pages'],
      },
      {
        name: 'slice',
        message: 'Введите название слайса',
        type: 'input',
        filter(val) {
          return capitalizeFirstChar(val);
        },
      },
    ])
    .then((answers) => {
      const { layer, slice } = answers;

      createTemplate(layer, slice);

      console.info(`Слайс ${slice} успешно создан в слое ${layer}🎆🎆🎆🎆🎆🎆🎆`);
    });
} catch (e) {
  throw new Error(e);
}
