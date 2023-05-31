const inquirer = require('inquirer');
const capitalizeFirstChar = require('./capitalizeFirstChar');
const createSharedComponent = require('./templates/createSharedComponent');

try {
  inquirer
    .prompt([
      {
        name: 'componentName',
        message: 'Введите название компонента',
        type: 'input',
        filter(val) {
          return capitalizeFirstChar(val);
        },
      },
    ])
    .then((answers) => {
      const { componentName } = answers;

      createSharedComponent(componentName);

      console.info(`Компонент ${componentName} успешно создан в слое shared 🎆🎆🎆🎆🎆🎆🎆`);
    });
} catch (e) {
  throw new Error(e);
}
