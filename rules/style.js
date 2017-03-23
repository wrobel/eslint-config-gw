/* eslint no-magic-numbers: off */
module.exports = {
    rules: {
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            '1tbs'
        ],
        'camelcase': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-names': 'off',
        'func-style': [
            'error',
            'declaration',
            {allowArrowFunctions: true}
        ],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': [
            'error',
            4
        ],
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'lines-around-comment': 'error',
        'max-depth': 'error',
        'max-len': [
            'warn',
            {
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'max-lines': [
            'error',
            700
        ],
        'max-nested-callbacks': 'error',
        'max-params': [
            'error',
            6
        ],
        'max-statements': 'error',
        'max-statements-per-line': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'error',
        'newline-before-return': 'warn',
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'off',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-restricted-syntax': 'off',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': 'off',
        'object-property-newline': 'error',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '?': 'after'
                }
            }
        ],
        'padded-blocks': 'off',
        'quote-props': [
            'error',
            'consistent-as-needed'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'unicode-bom': 'error',
        'wrap-regex': 'off'
    }
}
