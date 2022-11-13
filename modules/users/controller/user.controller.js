const User = require("../model/user.model");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ message: "All users", data: users });
};

// new way
const addNewUsers = async (req, res) => {
  let { name, email, age, password } = req.body;
  try {
    bcrypt.hash(password, 7, async function (err, hash) {
      if (err) throw err;
      const newUser = new User({ name, email, age, password });
      const user = await newUser.save();
      res.json({ message: "register success", user });
    });
  } catch (error) {
    res.json({ message: "error", error });
  }
};

// getting spescefice users
const getUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    res.json({ message: "success", user });
  } catch (error) {
    res.json({ message: "error", error });
  }
};
// getting delete users done
const deleteUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.deleteOne({ _id: id });
    res.json({ message: "deleted success", user });
  } catch (error) {
    res.json({ message: "error", error });
  }
};
// getting update users done
const updateUser = async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  try {
    const user = await User.updateOne({ _id: id }, { name: name });
    res.json({ message: "updated success", user });
  } catch (error) {
    res.json({ message: "error", error });
  }
};

module.exports = {
  getAllUsers,
  addNewUsers,
  getUser,
  deleteUser,
  updateUser,
};
