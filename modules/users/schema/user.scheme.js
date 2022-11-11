const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "ali" },
    email: { type: String, required: true },
    password: { type: String },
    age: { type: Number, min: [6, "err min"] },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
