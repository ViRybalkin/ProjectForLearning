module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': ['off', { extensions: ['.tsx', '.jsx'] }],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': [
      0,
      { caseSensitive: false },
    ],
    'max-len': ['error', { code: 120 }],
    'arrow-body-style': 'off',
    'no-unused-vars': ['off'],
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
