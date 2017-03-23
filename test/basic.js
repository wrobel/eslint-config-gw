const config = require('../')
const test = require('tape')

const isObject = (obj) => typeof obj === 'object' && obj !== null

test('test basic properties of config',
     (t) => {
         t.ok(isObject(config.env))
         t.ok(Array.isArray(config.extends))
         t.ok(Array.isArray(config.plugins))
         t.end()
     }
    )

