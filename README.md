[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This is an expect-wrapper that you can use with CodeceptJS.

# Installation

This requires [Node.js](https://nodejs.org/) v16+ to run.

NPM package: https://www.npmjs.com/package/codeceptjs-expect

```sh
cd codeceptjs-project
npm i codeceptjs-expect
```

### Configuration

This helper should be added in `codecept.conf.ts/codecept.conf.js`

Example:

```json
{
    "helpers": {
        "ExpectHelper": {
            "require": "codeceptjs-expect"
        }
    }
}
```
