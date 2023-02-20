module.exports = async () => {
  return {
    verbose: true,
    cacheDirectory: '<rootDir>/node_modules/.cache/jest-cache',
    coverageDirectory: '<rootDir>/coverage',
    rootDir: '../../',
    coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
    coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/public/', '<rootDir>/node_modules/'],
    // FIXME раскомментировать после написания тестов т.к pre-commit hook запускает тесты
    // collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    globals: {
      __IS_DEV__: true,
    },
    setupFilesAfterEnv: [
      '<rootDir>/config/jest/setupTest.ts',
    ],
    moduleNameMapper: {
      '\\.(scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
      '^.+\\.svg$': 'jest-transformer-svg',
    },
    moduleDirectories: ['node_modules', 'src'],
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
