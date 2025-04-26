const User = require('../models/user.model');
const { getToken } = require('next-auth/jwt');

module.exports = async (req, res, next) => {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token || !token.email) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    const user = await User.findOne({ email: token.email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};