module.exports = async () => {
    return {
        cacheDirectory: '<rootDir>/node_modules/.cache/jest-cache',
        collectCoverageFrom: [
            '**/*.{jsx,ts,tsx}',
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
            '!config/**',
            '!**/providers/**',
            '!**/*.stories.tsx',
        ],
        coverageDirectory: '<rootDir>/coverage',
        coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/public/', '<rootDir>/node_modules/'],
        coverageThreshold: {
            global: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: 80,
            },
        },
        globals: {
            __BASE_URL__: '',
            __IS_DEV__: true,
            __PROJECT__: 'jest',
        },
        moduleDirectories: ['node_modules', 'src'],
        moduleNameMapper: {
            '\\.(scss)$': 'identity-obj-proxy',
            '^@/(.*)$': '<rootDir>/src/$1',
        },
        reporters: [
            "default",
            ["jest-html-reporters", {
                filename: "report.html",
                includeConsoleLog: true,
                openReport: true,
                publicPath: "./reports/jest/html-report",
            }]
        ],
        rootDir: '../../',
        setupFilesAfterEnv: [
            '<rootDir>/config/jest/setupTest.ts',
        ],
        testEnvironment: 'jsdom',
        transform: {
            '^.+\\.svg$': 'jest-transformer-svg',
            '^.+\\.tsx?$': 'babel-jest',
        },
        verbose: false,
    };
};
