var request = require('supertest')
var test = require('tape')
var bcrypt = require('bcrypt')

var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'twitter_clone_test'
  },
  useNullAsDefault: true
})
var app = require('../app')(knex)

test('GET /api/v1/tweets', function(t) {
  knex('tweets')
    .insert({tweeted: 'hi', userId: 17})
    .then(function(res) {
      request(app)
        .get('/api/v1/tweets')
        .end(function(err, res) {
          console.log(res.body)
          t.equal(res.body[0].tweeted, 'hi')
          knex('tweets').del().then(function() {
            t.end()
          })
        })
    })
})

test('POST /api/v1/tweets', function(t) {
  t.end()
})

