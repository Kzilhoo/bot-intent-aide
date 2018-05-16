import test from 'ava'
import { logic } from '../src/logic'
import { aide }  from '../src/aide'
import { exists } from 'fs';

test(t => {
    return logic({ message: { content: 'test' } }).then(element => {
        t.true(aide.includes(element.message.content))
    })
})
