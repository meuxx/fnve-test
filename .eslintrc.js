module.exports = {
  root: true,
  ignorePatterns: [
    '**/node_modules',
  ],
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'max-params': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'debug'] }],
    '@typescript-eslint/no-unused-vars': [
      2,
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
      },
    },
  ],
}
