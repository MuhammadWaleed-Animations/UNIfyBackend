const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const BlockedUser = require('../../UnifyGlitch/models/blockedUserModel');
const Admin = require('../../UnifyGlitch/models/adminModel');

exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isBlocked = await BlockedUser.findOne({ user: user._id });
    if (isBlocked) {
      return res.status(403).json({ message: 'User is blocked' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isAdmin = await Admin.findOne({ user: user._id });

    return res.status(200).json({
      user,
      isAdmin: !!isAdmin,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
