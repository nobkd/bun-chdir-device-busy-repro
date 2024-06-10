import { test, expect } from 'bun:test'

import { func } from './index.js'

test('my test', () => {
    expect(func()).toBe('Hello Bun')
})
