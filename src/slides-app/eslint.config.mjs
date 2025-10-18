import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
//import tailwindcss from 'eslint-plugin-tailwindcss'
import _import from 'eslint-plugin-import'
import boundaries from 'eslint-plugin-boundaries'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import sonarjs from 'eslint-plugin-sonarjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      'node_modules/**',
      '**/node_modules',
      '**/dist',
      '**/build',
      '**/public',
      '**/storybook-static',
      '**/node_modules/',
      '**/build/',
      '**/coverage/',
      '**/vite-env.d.ts',
      '**/vite.config.ts',
      '**/jest.config.js',
      '**/vite.config.ts',
      '**/*.js',
      '**/*.jsx',
      //'**/src/',
      '**/*.test.*',
      //'**/src/*',
      '**/test/*',
      '**/test/',
      '**/tests/*',
      '**/tests/',
      '.pnpmfile.cjs',
      '**/vite.lib.config.ts',
      '**/*/vite.config.ts',
      'eslint.config.mjs',
      '**/*.mjs',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended-latest',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'plugin:prettier/recommended',
      //'plugin:tailwindcss/recommended',
      'plugin:boundaries/recommended'
    )
  ),
  {
    plugins: {
      sonarjs: fixupPluginRules(sonarjs),
      react: fixupPluginRules(react),
      'react-compiler': reactCompiler,
      'react-hooks': fixupPluginRules(reactHooks),
      'react-refresh': reactRefresh,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      //tailwindcss: fixupPluginRules(tailwindcss),
      import: fixupPluginRules(_import),
      boundaries: fixupPluginRules(boundaries),
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 11,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname, // Point to the root of your project
        project: path.resolve(__dirname, './tsconfig.app.json'), // Ensure this path is correct
      },
    },

    settings: {
      react: {
        version: '19.2.0',
      },

      'import/ignore': ['node_modules', '@jsonforms/core', 'axios'],

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.app.json',
        },
      },

      //'import/internal-regex': '^@myapp/',

      'import/cache': {
        lifetime: 10,
      },

      'boundaries/ignore': [
        'modules/*/tests/*',
        'modules/*/*.test.ts',
        'modules/*/tests/*.test.ts',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.test.tsx',
      ],

      'boundaries/elements': [
        {
          type: 'modules',
          pattern: 'modules/*/*',
          mode: 'folder',
          capture: ['family', 'elementName'],
        },
        {
          type: 'apps',
          pattern: 'apps/*/*',
          mode: 'folder',
          capture: ['family', 'elementName'],
        },
        {
          type: 'libs',
          pattern: 'libs/*/*',
          mode: 'folder',
          capture: ['family', 'elementName'],
        },
        {
          type: 'shared',
          pattern: 'shared/*/*',
          mode: 'folder',
          capture: ['family', 'elementName'],
        },
      ],
    },

    rules: {
      'sonarjs/cognitive-complexity': 'warn',
      'sonarjs/no-commented-code': 'warn',
      'sonarjs/no-redundant-optional': 'error',
      'sonarjs/no-invariant-returns': 'warn',
      'sonarjs/void-use': 'warn',
      'sonarjs/no-nested-functions': 'warn',
      'sonarjs/no-duplicated-branches': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      'sonarjs/prefer-promise-shorthand': 'warn',
      'react-compiler/react-compiler': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      //'tailwindcss/classnames-order': 'warn',

      //'tailwindcss/no-custom-classname': ['off'],

      'react-refresh/only-export-components': 'off',
      //'tailwindcss/no-contradicting-classname': 'warn',
      'import/export': 'error',
      'import/no-unresolved': 'off',
      'import/no-deprecated': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-mutable-exports': 'error',
      'import/no-unused-modules': 'error',
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'error',

      'import/no-internal-modules': [
        'off',
        {
          allow: [
            '"@/components/*',
            'react-dom/*',
            'lodash/*',
            'lodash/fp/*',
            'date-fns/*',
            '@jsonforms/*',
            'zustand/*',
            'zustand/react/*',
            'zustand/vanilla/shallow',
            'primereact/*',
            'motion/*',
            'vitest/*',
            'fast-deep-equal/react',
            '*/registration/modals*',
            '*/registration/features*',
            './generated/list-modals',
            './generated/drawer-modals',
          ],
        },
      ],

      'import/newline-after-import': 'error',
      'import/no-relative-packages': 'error',

      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          message:
            "Boudary violation: ${file.type}/${file.family} can't use ${dependency.source}, import not allowed",

          rules: [
            {
              from: 'libs',
              allow: ['libs'],
            },
            {
              from: 'shared',
              allow: ['libs', 'shared'],
            },
            {
              from: 'modules',
              allow: ['libs', 'shared'],
            },
            {
              from: 'apps',
              allow: ['libs', 'modules', 'shared'],
            },
          ],
        },
      ],
    },
  },
]
