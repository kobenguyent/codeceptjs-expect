import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {},
    ExpectHelper: {
      "require": "../dist/index.js"
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'test'
}
