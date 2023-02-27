const User = require("../models/User");
const Note = require("../models/Notes");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc GET all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {});

// @desc create new users
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {});

// @desc Update a users
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {});

// @desc delete A users
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {});

module.expots = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
