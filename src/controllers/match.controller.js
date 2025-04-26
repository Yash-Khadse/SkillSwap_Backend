const Match = require('../models/match.model');

exports.getMatches = async (req, res) => {
  const matches = await Match.find({
    $or: [{ user1: req.user._id }, { user2: req.user._id }]
  }).populate('user1 user2');
  res.json(matches);
};