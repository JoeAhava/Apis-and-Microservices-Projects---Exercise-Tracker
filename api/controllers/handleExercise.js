const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Exercise = require('../models/exerciseModel').Exercise;

const addExercise = (req,res) => {
  
  const userId = ObjectId(req.body.userId);
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;
  
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