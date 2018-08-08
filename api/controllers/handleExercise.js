const mongoose = require('mongoose');

const Exercise = require('../models/exerciseModel').Exercise;

const addExercise = (req,res) => {
  
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date(req.body.date);
}