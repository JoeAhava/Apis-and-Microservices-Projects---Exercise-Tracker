const mongoose = require('mongoose');
const User = require('../models/userModels');
const saveUser = function(username){
  User.find({"username": username}, (err, username) => {
    if(!username.length){
      User.create({"username": username}, (err, data) => {
        if(err){
          console.log(err)
        } else {
          return data;
        }
      })
    }
  })
}