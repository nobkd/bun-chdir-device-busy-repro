import { test, expect } from 'bun:test'
import { func } from './example.js'

test('node_modules test', () => {
    func('node_modules')
})

test('github test', () => {
    func('.github')
})

test('somedir test', () => {
    func('somedir')
})
