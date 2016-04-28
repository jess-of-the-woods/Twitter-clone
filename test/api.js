var request = require('supertest')
var test = require('tape')

var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'twitter_clone_test'
  },
  useNullAsDefault: true
})
var app = require('../app')(knex)

test('/api/v1/tweets', function(t) {
  request(app)
    .get('/api/v1/tweets')
    .end(function(err, res) {
      t.equals(res.text, 'permission denied')
      t.end()
    })

})
