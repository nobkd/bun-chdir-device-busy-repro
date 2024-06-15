import { test } from 'bun:test'
import { func } from './somedir/index.js'

test('my test', () => {
    func()
})
