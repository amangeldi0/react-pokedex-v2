module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'simple-import-sort',
        'react-hooks'
    ],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        "no-nested-ternary": "off",
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'no-alert': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': "off",
        '@typescript-eslint/no-non-null-assertion': 'off',

        'simple-import-sort/exports': 1,
        'simple-import-sort/imports': [
            1,
            {
                groups: [
                    ["^\\u0000"],
                    ["^node:"],
                    ["^@?\\w"],
                    ["^"],
                    ["^\\."],
                    ['^.+\\.s?css$']
                ]
            }
        ],

        'react-hooks/rules-of-hooks': 'off', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off'
    },

};