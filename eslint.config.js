// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config'
import expoConfig from 'eslint-config-expo/flat.js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default defineConfig([
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/*.html'],
  },
  globalIgnores(['dist/*', '.expo/*', 'node_modules']),
  expoConfig,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ['babel.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    plugins: {
      reactHooks,
      importPlugin,
      'unused-imports': unusedImports,
      eslintPluginPrettierRecommended,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      //IMPORT ORDER
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      // Remove unused imports/vars
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Turn off default unused vars rules (using plugin instead)
      '@typescript-eslint/no-unused-vars': 'off',

      // Encourage formatting with Prettier
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          jsxSingleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          useTabs: false,
          endOfLine: 'auto',
          printWidth: 150,
          bracketSameLine: false,
        },
      ],
    },
  },
])
