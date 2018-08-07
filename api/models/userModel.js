const mongoose = require('mongoose');
const Schema = mongoose.Shcema;

const userSchema = new Schema({
  username: String
});

module.exports = {
 User: mongoose.model("User", userSchema)
}