module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'config', 'refactor', 'style', 'test']],
  },
};
