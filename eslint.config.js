// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      //globals: globals.node,
      globals: {
        ...globals.jest, // ✅ Enables describe, test, expect
        ...globals.node, // ✅ For require/module in tests
      },
    },
    files: ['**/*.js','**/*.test.js', '**/__tests__/**/*.js'],
    plugins: {},
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
  pluginJs.configs.recommended,
  prettier,
];
