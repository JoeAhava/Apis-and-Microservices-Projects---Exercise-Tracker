const mongoose = require('mongoose');
const User = require('../models/userModel').User;
const saveUser = function(req, res){
  User.find({"username": req.body.username}, (err, username) => {
    if(!username.length){
      User.create({"username": username}, (err, data) => {
        if(err){
          res.send(err);
        } else {
          res.json(data);
        }
      })
    } else {
      res.send("username already taken")
    }
  })
}

module.exports = { saveUser: saveUser}