const mongoose = require('mongoose');

const Exercise = require('../models/exerciseModel').Exercise;
const User = require('../models/userModel').User;

const addExercise = (req,res) => {
  
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = parseInt(req.body.duration);
  const date = Date.parse(Date(req.body.date));
  
  
  
  User.findById((userId), (err, user) => {
    if(err){
      res.send(err);
    } else {
      
      const exercise = {
        user: user.id,
        description: description,
        duration: duration,
        date: date,
      }
      
      Exercise.create(exercise, (err, data) => {
        
        if(err){
          res.send(err);
        } else {
          
          res.json(data);
        }
      })
    }
  })            
}

const searchExercise = (req,res) => {
  
  const user = req.params.userId;
  let from = req.params.from;
  let to = req.params.to;
  let limit = req.params.limit;
  
  console.log(user);
  console.log(from);
  console.log(to);
  console.log(limit);

}

module.exports = {

  addExercise: addExercise,
  searchExercise: searchExercise

}