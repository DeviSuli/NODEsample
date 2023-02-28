const User = require("../models/User");
const Note = require("../models/Notes");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc GET all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users) {
    return res.status(400).json({ message: "No Users found" });
  }
  res.json(users);
});

// @desc create new users
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  //confirm data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  //check for DUplicate
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate Username!" });
  }

  //Hash Password
  const hashedPwd = await bcrypt.hash(password, 10); // salt password

  const userObject = { username, password: hashedPwd, roles };

  //Create and store user
  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ mesage: `New User ${username} created` });
  } else {
    res.status(401).json({ message: "Invalid user data received" });
  }
});

// @desc Update a users
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {});

// @desc delete A users
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
