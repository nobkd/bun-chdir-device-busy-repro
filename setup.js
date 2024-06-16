import * as fs from 'node:fs'

const dir = 'node_modules'

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}
