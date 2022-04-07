const express = require('express');
const router = express.Router();
const { User } = require("../models")

router.post('/', function(req, res, next){

  const errors = [];
  const messages = [];
  const userExist = User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
      if (user) {
        return { "message": "That username is currently in use. Please choose another name." };
      } else {
        return null;
      }
    });
    const emailExist = User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
      if (user) {
        return { message: "That email is currently in use. Please choose another email." }
      } else {
        return null;
      }
    });
    const checkSignUp = async () => {
      var errorPass = null;
      if (req.body.password != req.body.passwordconfirm) {
        errorPass = { message: "Passwords don't match." }
      };
      errors.push(await userExist);
      errors.push(await emailExist);
      errors.push(await errorPass);
      const noErrors = errors.every(element => element === null);
      if (noErrors) {
        User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
        })
        .then(user => {
          return res.status(200).json({ messages: [] });
        })
        .catch(err => {
          return res.status(500).json({ messages: [{ message: "Error Creating User" }] });
        })
      } else {
        errors.forEach((element, i) => {
          if (element !== null) {
            messages.push(element)
          }
        });
        res.status(400).json({messages: messages})
      }
    }
    checkSignUp();
});

module.exports = router;
