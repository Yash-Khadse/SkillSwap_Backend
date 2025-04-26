const User = require('../models/user.model');
const Match = require('../models/match.model');
const Message = require('../models/message.model');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getAllMatches = async (req, res) => {
  const matches = await Match.find().populate('user1 user2');
  res.json(matches);
};

exports.getAllMessages = async (req, res) => {
  const messages = await Message.find().populate('match sender');
  res.json(messages);
};