const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct',
     (t) => {
         const {CLIEngine} = eslint

         const cli = new CLIEngine({
             useEslintrc: false,
             configFile: '.eslintrc.js'
         })

         const code = `const foo = 1

/* eslint-disable no-console */
console.log(foo)
`

         const NO_ERRORS = 0

         t.equal(cli.executeOnText(code).errorCount, NO_ERRORS)
         t.end()
     }
    )
