var router = require('express').Router()

function generateApiRoutes(knex) {
  router.get('/tweets', function(req, res) {
    if (!req.session.userId) {
      res.send('permission denied')
    } else {
      knex.select().table('tweets')
      .then(function(data) {
        res.json(data)
      })
    }
  })

  return router
}

module.exports = generateApiRoutes
