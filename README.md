# Electron and Vite Boilerplate

Clone this repo: 
```
https://github.com/AlexString/electron-vite-boilerplate.git
```

## Description
This boilerplate was made following this site about 
[How to create an Electron Application with Vite](https://dev.to/olyno/how-to-create-an-electron-application-with-vite-im) so credits got to the user **Olyno** and thanks. 

In the post prepares an App with Electron + Vite + Svelte.

## About this boilerplate
It follows the 
[Quick Start Guide](https://www.electronjs.org/docs/latest/tutorial/quick-start)
that Electron has in its documentation.

This boilerplate is prepared to just start installing modules and etc.

- **Uses yarn by default**

## What is installed

- [Concurrently](https://www.npmjs.com/package/concurrently) 
for executing Vite and Electron at the same time.
- [cross-env](https://www.npmjs.com/package/cross-env) 
for setting an environment at launch

# About the configuration

## What scripts are implemented
In `package.json`

```json
"scripts": {
    "start": "npm run build && npm run electron:start",
    "dev": "concurrently -k 'vite' 'npm run electron:dev'",
    "build": "vite build",
    "preview": "vite preview",
    "electron:dev": "cross-env IS_DEV=true electron-forge start",
    "electron:build": "electron-forge make",
    "electron:package": "electron-forge package"
},
```
## Vite configuration
```javascript
import { build, defineConfig } from "vite";

export default defineConfig({
	base: process.env.IS_DEV !== 'true' ? './' : '/',
	build: {
		outDir: 'app/build',
	}
})
```
