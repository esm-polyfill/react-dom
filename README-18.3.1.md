# @esm-polyfill/react-dom@18.3.1

React DOM in ESM format.

## Install

Install:

```sh
npm i react-dom@git+file:///home/mk/github/esm-polyfill/react-dom
# specific version
npm i react-dom@git+file:///home/mk/github/esm-polyfill/react-dom#semver:^18.3.1
```

## Use 

Reference:

```ts
import ReactDom from 'react-dom'

// ...

```

## Internals info

### Main ESM transformation procedure

```sh
npm i --save-dev react-dom-18.3.1@npm:react-dom@18.3.1
npm i --save-dev react-dom-types-18.3@npm:@types/react-dom@18.3


mkdir react-dom-18.3.1

cd node_modules/react-dom-types-18.3
cp --parents *.d.ts **/*.d.ts ../../react-dom-18.3.1
cd ../../
cp node_modules/react-dom-types-18.3/package.json react-dom-18.3.1/package-types.json


cp node_modules/react-dom-18.3.1/package.json package-18.3.1.json
cp node_modules/react-dom-18.3.1/package.json react-dom-18.3.1
cp node_modules/react-dom-18.3.1/README.md react-dom-18.3.1
cp node_modules/react-dom-18.3.1/LICENSE react-dom-18.3.1


npx esbuild node_modules/react-dom-18.3.1/*.js \
    --outdir=react-dom-18.3.1/esm-development \
    --bundle \
    --charset=utf8 \
    --platform=node \
    --format=esm \
    --packages=external \
    --analyze \
    --define:process.env.NODE_ENV=\"development\" \
    --alias:react-dom=@esm-polyfill/react-dom

npx esbuild node_modules/react-dom-18.3.1/*.js \
    --outdir=react-dom-18.3.1/esm-production \
    --bundle \
    --charset=utf8 \
    --platform=node \
    --format=esm \
    --packages=external \
    --analyze \
    --define:process.env.NODE_ENV=\"production\" \
    --alias:react-dom=@esm-polyfill/react-dom


npx esbuild node_modules/react-dom-18.3.1/*.js \
    --outdir=react-dom-18.3.1/cjs-development \
    --bundle \
    --charset=utf8 \
    --platform=node \
    --format=cjs \
    --packages=external \
    --analyze \
    --define:process.env.NODE_ENV=\"development\" \
    --alias:react-dom=@esm-polyfill/react-dom

npx esbuild node_modules/react-dom-18.3.1/*.js \
    --outdir=react-dom-18.3.1/cjs-production \
    --bundle \
    --charset=utf8 \
    --platform=node \
    --format=cjs \
    --packages=external \
    --analyze \
    --define:process.env.NODE_ENV=\"production\" \
    --alias:react-dom=@esm-polyfill/react-dom
```




### Changes to package.json dependencies


#### js oryginal dependencies

```json
{
  "dependencies": {
    "loose-envify": "^1.1.0",
    "scheduler": "^0.23.2"
  },
  "peerDependencies": {
    "react": "^18.3.1"
  },
}
```

#### dts oryginal dependencies

```json
{
  "dependencies": {
    "@types/react": "*"
  },
}
```

#### esm'ed dependencies

```json
{
  "dependencies": {
    "scheduler": "git+file:///home/mk/github/esm-polyfill/scheduler#semver:^0.23.2"
  },
  "devDependencies": {
    "esbuild": "^0.23.1",
    "react-dom-18.3.1": "npm:react-dom@^18.3.1",
    "react-dom-types-18.3": "npm:@types/react-dom@18.3"
  },
  "peerDependencies": {
    "react": "git+file:///home/mk/github/esm-polyfill/react#semver:^18.3.1"
  },
}
```

Why:

* `loose-envify` was used for `production` or `development` 
  contexts, but those was incorporated into package `exports`,
  so is not neccessary.
* `@types/react` to esm `git+file:///home/mk/github/esm-polyfill/react#semver:^18.3.1`
  but as re-labeled react have types to it is not neccessary,
* `react` to esm `git+file:///home/mk/github/esm-polyfill/react#semver:^18.3.1`
* `scheduler` to esm `git+file:///home/mk/github/esm-polyfill/scheduler#semver:^0.23.2`
