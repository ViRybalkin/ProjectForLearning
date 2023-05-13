const capitalizeFirstChar = require('../capitalizeFirstChar');

module.exports = (type) => {
  return `export interface ${type} {}`;
};
