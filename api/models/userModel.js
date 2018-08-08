const mongoose = require('mongoose');
const Schema = mongoose.Shcema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  }
});

module.exports = {
 User: mongoose.model("User", userSchema)
}