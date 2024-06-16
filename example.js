import { join } from 'node:path'

export function func(dirname) {
  const dir = process.cwd()
  const testdir = join(dir, dirname)

  console.log('CWD: ', process.cwd())
  console.log('DIR: ', dir)
  console.log('TESTDIR: ', testdir)

  try {
    // change dir
    process.chdir(testdir)
    console.log('Changed CWD: ', process.cwd())
  } finally {
    // restore dir
    process.chdir(dir)
    console.log('Restored CWD: ', process.cwd())
  }
}
