module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'prettier',
  ],
  globals: {
    __BASE_URL__: true,
    __IS_DEV__: true,
    __PROJECT__: true,
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next', '@typescript-eslint', 'react-hooks', 'for-fsd-path', 'unused-imports', 'perfectionist'],
  rules: {
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        importNames: ['useDispatch'],
        message: 'Use typed hooks `useAppDispatch` instead.',
        name: 'react-redux',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'for-fsd-path/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportsPatterns: ['**/providers/JestProvider', '**/providers/StoreProvider', '**/selectors/**'],
      },
    ],
    'for-fsd-path/path-checker': ['error', { alias: '@' }],
    'for-fsd-path/public-api-imports': ['error', { alias: '@' }],
    'i18next/no-literal-string': 'off',
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': [
      'off',
      {
        caseSensitive: false,
      },
    ],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'key-spacing': [
      'error',
      {
        multiLine: {
          afterColon: true,
          beforeColon: false,
        },
        singleLine: {
          afterColon: true,
          beforeColon: false,
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'no-param-reassign': 'off',
    'no-restricted-imports': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['off'],
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
    'react/button-has-type': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'off',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
  },
};
