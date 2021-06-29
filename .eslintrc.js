module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@setupTest', './src/setupTests.js'],
          ['@components', './src/app/components'],
          ['@pages', './src/app/pages'],
          ['@constants', './src/app/constants'],
          ['@redux', './src/app/redux'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'jest-enzyme',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'comma-dangle': ['error', 'never'],
    camelcase: 'off',
    'import/no-unresolved': [
      0,
      { caseSensitive: false },
    ],
  },
};
