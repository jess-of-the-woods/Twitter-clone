var createApp = require('./config.js')
var apiRouteGenerator = require('./routes/api')
var serverRouteGenerator = require('./routes/server-side')

function appGenerator(knex) {
  var app = createApp(knex)

  var serverSideRenderingRoutes = serverRouteGenerator(knex)
  var apiRoutes = apiRouteGenerator(knex)

  app.use(serverSideRenderingRoutes)
  app.use('/api/v1', apiRoutes)

  return app
}

module.exports = appGenerator
