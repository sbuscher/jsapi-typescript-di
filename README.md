# Sample JSAPI Dependency Injection TypeScript App

## Setup

```bash
npm i --save-dev typescript  
npm i --save-dev rollup
npm i --save-dev @rollup/plugin-node-resolve
npm i --save-dev @rollup/plugin-commonjs 
npm i --save-dev @rollup/plugin-typescript
npm i --save-dev rollup-plugin-copy 
npm i --save-dev tslib
npm i @arcgis/core  
npm init --yes
tsc --init
mkdir jsapi-typescript-sample
mkdir src && touch src/index.tx
```

## Build and Serve

```bash
npm run build
cd dist
npx httpserver
```
