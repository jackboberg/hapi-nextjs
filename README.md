# hapi-nextjs

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]

> A nextjs plugin for hapi

This plugin provides an easy way to add a custom [`hapi`] server to a [`nextjs`] project.

_NOTE: There are currently no tests for this plugin._

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

    npm install hapi-nextjs

## Usage

```js

const Hapi = require('hapi')
const server = new Hapi.Server()

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT || 3000, 10)

const nextPlugin = {
  register: require('hapi-nextjs')
  options: { dev }
}

server.connection({ port })
server.register(nextPlugin, (err) => {
  if (err) throw err

  server.start((err) => {
    if (err) throw err

    console.log(`> Ready on ${server.info.uri}`)
  })
})

```

### Details

- has a `peerDependency` on `next >= 2`, so bring your own `next`
- binds a catch-all route, so add your custom routes/plugins before registering

### Options

- passes plugin `options` directly to `next`, in `2.x` those options are:
  - `dev` (`bool`) whether to launch Next.js in dev mode - default `false`
  - `dir` (`string`) where the Next project is located - default `'.'`
  - `quiet` (`bool`) Hide error messages containing server information - default `false`

## Contribute

PRs welcome! Please read the [contributing guidelines](contributing.md) and 
the [code of conduct](code-of-conduct.md).

## License

[MIT © Jack Boberg.](LICENSE)  

[npm-image]: https://img.shields.io/npm/v/hapi-nextjs.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/hapi-nextjs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[`hapi`]: https://hapijs.com
[`nextjs`]: https://github.com/zeit/next.js
