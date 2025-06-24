module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off'
  },
  env: {
    node: true,
    browser: true,
    jest: true
  }
};
