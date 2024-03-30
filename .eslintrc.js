module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-unused-vars': [1, { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-prototype-builtins': 'off',
  },
}
