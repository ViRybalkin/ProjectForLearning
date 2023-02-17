module.exports = async () => {
  return {
    verbose: true,
    cacheDirectory: '<rootDir>/node_modules/.cache/jest-cache',
    coverageDirectory: '<rootDir>/coverage',
    rootDir: '../',
    coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/public/', '<rootDir>/node_modules/'],
    // FIXME раскомментировать после написания тестов т.к pre-commit hook запускает тесты
    // collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/index.ts',
      '!**/public/**',
      '!**/coverage/**',
      '!**/*.d.ts',
      '!**/*.types.ts',
      '!**/*.module.scss',
      '!**/.eslintrc.js',
      '!**/.stylelintrc.js',
      '!**/*.config.{js,ts}',
      '!**/config/**',
    ],
  };
};
