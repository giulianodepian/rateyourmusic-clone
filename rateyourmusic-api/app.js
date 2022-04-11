const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');
const models = require('./models/');
const getStats = require('./routes/getStats');
const signUp = require('./routes/signUp');
const login = require('./routes/login');

var SequelizeStore = require("connect-session-sequelize")(session.Store);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: "hyper secret key",
    store: new SequelizeStore({
      db: models.sequelize,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);
app.use(passport.authenticate('session'));
app.use('/getstats', getStats);
app.use('/signUp', signUp);
app.use('/login', login)

models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

models.sequelize.sync()
  .then(result => {
    console.log("Success DB sync");
  })
  .catch(err => {
    console.log(err);
  });

 module.exports = app;
