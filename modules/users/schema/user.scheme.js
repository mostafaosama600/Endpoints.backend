const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

userSchema.pre("save", async function (next) {
  console.log("pre hash password");
  // console.log(this);

  this.password = await bcrypt.hash(this.password, 7);
  next();
});

userSchema.pre("find", function () {
  console.log(`before **** ${new Date()}`);
});
userSchema.post("find", function () {
  console.log(`after **** ${new Date()}`);
});

module.exports = userSchema;
