// model imports

const User = require("../model/user.model");

const getAllUsers = async (req, res) => {
  const values = await User.find();
  res.send(values);
};

const createUsers = async (req, res) => {
  console.log(req.body);
  const user = User(req.body);
  await user.save();
  res.send("saved");
};

module.exports = { getAllUsers, createUsers };
