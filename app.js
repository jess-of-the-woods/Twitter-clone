var config = require('./config.js')

module.exports = function(knex) {
  var app = config(knex)
  var serverSideRenderingRoutes = require('./routes/server-side')(knex)
  app.use(serverSideRenderingRoutes)
  return app
}
