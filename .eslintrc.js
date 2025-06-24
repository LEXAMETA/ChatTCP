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
    'internal/enforce-spacing-values': 'warn',
    'react-compiler/react-compiler': 'warn',
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    radix: 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'object-shorthand': 'off',
    'import/order': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'linebreak-style': ['error', 'unix'], // Enforce LF
    'indent': ['error', 2], // Enforce 2-space indent
  },
};
