const BlockedUser = require('../models/blockedUserModel');

// Get All Blocked Users
exports.getAllBlockedUsers = async (req, res) => {
  try {
    const blockedUsers = await BlockedUser.find();
    return res.status(200).json(blockedUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
