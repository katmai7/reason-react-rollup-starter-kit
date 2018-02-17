# Reason-react starter kit

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Reason starter kit for creating react library.

## Getting started
Clone this repository and install its dependencies:

```bash
git clone https://github.com/katmai7/reason-react-rollup-starter-kit.git
cd reason-react-rollup-starter-kit
yarn install
```

## NPM scripts
 - `yarn dev` build lib in dev mode
 - `yarn build` build lib for production
 - `yarn example` run example server
 - `yarn test` run tests
 - `yarn clean` cleaning project

### Development
Running the following command will open your default browser to `example/index.html`.
Any modifications inside `./src` trigger a browser refresh.

```bash
yarn dev
```

### Production
Running the following command will build `./src/index.re` to `./dist/your_lib_name.(cjs|es6|umd).js`.

```bash
yarn build
```

### Example app
The example app is running with the webpack as one of the main builders for web apps.
Note that example app needs to build `./src/index.re` file, so before running the example app, run `yarn dev`.

```bash
yarn dev
yarn example
```

### Testing
Running the following command will run tests with Jest framework.

```bash
yarn test
```

### Cleaning
Running the following command will clean project folders that are created by bucklescript and dist/temp/(folders you don't need to commit) folders.

```bash
yarn clean
```

## License

MIT
