module.exports = {
    rules: {
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true
                }
            }
        ],
        'valid-jsdoc': [
            'error',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    func: 'function',
                    method: 'function',
                    constructor: 'class',
                    const: 'constant',
                    desc: 'decription',
                    emits: 'fires',
                    return: 'returns',
                    virtual: 'abstract',
                    var: 'member',
                    exception: 'throws'
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    object: 'Object',
                    String: 'string'
                },
                matchDescription: '.+'
            }
        ]
    }
}
