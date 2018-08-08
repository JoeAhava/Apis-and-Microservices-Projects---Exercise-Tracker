const mongoose = require('mongoose');

const Exercise = require('../models/exerciseModel').Exercise;

const addExercise = (req,res) => {
  
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date(req.body.date);
  
  const exercise = {
    
    userId: userId,
    description: description,
    duration: duration,
    date: date,
  }
  
  Exercise.create( exercise, (err, data) => {
    if(err) {
      res.send(err)
    } else {
      res.json(data);
    }
  })
}

module.exports = {

  addExercise: addExercise

}