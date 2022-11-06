module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['prettier', 'plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/space-before-function-paren': 'off'
  }
};
