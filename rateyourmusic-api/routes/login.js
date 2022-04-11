const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require("../models");

passport.use(new LocalStrategy(function verify(username, password, cb) {
  const checkLogin = async (userExist) => {
    if(await userExist) {
      const verification = await userExist.validPassword(password);
      if (verification) {
        return cb(null, userExist);
      }
      else {
         return cb(null, false, { message: 'Incorrect username or password.' });
      }
    }
    else {
      return cb(null, false, { message: 'Incorrect username or password.' });
    }
  }

User.findOne({
    where: {
      username: username
    }
  })
  .then(user => {
    if (user) {
      return checkLogin(user);
    }
    else {
      return checkLogin(null)
    }
  })
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


router.post('/', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      console.log("Error")
      return next(err);
    }
    else if (!user) {
      console.log("Auth Failed")
      return res.json({
        redirectURL: 'false'
      })
    }
    else {
      console.log("Auth Success")
      return res.json({
        redirect: 'true'
      })
    }
  })(req, res, next);
});

module.exports = router;
