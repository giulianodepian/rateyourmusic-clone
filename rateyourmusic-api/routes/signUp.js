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
        return res.status(400).json({ "message": "That username is currently in use. Please choose another name." });
      };
      User.findOne({
        where: {
          email: req.body.email
        }
      })
        .then(user => {
          if (user) {
            console.log("That email is currently in use. Please choose another email.");
            return res.status(400).json({ message: "That email is currently in use. Please choose another email." })
          }
          if (req.body.password != req.body.passwordconfirm) {
            return res.status(400).json({ message: "Passwords don't match." })
          }
          User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          })
            .then(user => {
              return res.status(200).json({ message: "Account Created Successfully" });
            })
            .catch(err => {
              return res.status(500).json({ message: "Error Creating User" });
            })
        })
    })
});

module.exports = router;
