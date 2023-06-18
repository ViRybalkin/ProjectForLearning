module.exports = async () => {
    return {
        verbose: false,
        cacheDirectory: '<rootDir>/node_modules/.cache/jest-cache',
        coverageDirectory: '<rootDir>/coverage',
        rootDir: '../../',
        reporters: [
            "default",
            ["jest-html-reporters", {
                publicPath: "./reports/jest/html-report",
                filename: "report.html",
                openReport: true,
                includeConsoleLog: true,
            }]
        ],
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
            __IS_DEV__: true,
            __BASE_URL__: '',
            __PROJECT__: 'jest',
        },
        setupFilesAfterEnv: [
            '<rootDir>/config/jest/setupTest.ts',
        ],
        moduleNameMapper: {
            '\\.(scss)$': 'identity-obj-proxy',
            '^@/(.*)$': '<rootDir>/src/$1',
        },
        transform: {
            '^.+\\.tsx?$': 'babel-jest',
            '^.+\\.svg$': 'jest-transformer-svg',
        },
        moduleDirectories: ['node_modules', 'src'],
        testEnvironment: 'jsdom',
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
    };
};
