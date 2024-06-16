import { test, expect } from 'bun:test'
import { func } from './example.js'

test('node_modules test', () => {
    func('node_modules')
})

test('somedir test', () => {
    func('somedir')
})

test('github test', () => {
    func('.github')
})

test('.. test', () => {
    func('..')
})
