# @esm-polyfill/react-dom@18.3.1

[react-dom](https://www.npmjs.com/package/react-dom) in ESM format.


## Install

Install:

```sh
npm i react-dom@esm-polyfill/react-dom
# specific version
npm i react-dom@esm-polyfill/react-dom#semver:^18.3.1
```

## Use 

Reference:

```ts
import ReactDom from 'react-dom'
import * as RD from 'react-dom'

import ReactDomClient from 'react-dom/client'
import * as RDC from 'react-dom/client'

// ...

```

## How this package was created?



Dependencies for version 18.3.1 in `package.json` was added in
following manner:

```json
{
  "devDependencies": {
    "...": "...",

    "react-18.3.1": "npm:react@18.3.1",
    "@types/react-18.3.1": "npm:@types/react@18.3",

    "react-dom-18.3.1": "npm:react-dom@18.3.1",
    "@types/react-dom-18.3.1": "npm:@types/react-dom@18.3"
  },
  "overrides": {
    "...": "...",
    
    "react-dom-18.3.1": {
      "react": "$react-18.3.1"
    },
    "@types/react-dom-18.3.1": {
      "@types/react": "$@types/react-18.3.1"
    },

    "comment": "Peer dependencies must point the same pkg.",
    "react-dom-X.X.X": {
      "react": "$react-18.3.1"
    },
    "@types/react-dom-X.X.X": {
      "@types/react": "$@types/react-18.3.1"
    }
  },
}
```


Then orginal `package.json`'s, LICENSE's,.. etc. source files 
were copied to target directory:


```sh

mkdir react-dom-18.3.1

# copy .d.ts
cd node_modules/react-dom-types-18.3
cp --parents *.d.ts **/*.d.ts ../../react-dom-18.3.1
cd ../../

# copy types license, package.json and readme
cp node_modules/@types/react-dom-18.3.1/package.json react-dom-18.3.1/package-types.json
cp node_modules/@types/react-dom-18.3.1/README.md    react-dom-18.3.1/README-types.md
cp node_modules/@types/react-dom-18.3.1/LICENSE      react-dom-18.3.1/LICENSE-types

# copy js license, package.json and readme
cp node_modules/react-dom-18.3.1/package.json react-dom-18.3.1/package-js.json
cp node_modules/react-dom-18.3.1/README.md    react-dom-18.3.1/README-js.md
cp node_modules/react-dom-18.3.1/LICENSE      react-dom-18.3.1/LICENSE-js

# copy js package.json to be modified
cp node_modules/react-dom-18.3.1/package.json package-18.3.1.json

```

Then core cjs files are transformed by rollup
(see [rollup config file](./rollup.config-18.3.1.mjs)):


```sh

# transform cjs modules to mjs and save them to react-dom-18.3.1/esm
# (but only those without conditional requires which will be 
# transformed manually)
npx rollup -c rollup.config-18.3.1.mjs

```

Top level files were manually converted:

```sh

# copy modules which will be transformed manually
# (top level modules with conditional require's)
cp node_modules/react-dom-18.3.1/*.js react-dom-18.3.1/

```

in every file abowe change:

```js

// from:
module.exports = require('./cjs/...')
// to:
export * from '../esm/...'
export { default } from '../esm/...'

// and from:
const ReactDom = require('@esm-polyfill/react-dom')
// to:
import * as ReactDom from '@esm-polyfill/react-dom'

```

`package.json` was edited to point to new `exports`, `dependencies`
and `devDependencies`.

```json
{
  "name": "@esm-polyfill/react-dom",
  "description": "React-DOM in ESM format",
  "keywords": [
    "react", "esm", "dom"
  ],
  "version": "18.3.1",
  "repository": {
    "type": "git",
    "url": "https://github.com/esm-polyfill/react-dom"
  },
  "license": "MIT",
  "files": [
    "react-dom-18.3.1/",
    "package.json",
    "README"
  ],
  "dependencies": {
    "scheduler": "github:esm-polyfill/scheduler#semver:^0.23.2"
  },
  "peerDependencies": {
    "react": "github:esm-polyfill/react#semver:^18.3.1"
  },
  "exports": "... nice scoped exports ...",
  "...": "..."
}
```

Why we ended with such dependencies? Because:

* `loose-envify` was used for `production` or `development` 
  contexts, but those was incorporated into package `exports`,
  so is not neccessary.
* `@types/react` to esm `github:esm-polyfill/react#semver:^18.3.1`
  but as re-labeled react have types to it is not neccessary,
* `react` to esm `github:esm-polyfill/react#semver:^18.3.1`
* `scheduler` to esm `github:esm-polyfill/scheduler#semver:^0.23.2`
