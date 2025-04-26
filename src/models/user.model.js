const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: String,
  startTime: String,
  endTime: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  image: String,
  teachSkills: [String],
  learnSkills: [String],
  bio: String,
  availability: [scheduleSchema],
  profileCompleted: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);