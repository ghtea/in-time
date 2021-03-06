module.exports = {
  root: true,
  extends: '@react-native-community',
  'plugins': [
    'import',
    'simple-import-sort',
],
  rules: {
  "quotes": ["error", "double"],
  'indent': ['error', 2],
  'react/jsx-indent': [2,2],
  'quotes': ['error', 'double'],
  'array-bracket-spacing': ['error', 'never'],
  'object-curly-spacing': ['error', 'never'],
    // import sorting rules
    // cf: https://github.com/lydell/eslint-plugin-simple-import-sort
  'sort-imports': 'off',
  'import/first': 'error',
  'import/no-duplicates': 'error',
  'import/newline-after-import': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        // grouped by groups
        // sorted by index inside group
        groups: [
          // React packages
          ['^react', '^react-native', '^@react', '^@react-native'],
          // Anything not matched in another group
          ['^'],
          // Relative imports
          ['^\\.\\.', '^\\.'],
          // Side effect imports
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
