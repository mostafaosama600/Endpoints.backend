const User = require("../model/user.model");

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ message: "All users", data: users });
};

const addNewUsers = async (req, res) => {
  let { name, email, age, password } = req.body;
  let newUser = new User({ name, email, age, password });

  // way number 1
  try {
    await newUser.save();
    res.json({ message: "register success" });
  } catch (error) {
    res.json({ message: "error", error });
  }

  // way number 2
  // try {
  //   await User.insertMany({ name, email, age, password });
  //   res.json({ message: "register success" });
  // } catch (error) {
  //   res.json({ message: "error", error });
  // }
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
