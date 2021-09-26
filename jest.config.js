module.exports = {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    testResultsProcessor: 'jest-junit',
    coverageReporters: ['lcov', 'html'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^@root(.*)$': '<rootDir>$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@reducers(.*)$': '<rootDir>/src/core/reducers$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@selectors(.*)$': '<rootDir>/src/core/selectors$1',
        '^@actions(.*)$': '<rootDir>/src/core/actions$1',
        '^@model(.*)$': '<rootDir>/src/model$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@util(.*)$': '<rootDir>/src/util$1',
        '^@Api(.*)$': '<rootDir>/src/Api$1',
        '^@core(.*)$': '<rootDir>/src/core$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@models(.*)$': '<rootDir>/src/models$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js'
    }
};
