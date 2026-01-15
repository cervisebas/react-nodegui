import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    ignores: ['**/node_modules', '**/dist', '**/build', '**/out'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      'react/display-name': 'off',

      // 1. Comillas simples obligatorias
      quotes: ['error', 'single', { avoidEscape: true }],

      // 2. Línea en blanco al final del archivo
      'eol-last': ['error', 'always'],

      // 3. Coma final obligatoria
      'comma-dangle': ['error', 'always-multiline'],

      // 4. Punto y coma obligatorio
      semi: ['error', 'always'],

      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
]);
