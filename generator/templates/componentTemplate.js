const capitalizeFirstChar = require('../capitalizeFirstChar');

module.exports = (component) => {
  const componentNameProps = `${component}Props`;

  return `import React, {memo} from 'react';
import {useTranslation} from "react-i18next";
import {${componentNameProps}} from './${component}.types'
import cls from './${component}.module.scss'

export const ${component} = memo(({}: ${componentNameProps}) => {
  const {t} = useTranslation()
    return (
        <div>
          ...
        </div>
    );
});`;
};
