module.exports = {
    rules: {
        'init-declarations': 'off',
        'no-catch-shadow': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'off',
        'no-shadow': [
            'error',
            {
                hoist: 'functions',
                builtinGlobals: true
            }
        ],
        'no-shadow-restricted-names': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-use-before-define': 'error'
    }
}
