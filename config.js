var express = require('express');
var hbs = require('express-hbs')
var session = require('express-session')
var KnexSessionStore = require('connect-session-knex')(session)
var path = require('path');
var bodyParser = require('body-parser')

function createApp(knex) {
  var app = express(); // this is where the app is first created

  app.use(express.static("views"));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
  app.use(bodyParser.urlencoded({ extended:true }))

  var databaseSessionStore = new KnexSessionStore({ knex: knex})

  app.use(session({
    secret: 'ssshhhhhh! Top secret!',
    saveUninitialized: true,
    resave: true,
    store: databaseSessionStore
  }))
  app.knex = knex
  return app
}

module.exports = createApp
