var router = require('express').Router()

//resource called tweet
//POST /tweets (tick)

//GET /tweets (tick)
//GET /tweets/:id

//PUT /tweets/:id - replace whole object
//PATCH /tweets/:id -replace part of an object
//e.g.
//{id: 7, tweet: 'hi', color: 'red'}
//PUT /tweets/7 {color: 'blue'} => {id: 7, color: 'blue'}
//PATCH /tweets/7 {color: 'blue'} => {id:7, tweet: 'hi', color: 'blue'}

//DELETE /tweets/:id

//make unauthenticated
function generateApiRoutes(knex) {
  router.get('/tweets', function(req, res) {
    knex.select().table('tweets')
    .then(function(data) {
      res.json(data)
    })
  })

  router.post('/tweets', function(req, res) {
    knex('tweets').insert({
      tweeted: req.body.tweet,
      userId: req.session.userId
    }).then(function(data) {
      res.json(data)
    })
  })

  router.get('/tweets/:id', function(req, res) { })
  router.put('/tweets/:id', function(req, res) { })
  router.patch('/tweets/:id', function(req, res) { })
  router.delete('/tweets/:id', function(req, res) { })

  return router
}

module.exports = generateApiRoutes
