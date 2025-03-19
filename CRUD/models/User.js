const mongoose = require("mongoose");

const schema = mongoose.Schema({
  UserName: String,
  UserEmail: String,
  UserPassword: String,
  UserMobile: Number,
});

module.exports = mongoose.model("User", schema);
