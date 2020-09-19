#!/usr/bin/env bash

## Settings
BIN="./node_modules/.bin"
TSC="${BIN}/tsc"

## Clean.
(cd src && find . -iname "*.map" -exec rm {} \;)
(cd src && find . -iname "*.d.ts" -exec rm {} \;)
(cd src && find . -iname "*.js" -exec rm {} \;)
(cd src && find . -iname "*.mjs" -exec rm {} \;)

## Build.
"${TSC}" --build tsconfig.release_mjs.json
mv src/index.js src/index.mjs
"${TSC}" --build tsconfig.release_js.json
