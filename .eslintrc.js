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
    'internal/enforce-spacing-values': 'off',
    'react-compiler/react-compiler': 'off', // Disable experimental rule
    'prettier/prettier': 'off',
    radix: 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'object-shorthand': 'off',
    'import/order': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'linebreak-style': ['error', 'unix'],
    'indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // Soften TS
    'no-console': 'warn', // Allow console for debugging
  },
};
