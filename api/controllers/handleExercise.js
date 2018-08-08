const mongoose = require('mongoose');

const Exercise = require('../models/exerciseModel').Exercise;
const User = require('../models/userModel').User;

const addExercise = (req,res) => {
  
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = parseInt(req.body.duration);
  const date = req.body.date;
  
  
  
  User.findById((userId), (err, user) => {
    if(err){
      res.send(err);
    } else {
      
      const exercise = {
        userId: user.id,
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
module.exports = {

  addExercise: addExercise

}