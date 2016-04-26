var express = require('express');
var hbs = require('express-hbs')
var session = require('express-session')
var KnexSessionStore = require('connect-session-knex')(session)

var app = express();
var path = require('path');
var knex = require('knex')
var bodyParser = require('body-parser')

app.use(express.static("views"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended:true }))

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  },
  useNullAsDefault: true
})

var store = new KnexSessionStore({ knex: knex})
app.use(session({
  secret: 'ssshhhhhh! Top secret!',
  saveUninitialized: true,
  resave: true,
  store: store
}))
app.knex = knex

module.exports = {
  app: app,
  knex: knex
}
