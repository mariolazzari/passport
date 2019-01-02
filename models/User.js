// user model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create user schema
const UserSchema = new Schema({
  username: { type: String, required: true },
  googleId: String,
  thumbnail: String
});

// create user model
const User = mongoose.model("user", UserSchema);

// export user model
module.exports = User;
