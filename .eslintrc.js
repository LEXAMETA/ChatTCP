module.exports = {
  root: true,
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts', '*.js', '*.jsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['prettier', 'eslint-plugin-react-compiler', 'internal', 'import'],
  rules: {
    'internal/enforce-spacing-values': 'warn', // Soften to warn
    'react-compiler/react-compiler': 'warn',
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    radix: 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'object-shorthand': 'off', // Disable shorthand checks
    'import/order': 'off', // Disable import order checks
    'no-mixed-spaces-and-tabs': 'off', // Avoid formatting issues
    'linebreak-style': ['error', 'unix'], // Enforce LF line endings
  },
};
