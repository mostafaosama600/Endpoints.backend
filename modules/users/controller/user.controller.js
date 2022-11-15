const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  if (req.user.role == "admin") {
    const users = await User.find({}).select("-password");
    res.json({ message: "All users", data: users });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED" });
  }
};

const sign_up = async (req, res) => {
  let { name, email, age, password, role } = req.body;
  try {
    const users = User.findOne({ email });
    if (users) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "email is already existed",
      });
    } else {
      const newUser = new User({ name, email, age, password, role });
      const user = await newUser.save();
      res.json({ message: "register success", user });
    }
  } catch (error) {
    res.json({ message: "error", error });
  }
};
const sign_in = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "invalid email",
      });
      res.json({ message: "invalid email" });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ name: "ali" }, "shhhhh");

        res.status(StatusCodes.OK).json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: "password is not correct",
        });
      }
    }
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
  sign_up,
  getUser,
  deleteUser,
  updateUser,
  sign_in,
};
