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
    'internal/enforce-spacing-values': 'off', // Disable custom rule
    'react-compiler/react-compiler': 'warn',
    'prettier/prettier': 'off', // Disable to avoid formatting errors
    radix: 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'object-shorthand': 'off',
    'import/order': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'linebreak-style': ['error', 'unix'],
    'indent': 'off', // Disable indent to avoid spacing issues
    '@typescript-eslint/no-explicit-any': 'warn', // Soften TypeScript rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
