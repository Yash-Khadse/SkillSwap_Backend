const User = require('../models/user.model');

exports.getMe = async (req, res) => {
  res.json(req.user);
};

exports.updateMe = async (req, res) => {
  try {
    const updates = req.body;
    updates.profileCompleted = !!(
      updates.name &&
      updates.teachSkills?.length &&
      updates.learnSkills?.length &&
      updates.availability?.length
    );
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};