const Next = require('next')
const { name, version } = require('./package.json')

exports.register = (server, options, next) => {
  const app = Next(options)
  const nextHandler = app.getRequestHandler()

  app.prepare().then(() => {
    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: ({ raw, url }, reply) => {
        nextHandler(raw.req, raw.res, url).then(() => reply.close(false))
      }
    })

    next()
  })
}

exports.register.attributes = { pkg: { name, version } }
