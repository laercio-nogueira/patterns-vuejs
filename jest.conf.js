const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/spec/$1',
    '#/(.*)$': '<rootDir>/src/main/$1',
    '#deprecated/(.*)$': '<rootDir>/src/main/$1',
    '#components/(.*)$': '<rootDir>/src/main/components/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/client/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  globals: {
    'vue-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
          ],
        ],
        plugins: [
          'dynamic-import-node',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-modules-commonjs',
        ],
      },
    },
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    '!**/spec/**/*.js',
    '!**/src/main/*.js',
    '!**/src/main/router/*.js',
    '!**/src/main/router/routes/*.js',
    '!**/test/**/*.js',
    '**/src/**/*.vue',
    '**/src/main/**/*.js',
    '**/src/main/**/*.vue',
    '**/src/main/plugins/*.js',
  ],
  moduleFileExtensions: [
    'js',
    'vue',
  ],
};
