const Message = require('../models/message.model');

exports.getMessages = async (req, res) => {
  const messages = await Message.find({ sender: req.user._id }).populate('match sender');
  res.json(messages);
};

exports.sendMessage = async (req, res) => {
  const { matchId, content } = req.body;
  const message = new Message({
    match: matchId,
    sender: req.user._id,
    content,
  });
  await message.save();
  req.app.get('io').to(matchId).emit('newMessage', message);
  res.status(201).json(message);
};