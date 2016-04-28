var config = require('./config.js')

module.exports = function(knex) {
  var app = config(knex)
  var serverSideRenderingRoutes = require('./routes/server-side')(knex)
  var apiRoutes = require('./routes/api')(knex)

  app.use(serverSideRenderingRoutes)
  app.use('/api/v1', apiRoutes)

  return app
}
