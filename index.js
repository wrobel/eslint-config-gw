module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        'eslint:all',
        'plugin:react/all',
        'plugin:flowtype/recommended'
    ].concat(
        [
            './rules/jsdoc',
            './rules/best-practices',
            './rules/strict',
            './rules/variables',
            './rules/node',
            './rules/style',
            './rules/es6',
            './rules/react',
            './rules/flow'
        ].map(require.resolve)
    ),
    plugins: [
        'react',
        'flowtype'
    ]
}
