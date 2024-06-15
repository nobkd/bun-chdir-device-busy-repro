export function func() {
  const dir = process.cwd()
  const srcdir = __dirname

  console.log('CWD: ', process.cwd())
  console.log('DIR: ', dir)
  console.log('SRCDIR: ', srcdir)

  try {
    // change dir
    process.chdir(srcdir)
    console.log('Changed CWD: ', process.cwd())
  } finally {
    // restore dir
    process.chdir(dir)
    console.log('Restored CWD: ', process.cwd())
  }
}
