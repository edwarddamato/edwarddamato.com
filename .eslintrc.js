module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/no-unescaped-entities': [0],
    '@typescript-eslint/camelcase': [1]
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  }
};
