import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  { ignores: ['**/node_modules', '**/template', '**/dist'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // 1. Comillas simples obligatorias
      quotes: ['error', 'single', { avoidEscape: true }],

      // 2. Línea en blanco al final del archivo
      'eol-last': ['error', 'always'],

      // 3. Coma final obligatoria
      'comma-dangle': ['error', 'always-multiline'],

      // 4. Punto y coma obligatorio
      semi: ['error', 'always'],
    },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  eslintPluginPrettierRecommended,
  prettierConfig,
]);
