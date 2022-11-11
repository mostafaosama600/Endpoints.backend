const mongoose = require("mongoose");
const userSchema = require("../schema/user.scheme");

const User = mongoose.model("user", userSchema);

module.exports = User;
