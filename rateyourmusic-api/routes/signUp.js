const express = require('express');
const router = express.Router();
const { User } = require("../models")

router.post('/', function(req, res, next){
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (user) {
        console.log("That username is currently in use. Please choose another name.");
        return res.status(400).send("That username is currently in use. Please choose another name.");
      };
      User.findOne({
        where: {
          email: req.body.email
        }
      })
        .then(user => {
          if (user) {
            console.log("That email is currently in use. Please choose another email.");
            return res.status(400).send("That email is currently in use. Please choose another email.")
          }
          if (req.body.password != req.body.passwordconfirm) {
            return res.status(400).send("Passwords don't match.")
          }
          User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          })
            .then(user => {
              return res.status(200).send("Account Created Successfully");
            })
            .catch(err => {
              return res.status(500).send("Error Creating User");
            })
        })
    })
});

module.exports = router;
