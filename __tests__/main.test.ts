import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_APPLICATION'] = 'ohs-web'
  process.env['INPUT_FLOW'] = 'staging'
  process.env['INPUT_VERSION'] = '0.0.0.2'
  process.env['INPUT_IMAGE'] = 'bucketplace/ohs-web'
  process.env['INPUT_IMAGE-TAG'] = '0.0.0.2'
  process.env['INPUT_GIT-SHA'] = 'asdasjdshas'
  process.env['AUTH_TOKEN'] = ''
  process.env['BASE_URL'] = 'http://127.0.0.1:5000'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
