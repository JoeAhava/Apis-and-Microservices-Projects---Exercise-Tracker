const mongoose = require('mongoose');

const Exercise = require('../models/exerciseModel').Exercise;
const User = require('../models/userModel').User;

const addExercise = (req,res) => {
  
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = parseInt(req.body.duration);
  const date = (new Date(req.body.date)).getTime();
  
  
  
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
  
  const user = req.query.userId;
  let from = (new Date(req.query.from).getTime())-1;
  let to = (new Date(req.query.to).getTime())+1;
  let limit = parseInt(req.query.limit);
  
  if(isNaN(from)){
    Exercise.findOne({user: user}, (err, exercise) => {
      if(err){
        res.send(err);
      } else {
        console.log(exercise.date);
      }
    })
  }
  
  if(isNaN(to)){
    to = new Date().getTime();
  }
  
  Exercise.find({user: user, date: { $gt: from, $lt: to}}).limit(limit).exec( (err, exercises) => {
    if(err){
      res.send(err);
    } else {
      res.json(exercises);
    }
  });
  

}

module.exports = {

  addExercise: addExercise,
  searchExercise: searchExercise

}