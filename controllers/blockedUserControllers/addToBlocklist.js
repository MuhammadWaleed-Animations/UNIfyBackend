const BlockedUser = require('../models/blockedUserModel');

// Add User to Blocklist
exports.addToBlocklist = async (req, res) => {
  try {
    const { email, reason } = req.body;

    // Check if user is already blocked
    const existingBlockedUser = await BlockedUser.findOne({ email });
    if (existingBlockedUser) {
      return res.status(400).json({ message: 'User is already in the blocklist' });
    }

    const blockedUser = new BlockedUser({ email, reason });
    await blockedUser.save();

    return res.status(201).json({ message: 'User added to blocklist', blockedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
